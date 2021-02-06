// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import App from "next/app";
import Head from "next/head";
import React from "react";
import firebase from "firebase/app";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

// import { Provider } from "mobx-react";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #edf2f7;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default class MyApp extends App {
  state = {
    firebaseInitialized: false,
  };

  componentDidMount() {
    fetch("/__/firebase/init.json").then(async (response) => {
      try {
        const config = await response.json();
        firebase.initializeApp(config);
      } catch (err) {
        console.log(err);
      }
      this.setState({
        firebaseInitialized: true,
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const theme = {
      colors: {
        primary: "#0070f3",
      },
    };
    if (!this.state.firebaseInitialized) {
      return <></>;
    }
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>RE-yura Page</title>
          <link rel="icon" href={"/favicon.jpg"} />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
