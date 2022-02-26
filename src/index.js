import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://13.234.187.25:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "Authorization": token ? `Bearer ${token}` : "",
    }
  }
});

const shipitClient = new ApolloClient({
    uri: 'http://13.234.187.25:3000/graphql',
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={shipitClient}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
