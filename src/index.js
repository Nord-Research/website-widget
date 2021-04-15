import { h, render } from "preact";
import loader from "./loader";
import { Subscription } from "./Subscription";
import { Ads } from "./Ads";
import { Leads } from "./Leads";
import Indicators from './indicators/Main'
import Equities from './equities/Main'

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

    default:
      break;
  }
});
