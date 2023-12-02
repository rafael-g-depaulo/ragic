import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  padding: 0.8rem 0.4rem;
  background: linear-gradient(180deg, #83becd, #b8e3d77a);
  width: 100%;

  position: fixed;
  top: 0;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;

  a {
    text-decoration: none;
    color: #03303b;

    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: #83becd;

    transition: 0.1s;
    transform: none;
    box-shadow: none;

    &:hover {
      transform: scale(1.2);
      background: #2196f3;
      box-shadow: 0.125rem 0.125rem 0.6rem 0.125rem #000000a8;
    }
  }
`;

const NavbarParentStyle = createGlobalStyle`
	*:has(> ${Header}) {
		// give parent enough of a margin to space out header.
		// link font size + link y margin + navbar y margin
		padding-top: calc(1.0rem + 2*0.5rem + 2*0.8rem);
	}
`;

export const Navbar = () => {
  return (
    <Header>
      <NavbarParentStyle />
      <NavList>
        <Link to="/">Home</Link>
      </NavList>
    </Header>
  );
};
