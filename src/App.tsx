import { HashRouter, Route, Routes } from 'react-router-dom';
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
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path='/' element={<Continents />} />
              <Route path='/continent/' element={<DisplayContinents />} />
            </Routes>
          </HashRouter>
        </ContinentContextProvider>
      </ApolloProvider>
    </div>
  );
};

export default App;
