import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/Header';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Global } from '../styles/Global.styled';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>To-Do</title>
      </Head>

      <Provider store={store}>
        <Global />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
