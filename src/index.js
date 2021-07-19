import { h, render } from "preact";
import loader from "./loader";
import { Subscription } from "./Subscription";
import { Ads } from "./Ads";
import { Leads } from "./Leads";
import Indicators from './indicators/Main';
import Equities from './equities/Main';
import Slideshow from './slideshow/Main';
import Recommendations from './recommendations';

loader(window, {}, window.document.currentScript, (el, config, component) => {
  switch (component) {
    case "initSubscription":
      render(h(Subscription, { ...config }), el);
      break;

    case "initAds":
      render(h(Ads, { ...config }), el);
      break;

    case "initLeads":
      render(h(Leads, { ...config }), el);
      break;

    case "initIndicators":
      render(h(Indicators, { ...config }), el);
      break;

    case "initEquities":
      render(h(Equities, { ...config }), el);
      break;

    case "infiniteSlideshow":
      render(h(Slideshow, { ...config }), el);
      break;

    case "initRecommendations":
      render(h(Recommendations, { ...config }), el);
      break;

    default:
      break;
  }
});
