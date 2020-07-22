import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Wrapper/Wrapper";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import axios from "../../axios-orders.js";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    purchasing: false,
  };

  render() {
    return (
      <Aux>
        <main>
          <article>
            <h2>VESTI</h2>
            <p>Datum: 17-03-2019</p>
            <p>
              Cilj ovog sajta je da obavestimo komšije o njihovim pravima i
              obavezama, kao i da omogućimo lakšu komunikaciju. Objavljivaćemo
              planove narednih investicija i uvid u zajednički račun.
            </p>
            <p>
              Nadamo se da ćete učestvovati u radu, sugestije možete dostaviti
              emailom:
              <a
                href="mailto:durmitorska5@gmail.com"
                className="Button Success"
                target="_blank"
                rel="noopener noreferrer"
              >
                durmitorska5@gmail.com
              </a>
            </p>
          </article>
          <article>
            <h2>ZAKON</h2>
            <a
              href="http://stanovanje.gov.rs/latinica/pitanja-i-odgovori.php"
              target="_blank"
              rel="noopener noreferrer"
              className="Button Success"
            >
              STANOVANJE, PITANJA I ODGOVORI
            </a>
            <a
              href="https://www.paragraf.rs/propisi/zakon_o_stanovanju_i_odrzavanju_zgrada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="Button Success"
            >
              ZAKON O STANOVANJU I ODRŽAVANJU ZGRADA
            </a>
            <a
              href="https://www.paragraf.rs/propisi/odluka-o-minimalnoj-visini-iznosa-tekuceg-odrzavanja-zajednickih-delova-zgrada-visini-iznosa-naknade-u-slucaju-prinudno-postavljenog-profesionalnog-upravnika-i-minimalnoj-visini-iznosa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="Button Success"
            >
              ODLUKA O MINIMALNOM IZNOSU TROŠKOVA ODRŽAVANJA ZGRADA
            </a>
          </article>

          <article>
            <h2 id="nabavke">NABAVKE</h2>
            <p>U planu je nabavka sistema za nadzor sa kamerama</p>
            <a
              href="docs/Starlight.pdf"
              target="_blank"
              className="Button Success"
            >
              Ponuda Elzing - serija Starlight
            </a>
            <a
              href="docs/StarlightPlus.pdf"
              target="_blank"
              className="Button Success"
            >
              Ponuda Elzing - serija Starlight +
            </a>
          </article>

          <article>
            <h2>EVIDENCIJA PLAĆANJA</h2>
          </article>
        </main>
        <NavLink to="/logout" className="Button Danger fix">
          Izloguj se
        </NavLink>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAuthRedirectPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Dashboard, axios));
