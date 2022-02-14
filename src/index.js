import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import Dummy from './components/Elements/Dummy/Dummy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonSwitcher from './components/Elements/PersonSwitcher/PersonSwitcher';
import Dummy2 from './components/Elements/Dummy2/Dummy2';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const shipitClient = new ApolloClient({
  uri: 'http://13.234.187.25:5000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      {/* <ApolloProvider client={shipitClient}>
          <App />
      </ApolloProvider> */}
      <BrowserRouter>
        <>
          <PersonSwitcher />
            <Routes>
                <Route path="/" element={<Dummy />} exact/>
                <Route path="/first-person" element={<Dummy />} exact/>
                <Route path="/second-person" element={<Dummy2 />} exact/>
            </Routes>
        </>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
