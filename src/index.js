import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const scheme = (proto) => {
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
}
export const GRAPHQL_ENDPOINT = `${scheme('http')}://hasura-db-1.herokuapp.com/v1/graphql`;
export const WEBSOCKET_ENDPOINT = `${scheme('ws')}://hasura-db-1.herokuapp.com/v1/graphql`;

// Make WebSocketLink with appropriate url
const mkWsLink = (uri) => {
  const subClient = new SubscriptionClient(
    WEBSOCKET_ENDPOINT,
    { reconnect: true }
  );
  return new WebSocketLink(subClient);
}

// Make HttpLink
const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });
const wsLink = mkWsLink(GRAPHQL_ENDPOINT);
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

// Instantiate client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false
  })
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
