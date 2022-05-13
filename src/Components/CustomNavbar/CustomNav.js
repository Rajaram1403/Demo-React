import React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class CustomNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen1: false,
      dropdownOpen2: false
    };
  }

  toggle(id) {
    this.setState(prevState => ({
        [id]: !prevState[id]
    }));
  }

  onMouseEnter(id) {
    this.setState({[id]: true});
  }

  onMouseLeave(id) {
    this.setState({[id]: false});
  }
  render() {
    return (
      <div>
        <Navbar className='ic-blog' color="light" light expand="md">
          <NavbarBrand href="/"><img src='https://icdevcdn.lightersideofrealestate.com/uploads/2015/12/innercircle-logo-top.png' width={185}/></NavbarBrand>
          <NavbarToggler className='blog-tag' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Dashboard</NavLink>
              </NavItem>
              <UncontrolledDropdown onMouseOver={()=> this.onMouseEnter("dropdownOpen1")} onMouseLeave={()=> this.onMouseLeave("dropdownOpen1")} isOpen={this.state.dropdownOpen1} toggle={()=> this.toggle("dropdownOpen1")} nav inNavbar>
                <DropdownToggle nav caret>
                Content 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Articles
                  </DropdownItem>
                  <DropdownItem>
                    memes
                  </DropdownItem>
                  <DropdownItem>
                    Videos
                  </DropdownItem>
                  <DropdownItem>
                    Branded Booklets
                  </DropdownItem>
                  <DropdownItem>
                    Email & Letter Templates
                  </DropdownItem>
                  <DropdownItem>
                    Witty Postcards
                  </DropdownItem>
                  <DropdownItem>
                    Facebook Covers
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown onMouseOver={()=> this.onMouseEnter("dropdownOpen2")} onMouseLeave={()=> this.onMouseLeave("dropdownOpen2")} isOpen={this.state.dropdownOpen2} toggle={()=> this.toggle("dropdownOpen2")} nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Inner Circle Engage 
                  </DropdownItem>
                  <DropdownItem>
                    Agent Scripts 
                  </DropdownItem>
                  <DropdownItem>
                    Training Videos 
                  </DropdownItem>
                  <DropdownItem>
                    Weekly Round-ups 
                  </DropdownItem>
                  <DropdownItem>
                    Vendor Deals 
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/"><i class="fa fa-search" aria-hidden="true"></i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Nav>
            <NavItem>
                <NavLink href="/components/">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </NavLink>
              </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}