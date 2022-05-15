import React from 'react';
import { Navigation, Footer, Landing } from '../components';

function Home() {

  const homepage = {
    /* Extra small devices (phones, 600px and down) */
    '@media screen and (maxWidth: 600px)': {
      marginLeft: '0rem',
      marginRight: '0rem',
    },
    /* Small devices (portrait tablets and large phones, 600px and up) */
    '@media screen and (minWidth: 600px)': {
      marginLeft: '0rem',
      marginRight: '0rem',

    },
    /* Medium devices (landscape tablets, 768px and up) */
    '@media screen and (minWidth: 768px)': {
      marginLeft: '10rem',
      marginRight: '10rem',
    },
    /* Large devices (laptops/desktops, 992px and up) */
    '@media screen and (minWidth: 992px)': {
      marginLeft: '12rem',
      marginRight: '12rem',
    },
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    '@media screen and (minWidth: 1200px)': {
        marginLeft: '13rem',
        marginRight: '13rem',
    }, 
};

  return (
      <div style={homepage}>
      <Navigation />
      <Landing />
      <Footer />
      </div>
  

  )
}
export default Home;