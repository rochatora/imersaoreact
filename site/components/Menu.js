import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  /*     UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem, */
  NavbarText,
  Container
} from 'reactstrap';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <Container>
          <NavbarBrand href="/">Icone</NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/orcamento">Orçamento</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
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
                        </UncontrolledDropdown> */}
            </Nav>
            <NavbarText>Imersão Celke</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu
