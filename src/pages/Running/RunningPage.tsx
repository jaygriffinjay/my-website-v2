import styled from '@emotion/styled';
import { Heading, Stack, Paragraph, Container } from '../../components/Primitives';

const ArticleList = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
`;

const ArticleItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  border-left: 3px solid ${props => props.theme.colors.primary};
  padding-left: ${props => props.theme.spacing.md};
`;

const ArticleTitle = styled.h3`
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  color: ${props => props.theme.colors.primary};
`;

const ArticleDate = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.background};
`;

export function RunningPage() {
  return (
    <Container size="md">
      <Stack spacing="lg">
        <Heading level={1}>Running</Heading>
        
        <Paragraph>
          Training logs, running data analysis, and reflections on miles.
        </Paragraph>
        
        <ArticleList>
          {/* Articles will go here */}
          <Paragraph style={{ color: '#999', fontStyle: 'italic' }}>
            No articles yet.
          </Paragraph>
        </ArticleList>
      </Stack>
    </Container>
  );
}
