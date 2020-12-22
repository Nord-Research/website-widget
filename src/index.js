import { h, render } from "preact";
import loader from "./loader";
import { Subscription } from "./Subscription";
import { Ads } from "./Ads";
import { Leads } from "./Leads";

loader(window, {}, window.document.currentScript, (el, config, component) => {
  switch (component) {
    case "initSubscription":
      render(h(Subscription, { ...config }), el);
      break;

    case "initAds":
      render(h(Ads, { ...config }), el);
      break;

    case "initLeads":
      console.log("leads");
      render(h(Leads, { ...config }), el);
      break;

    default:
      break;
  }
});
