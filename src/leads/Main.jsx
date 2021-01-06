import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import { ConfigContext } from "../AppContext";
import Spacer from "../components/Spacer.jsx";
import { customersService } from "../services";
import "./main.css";

const Main = () => {
  const params = new URLSearchParams(window.location.search);
  const config = useContext(ConfigContext);
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
      });
      setSuccess(true);
      if (config.successUrl) window.location.href = config.successUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <div class="lead-success">
        <p style={{ margin: 0, padding: "15px 25px" }}>
          Excelente! A partir de agora você faz parte da Nord.
        </p>
      </div>
    );

  return (
    <div>
      <Spacer direction="column" horizontal="stretch">
        {config.name && (
          <input
            id="name"
            placeholder="Nome:"
            type="text"
            value={name}
            onChange={handleChange}
          />
        )}
        {config.phone && (
          <input
            id="phone"
            placeholder="DDD+Celular"
            type="tel"
            value={phone}
            onChange={handleChange}
          />
        )}
        {config.birthdate && (
          <input
            id="birthdate"
            placeholder="Nascimento em:"
            type="date"
            value={birthdate}
            onChange={handleChange}
          />
        )}
        <input
          id="email"
          placeholder="Email:"
          type="email"
          value={email}
          onChange={handleChange}
        />
        {alert && (
          <div id="alert">
            <button class="close" onClick={() => setAlert(false)}>
              <span aria-hidden="true">×</span>
            </button>
            <span aria-hidden="true">{alert}</span>
          </div>
        )}
        <button onClick={submit}>
          {loading ? "SALVANDO..." : "ACESSAR AGORA"}
        </button>
      </Spacer>
    </div>
  );
};

export default Main;
