import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import Head from 'next/head';
import { Header } from '../components/header/Header';
import '../styles/global.css';
import { Provider } from 'react-redux';
import { store } from '../store/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>To-Do</title>
            </Head>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
            </Provider>
        </>
    );
};

export default MyApp;