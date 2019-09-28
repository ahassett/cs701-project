// make sure you install react-bootstrap! use npm install react-bootstrap bootstrap
import React from 'react';
import Head from 'next/head';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <div>
    <Head>
      <title>Schedule Planner</title>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <p className="welcomeback">
      Welcome Back!
    </p>
    <div className='schedule'>
        <Button variant="outline-dark" className="button" style={{'margin-left': '455px'}}>New Schedule</Button>
    </div>
    <div className='catelog'>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{'position': 'fixed', 'top': '90px', 'margin-left': '555px'}}>
                Select Semester
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Nav variant="tabs" defaultActiveKey="./" style={{'margin-top':'20px'}}>
            <Nav.Item>
                <Nav.Link href="./">Catelog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Saved Classes</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  </div>
)

/*

const Index = () => (
  <div>
  <h1 className='welcomeback'>Welcome back!</h1>
    <div className='schedule'>
    </div>
    <div className='catelog'>
    </div>
  </div>
);
*/

// create couple devs that create the foundation for the home website
// plan for first week: centralize the catalog and the schedule planner
//                      establish connection between backend and frontend
// second week: start working on HTML and CSS, and other components that make up the design of the website

// export default Index;
