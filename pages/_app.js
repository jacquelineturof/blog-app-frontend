import React from 'react'
import App from "next/app"

import { wrapper } from '../store/store'

import '../App.css'
import '../icon.config'

import Layout from '../components/Layout'

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
// const makeStore = (initialState, options) => {
//     return createStore(reducer, initialState, composeWithDevTools(
//         applyMiddleware(thunkMiddleware)
//     ));
//   };

  
  class MyApp extends App {
  
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        console.log('pageProps: ', pageProps)
        return {pageProps};
  
    }
  
    render() {
        const {Component, pageProps} = this.props;

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
  }
  
  export default wrapper.withRedux(MyApp)