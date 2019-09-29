// make sure you install react-bootstrap! use npm install react-bootstrap bootstrap
import React from 'react';
import Head from 'next/head';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Tab, Tabs, TabContent } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: props.activeTab || '1' ,
      saved: false };

    this.handleSelect = this.handleSelect.bind(this); // bind action handler
    this.handleSave = this.handleSave.bind(this);
    }

handleSelect(selectedTab) {
  // The active tab must be set into the state so that
  // the tabs component knows about the change and re-renders.
    this.setState({
        activeTab: selectedTab });
}
handleSave(bool) {
    this.setState({
        saved: !bool });
}

 render(){
     return(
         <div>
           <Head>
             <title>Schedule Planner</title>
             <link href="/static/style.css" rel="stylesheet" />
           </Head>
           <p className="welcomeback">
             Welcome Back!
           </p>
           <div className='schedule'>
               <Button variant="success" className="button" style={{'margin-left': '455px'}}>New Schedule</Button>
           </div>
           <div className='catelog'>

         <Tabs defaultActiveKey={this.state.activeTab} id="tabs" onSelect={this.handleSelect} style={{'marginTop':'20px'}}>
             <Tab eventKey='1' title="Catelog">
                 <Accordion defaultActiveKey="0">
                     <Card>
                         <Accordion.Toggle as={Card.Header} eventKey="0">
                         Class Title<Button variant="success" className='save-button'>Save</Button>
                        </Accordion.Toggle>
                         <Accordion.Collapse eventKey="0">
                             <Card.Body>Class Details</Card.Body>
                         </Accordion.Collapse>
                     </Card>
                     <Card>
                         <Accordion.Toggle as={Card.Header} eventKey="1">Class Title 2</Accordion.Toggle>
                         <Accordion.Collapse eventKey="1">
                             <Card.Body>Hello! I'm another body</Card.Body>
                         </Accordion.Collapse>
                     </Card>
                 </Accordion>
             </Tab>

             <Tab eventKey='2' title="Saved Classes">Content 2</Tab>
         </Tabs>

         <Dropdown id='select-semester'>
             <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{'position': 'fixed', 'top': '90px', 'marginLeft': '555px'}}>
                 Select Semester
             </Dropdown.Toggle>

             <Dropdown.Menu>
                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
         </Dropdown>
     </div>
   </div>
     );
     console.log(this.state.saved)
 }
};

export default Index;

/*

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

        <Tabs defaultActiveKey="home" transition={true} id="noanim-tab-example" style={{'margine-top':'20px'}}>
            <Tab eventKey="home" title="Home">
                <ControlledTabs />
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <ControlledTabs />
            </Tab>
        </Tabs>

        <Dropdown id='select-semester'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{'position': 'fixed', 'top': '90px', 'margin-left': '555px'}}>
                Select Semester
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">Class Title</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">Class Title 2</Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
  </div>
)
*/
