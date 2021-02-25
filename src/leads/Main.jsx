import { h } from "preact";
import { useState } from "preact/hooks";
import { useAppContextConsumer } from "../AppContext";

import LeadsContentLayout from "./LeadsContentLayout/index";

import { campaignsService, customersService } from "../services";

import "./main.css";

const getStylesProp = (styles) => (Boolean(styles) ? styles : {});

const useLeadsConfigStyles = ({ container, button, input } = {}) => ({
  containerStyles: getStylesProp(container),
  buttonStyles: getStylesProp(button),
  inputStyles: getStylesProp(input),
});

const Main = () => {
  const params = new URLSearchParams(window.location.search);
  const config = useAppContextConsumer();
  const { containerStyles, buttonStyles, inputStyles } = useLeadsConfigStyles(
    config.styles
  );
  const [alert, setAlert] = useState(undefined);
  const [body, setBody] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  let { email, name, birthdate, phone } = body;

  const handleChange = (evt) => {
    let { target } = evt;
    let { id, value } = target;

    try {
      setBody({ ...body, [id]: value });
    } catch (e) {
      console.log(e);
    }
  };

  const submit = async () => {
    if (!email) {
      setAlert("E-mail obrigatório.");
      return;
    }

    try {
      setLoading(true);

      var additionalItems = {};

      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ].map((item) => {
        if (config[item]) additionalItems[item] = config[item];
        if (params.get(item)) additionalItems[item] = params.get(item);
      });

      if (!additionalItems.utm_source)
        additionalItems.utm_source = window.location.hostname;

      await customersService.add({
        ...body,
        ...additionalItems,
        url: window.location.href,
        plan: config.plan,
      });

      config.onSubscribe(email);

      if (config.waiting_line) {
        await campaignsService.sendWaitingLine({
          email: email,
          plan: config.plan,
        });
      }

      if (config.report_url) {
        await campaignsService.sendReport({
          email,
          sender_name: config.sender_name,
          report_url: config.report_url,
          sender_email: config.sender_email,
        });
      } else {
        await campaignsService.sendWelcome({
          email,
        });
      }

      setSuccess(true);

      if (config.successUrl) window.location.href = config.successUrl;
    } catch (error) {
      console.log(error);

      if (!error.message) {
        setAlert(error.data.message);
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <div class="lead-success">
        <p style={{ margin: 0, padding: "15px 25px" }}>
          Abra seu e-mail e aproveite o relatório!
        </p>
      </div>
    );

  return (
    <LeadsContentLayout containerStyles={containerStyles}>
      {config.name && (
        <input
          id="name"
          placeholder="Nome:"
          type="text"
          value={name}
          onChange={handleChange}
          style={inputStyles}
        />
      )}
      {config.phone && (
        <input
          id="phone"
          placeholder="DDD+Celular"
          type="tel"
          value={phone}
          onChange={handleChange}
          style={inputStyles}
        />
      )}
      {config.birthdate && (
        <input
          id="birthdate"
          placeholder="Nascimento em:"
          type="date"
          value={birthdate}
          onChange={handleChange}
          style={inputStyles}
        />
      )}
      <input
        id="email"
        placeholder="Email:"
        type="email"
        value={email}
        onChange={handleChange}
        style={inputStyles}
      />
      {alert && (
        <div id="alert">
          <button class="close" onClick={() => setAlert(false)}>
            <span aria-hidden="true">×</span>
          </button>
          <span aria-hidden="true">{alert}</span>
        </div>
      )}
      <button id="subscription-button" onClick={submit} style={buttonStyles}>
        {loading ? "SALVANDO..." : "ACESSAR AGORA"}
      </button>
    </LeadsContentLayout>
  );
};

export default Main;
