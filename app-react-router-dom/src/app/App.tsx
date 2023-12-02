import styled from 'styled-components';
import { Router } from './Router';
import { QueryClient } from './api/queryClient';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <QueryClient>
      <StyledApp>
        <Router />
      </StyledApp>
    </QueryClient>
  );
}

export default App;
