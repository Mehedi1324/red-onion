import { useEffect, useState } from 'react';
import initializeAuthentication from './initializeAuthentication';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();

  // On Auth State Change________________________

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // Google Sign In with Pop Up_______________________

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sing Out__________________________________

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign Up With Email and Password__________________

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const signedUpUser = result.user;
        console.log(signedUpUser);
        setUser(signedUpUser);
        emailVerification();
        displayName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Set Display Name______________________

  const displayName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  // Name Handle _____________________________

  const nameHandle = (e) => {
    setName(e.target.value);
  };

  // Get email form User ______________________

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  // Get email form User ______________________

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  // Verify Email _______________________________

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  // Password Reset Email______________________

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch(setError(error.message));
  };

  // Sign In with email and password_____________________

  const handleSignInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const signInInfo = result.user;
      setUser(signInInfo);
    });
  };

  return {
    user,
    error,
    handleGoogleSignIn,
    logout,
    handleSignUp,
    emailHandle,
    passwordHandle,
    nameHandle,
    handleSignInWithEmail,
    handlePasswordReset,
  };
};
export default useFirebase;
