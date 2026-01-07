import { Link as RouterLink } from 'react-router-dom';
import { Heading, Stack } from '../../components/Primitives';
import { routes } from '../../routes';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export function DevLinksPage() {
  // Show all non-production routes except the dev links page itself
  const devLinks = routes.filter(route => route.path !== '/dev' && route.path !== '/' && route.path !== '/running');
  
  return (
    <Container>
      <Stack spacing="lg">
        <Heading level={1}>Dev Links</Heading>
        
        <LinkList>
          {devLinks.map(route => (
            <LinkItem key={route.path}>
              <StyledLink to={route.path}>{route.label}</StyledLink>
            </LinkItem>
          ))}
        </LinkList>
      </Stack>
    </Container>
  );
}
