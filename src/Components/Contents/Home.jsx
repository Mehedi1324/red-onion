import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import '../StyleSheets/Home.css';
import Meals from './Meals';
import WhyUs from './WhyUs';
const Home = () => {
  return (
    <div>
      <div className="hero__section d-flex search__title ">
        <div>
          <h1 className="title m-auto">Best food is waiting for your belly</h1>
        </div>

        <InputGroup className=" search__input pb-3">
          <FormControl placeholder="Search Food Items" />

          <InputGroup.Text id="basic-addon2" className=" btn btn-danger">
            Search
          </InputGroup.Text>
        </InputGroup>
      </div>
      <Meals className="align-center"></Meals>
      <WhyUs className="why_us"></WhyUs>
    </div>
  );
};

export default Home;
