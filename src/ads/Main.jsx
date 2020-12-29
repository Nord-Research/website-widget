import { h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { ConfigContext } from "../AppContext";
import { adsService } from "../services";

const Main = () => {
  const config = useContext(ConfigContext);
  const [adsInfo, setAdsInfo] = useState();
  const [utm, setUtm] = useState();
  const { url, image } = adsInfo || {
    url: "",
    image: "",
  };

  useEffect(() => {
    (async () => {
      var result = {};
      if (!config.id) result = await adsService.random();
      else result = await adsService.details(config.id);

      let { data: banner } = result;

      setAdsInfo({
        url: config.url || banner.default_url || "#",
        image: banner.image_path,
      });

      let utmString = "?";
      const CONTENT = config.content || window.location.pathname || undefined;
      const SOURCE = config.source || window.location.hostname || undefined;

      if (SOURCE) utmString += "&utm_source=" + SOURCE;
      if (config.medium) utmString += "&utm_medium=" + config.medium;
      utmString +=
        "&utm_campaign=" + (config.campaign || banner.default_campaign);
      if (CONTENT) utmString += "&utm_content=" + CONTENT;
      setUtm(utmString);
    })();
  }, []);

  if (!image) return <div />;

  return (
    <a href={url.split("?")[0] + utm} target="_blank">
      <img alt={"propaganda"} src={image} width={600} />
    </a>
  );
};

export default Main;
