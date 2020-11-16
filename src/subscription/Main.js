import { h } from "preact";
import axios from "axios";
import qs from "query-string";
import { useContext, useState } from "preact/hooks";
import { ConfigContext } from "../AppContext";
import Spacer from "../components/Spacer.jsx";
import "./main.css";

const Main = () => {
  const config = useContext(ConfigContext);
  const params = new URLSearchParams(window.location.search);

  const [alert, setAlert] = useState(undefined);
  const [fields, setFields] = useState({});
  const [loading, setLoading] = useState(false);
  const { Email, Senha, SenhaConferencia } = fields;

  const handleChange = evt => {
    const { target } = evt;
    const { id, value } = target;

    setFields({ ...fields, [id]: value });
  };

  const submit = async () => {
    setLoading(true);
    let additionalItems = [{ Chave: "URL", Valor: window.location.href }];

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].map(
      item => {
        if (!params.get(item)) return;

        additionalItems.push({
          Chave: item.substr(0, 10).toUpperCase(),
          Valor: params.get(item)
        });
      }
    );

    console.log(additionalItems);

    try {
      var BODY = qs.stringify(
        {
          ...fields,
          Nome: fields.Email,
          BoasVindasIdentificador: config.welcomeIdentifier
        },
        { arrayFormat: "index" }
      );

      additionalItems.forEach((item, i) => {
        BODY += `&Fields[${i}][Chave]=${item.Chave}&Fields[${i}][Valor]=${item.Valor}`;
      });

      let { data } = await axios({
        method: "post",
        url: "https://members.nordresearch.com.br/Login/CriarContaJson",
        crossDomain: true,
        withCredentials: true,
        data: BODY,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      if (data.sucesso === false) {
        setAlert(data.mensagem);
        return;
      }

      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form" style={{ flexDirection: "column" }}>
      <Spacer direction="column" horizontal="stretch">
        <input
          id="Email"
          placeholder="Email:"
          type="email"
          value={Email}
          onChange={handleChange}
        />
        <input
          id="Senha"
          placeholder="Senha:"
          type="password"
          value={Senha}
          onChange={handleChange}
        />
        <input
          id="SenhaConferencia"
          disabled={loading}
          placeholder="Confirmar Senha:"
          type="password"
          value={SenhaConferencia}
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
