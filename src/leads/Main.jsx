import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import { ConfigContext } from "../AppContext";
import Spacer from "../components/Spacer.jsx";
import { customersService } from "../services";
import "./main.css";

const Main = () => {
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
      await customersService.add(body);
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
        <p>Excelente! A partir de agora você faz parte da Nord.</p>
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
            placeholder="Celular:"
            type="phone"
            value={phone}
            onChange={handleChange}
          />
        )}
        {config.birthdate && (
          <input
            id="birthdate"
            placeholder="Nascimento em:"
            type="birthdate"
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
