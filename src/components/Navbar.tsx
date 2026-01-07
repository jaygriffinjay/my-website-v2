import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Heading } from './Primitives';

const NavContainer = styled.nav`
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const NavContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    opacity: 0.7;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

const NavLink = styled(RouterLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export function Navbar() {
  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <Heading level={1}>jaygriff.com</Heading>
        </Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/running">Running</NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}
