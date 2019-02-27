import React, { Component } from 'react';
import './App.css';

/*
Broken at the moment. We found a library called reactstrap that has a bunch of cool elements we want to use, like this navbar.

import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import { NavbarToggler } from 'reactstrap';
import { Collapse } from 'reactstrap';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { UncontrolledDropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { DropdownMenu } from 'reactstrap';
import { DropdownItem } from 'reactstrap';

<Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
*/

/*
Stupid old navbar
        <nav id="nav" class="navbar sticky-top">
          <a href="#welcome">Welcome</a>
          <a href="#bigBang1">Universe Origins</a>
          <a href="#earthOrigins">Earth Origins</a>
        </nav>
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
          crossorigin="anonymous"></link>
        </header>

        <main>
          <nav class="navbar navbar-default sticky-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#welcome">DiscoverET</a>
              </div>
              <div class="collapse navbar-collapse"   id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#welcome">Welcome</a></li>
                  <li><a href="#universeOrigins1">Universe Origins</a></li>
                  <li><a href="#earthOrigins1">Earth Origins</a></li>
                  <li class="dropdown">
                    <a href="#dropdown-menu" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#welcome">Welcome</a></li>
                      <li><a href="#universeOrigins1">Universe Origins</a></li>
                      <li><a href="#earthOrigins1">Earth Origins</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <body>
            <div class="page" id="page1">
              <a id="welcome"></a>
              <content class="content">
                <p class="blurb">Welcome to discoverET</p>
              </content>
            </div>
            
            <div class="page" id="page2">
              <a id="universeOrigins1"></a>
              <content class="content">
                <p class="blurb">13.82 years ago, the universe was born.
                </p>
              </content>
            </div>
            
            <div class="page" id="page3">
              <a id="universeOrigins2"></a>
              <content class="content"> 
                <p class="blurb">All matter that exists in our universe today expanded from an infinitely small and dense singularity into the endless expanse of the cosmos.
                </p>
              </content> 
            </div>

            <div class="page" id="page4">
              <a id="earthOrigins1"></a>
              <content class="content">
                <p class="blurb">Earth formed from accumulation of matter in the orbit of the sun.
                </p>
              </content>
            </div>
          </body>
        </main>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossorigin="anonymous">
        </script>
      </div>
    );
  }
}

export default App;
