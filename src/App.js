import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Container from './graphcis/Container';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background-color:blue;
  }
`;

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Container />
    </div>
  );
}

export default App;
