export const DEFAULT_NAME = "_nord";

export default (win, defaultConfig, scriptElement, render) => {
  const instanceName =
    scriptElement.attributes.getNamedItem("id").value || DEFAULT_NAME;
  const loaderObject = win[instanceName];

  if (!loaderObject || !loaderObject.q) {
    throw new Error(
      `Widget didn't find LoaderObject for instance [${instanceName}].
      The loading script was either modified, no call to 'init' method was done  or there is no conflicting object defined in \`window.${instanceName}\`.`
    );
  }

  if (win[`loaded-${instanceName}`]) {
    throw new Error(
      `Widget with name [${instanceName}] was already loaded.
      This means you have multiple instances with same identifier (e.g. '${DEFAULT_NAME}')`
    );
  }

  for (let i = 0; i < loaderObject.q.length; i++) {
    const item = loaderObject.q[i];
    const methodName = item[0];
    if (i === 0 && methodName !== "init") {
      throw new Error(
        `Failed to start Widget [${instanceName}].
        'Init' must be called before other methods.`
      );
    } else if (i !== 0 && methodName === "init") {
      continue;
    }

    const loadedObject = Object.assign(defaultConfig, item[1]);
    const wrappingElement = win.document.getElementById(loadedObject.container);

    if (loadedObject.container && wrappingElement !== null) {
      switch (methodName) {
        case "initSubscription":
          wrappingElement.setAttribute("id", `${instanceName}-subscription`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        case "initAds":
          wrappingElement.setAttribute("id", `${instanceName}-ads`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        case "initLeads":
          wrappingElement.setAttribute("id", `${instanceName}-leads`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        case "initIndicators":
          wrappingElement.setAttribute("id", `${instanceName}-indicators`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        case "initEquities":
          wrappingElement.setAttribute("id", `${instanceName}-equities`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        case "infiniteSlideshow":
          wrappingElement.setAttribute("id", `${instanceName}-equities`);
          render(wrappingElement, loadedObject, methodName);

          win[`loaded-${instanceName}`] = true;
          break;

        default:
          console.warn(`Unsupported method [${methodName}]`, item[1]);
      }
    }
  }

  win[instanceName] = (method, ...args) => {
    switch (method) {
      default:
        console.warn(`Unsupported method [${method}]`, args);
    }
  };
};
