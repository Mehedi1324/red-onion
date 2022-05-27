import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import h_logo from '../../Components/CompImg/f_logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from '../Hooks/useAuth';
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar bg="dark" className="p-0" fixed="top">
        <div className="d-flex w-100 justify-content-between px-3">
          <div>
            <Nav.Link as={NavLink} to="/">
              <img style={{ width: '170px' }} src={h_logo} alt="" />
            </Nav.Link>
          </div>
          <Nav
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Nav.Link as={NavLink} to="/orders">
              <ShoppingCartIcon style={{ color: 'white' }} />
            </Nav.Link>
            {!user.email ? (
              <Nav.Link as={NavLink} to="/login">
                <Button
                  className="btn btn-danger border-round "
                  style={{ borderRadius: '30px' }}
                >
                  Login
                </Button>
              </Nav.Link>
            ) : (
              <Button
                onClick={logout}
                className="btn btn-danger border-round "
                style={{ borderRadius: '30px' }}
              >
                {user.displayName} Logout
              </Button>
            )}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
