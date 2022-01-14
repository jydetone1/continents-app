import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContinentContextProvider from './context/ContinentContext';
import Continents from './components/continent/Continents';
import DisplayContinents from './components/displaycontinent/DisplayContinents';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <ContinentContextProvider>
          <Router>
            <Routes>
              <Route path='/continent-app' element={<Continents />} />
              <Route path='/continent' element={<DisplayContinents />} />
            </Routes>
          </Router>
        </ContinentContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
