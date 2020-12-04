import { h } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { ConfigContext } from "../AppContext";

const Main = () => {
  const config = useContext(ConfigContext);
  const [adsInfo, setAdsInfo] = useState();
  const [utm, setUtm] = useState();
  const { url, image } = adsInfo || {
    url: "",
    image: ""
  };

  useEffect(() => {
    (async () => {
      setAdsInfo({
        url: "https://www.nordresearch.com.br/",
        image:
          "https://ci3.googleusercontent.com/proxy/OEM61shGQ4mnn9bVDKa4dyWnibkJ5qRnHcyOEtfddF5tHjebH4ZYJGEbwVbID7AA4jJPwu1435wKb_QPSaX3mh9AairpzEMsY9wNixejUS-fcch7TAeHeBr6AawGvOb-Dvhk6zzkBF6wWqpb8sq6GP1fw9qPHw=s0-d-e1-ft#https://mcusercontent.com/7d6851130ee7e886a028957d9/images/b24a6f12-2077-4a04-be30-5a5b7f60fc8d.png"
      });

      let utmString = "?";
      const CONTENT = config.content || window.location.pathname || undefined;

      if (config.medium) utmString += "&utm_medium=" + config.medium;
      if (config.campaign) utmString += "&utm_campaign=" + config.campaign;
      if (config.term) utmString += "&utm_term=" + config.term;
      if (CONTENT) utmString += "&utm_content=" + config.content;
      setUtm(utmString);
    })();
  }, []);

  return (
    <a href={url.split("?")[0] + utm} target="_blank">
      <img alt={"propaganda"} src={image} width={600} />
    </a>
  );
};

export default Main;
