import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import '../lib/i18n';
import { useApollo } from '../lib/apollo';

import 'normalize.css/normalize.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-perfect-scrollbar-z/build/styles.css';
import '../styles/launch-spaces.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
