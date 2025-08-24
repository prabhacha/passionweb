// analytics.js
import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-01V99JGK9S');
  console.log("GA initialized and pageview sent");
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
