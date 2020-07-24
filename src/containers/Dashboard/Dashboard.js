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
            <p>Datum: 24-07-2020</p>
            <p>
              Sajt je ažuriran novim podacima u vezi sa dosadašnjim uplatama na račun SZ i nabavkama koje su sprovedene. Nedostaju pojedine fakture i dokumentacija zbog situacije sa pandemijom. Zaposleni u firmi Kosmaj rade od kuće pa nemaju pristup celoj arhivi, ali u planu je da svu dokumenataciju postavimo na sajt.
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
            <h2>OPŠTE</h2>
            <a href="/docs/Isplate.pdf" target="_blank" className="Button Success">Isplate.pdf</a>
            <a href="/docs/Obavestenje.pdf" target="_blank" className="Button Success">Obavestenje.pdf</a>
            <a href="/docs/Uplate i dugovanja.pdf" target="_blank" className="Button Success">Uplate i dugovanja.pdf</a>
          </article>
          <article>
            <h2>RAČUNI ZA KATANCE</h2>
            <a href="/docs/Ostalo/Racuni - katanci.pdf" target="_blank" className="Button Success">Racuni - katanci.pdf</a>
          </article>
          <article>
            <h2>PRAVILNIK</h2>
            <a href="/docs/Pravilnik/Kucni red.pdf" target="_blank" className="Button Success">Kucni red.pdf</a>
          </article>
          <article>
            <h2>RAČUN SZ</h2>
            <a href="/docs/Racun SZ/09_04_2019_Uplate i dugovanja.pdf" target="_blank" className="Button Success">09_04_2019_Uplate i dugovanja.pdf</a>
            <a href="/docs/Racun SZ/09_05_2019_Uplate i dugovanja.pdf" target="_blank" className="Button Success">09_05_2019_Uplate i dugovanja.pdf</a>
            <a href="/docs/Racun SZ/23_07_2020_Isplate.pdf" target="_blank" className="Button Success">23_07_2020_Isplate.pdf</a>
            <a href="/docs/Racun SZ/23_07_2020_Uplate i dugovanja.pdf" target="_blank" className="Button Success">23_07_2020_Uplate i dugovanja.pdf</a>
            <a href="/docs/Racun SZ/Izvodi/izvodi.zip" target="_blank" className="Button Success"> izvodi.zip</a>
          </article>
          <article>
          <h2>REMONT LIFTA</h2>
            <a href="/docs/Remont lifta/Naplata - Remont lifta - 04-06-2020.pdf" target="_blank" className="Button Success">Naplata - Remont lifta - 04-06-2020.pdf</a>
            <a href="/docs/Remont lifta/Ponuda - Remont lifta.pdf" target="_blank" className="Button Success"> Ponuda - Remont lifta.pdf</a>
            <a href="/docs/Remont lifta/Potpisi - Remont lifta.pdf" target="_blank" className="Button Success"> Potpisi - Remont lifta.pdf</a>
            <a href="/docs/Remont lifta/Ugovor - Remont lifta.pdf" target="_blank" className="Button Success"> Ugovor - Remont lifta.pdf</a>
          </article>
          <article>
            <h2>UPRAVLJANJE ZGRADOM</h2>
            <a href="/docs/Upravljanje zgradom/Odluka - Tekuce i investiciono odrzavanje.pdf" target="_blank" className="Button Success">Odluka - Tekuce i investiciono odrzavanje.pdf</a>
            <a href="/docs/Upravljanje zgradom/Ponuda - Upravljanje.pdf" target="_blank" className="Button Success"> Ponuda - Upravljanje.pdf</a>
            <a href="/docs/Upravljanje zgradom/Ugovor - Infostan.pdf" target="_blank" className="Button Success"> Ugovor - Infostan.pdf</a>
            <a href="/docs/Upravljanje zgradom/Ugovor - Upravljanje SZ.pdf" target="_blank" className="Button Success"> Ugovor - Upravljanje SZ.pdf</a>
          </article>
          <article>
            <h2>VEŠERNICA</h2>
            <a href="/docs/Vesernica/Ugovor - Vesernica.pdf" target="_blank" className="Button Success">Ugovor - Vesernica.pdf</a>
          </article>
          <article>
            <h2>VIDEO NADZOR</h2>
            <a href="/docs/Video nadzor/1-Zakon o privatnom obezbedjenju.pdf" target="_blank" className="Button Success">1-Zakon o privatnom obezbedjenju.pdf</a>
            <a href="/docs/Video nadzor/2 - Zakon o izmenama i dopunama  zakona o privatnom obezbedjenju 87_2018.pdf" target="_blank" className="Button Success"> 2 - Zakon o izmenama i dopunama  zakona o privatnom obezbedjenju 87_2018.pdf</a>
            <a href="/docs/Video nadzor/Izvod_video_nadzor.pdf" target="_blank" className="Button Success"> Izvod_video_nadzor.pdf</a>
            <a href="/docs/Video nadzor/Ponuda video nadzor.pdf" target="_blank" className="Button Success"> Ponuda video nadzor.pdf</a>
            <a href="/docs/Video nadzor/Zapisnici i potvrde_video nadzor.pdf" target="_blank" className="Button Success"> Zapisnici i potvrde_video nadzor.pdf</a>
          </article>
          <article>
            <h2>VRATA I PRISTUP</h2>
            <a href="/docs/Vrata i pristup/Citac_kartica_izvod.pdf" target="_blank" className="Button Success">Citac_kartica_izvod.pdf</a>
            <a href="/docs/Vrata i pristup/Popravka_vrata_oprema_izvod.pdf" target="_blank" className="Button Success"> Popravka_vrata_oprema_izvod.pdf</a>
            <a href="/docs/Vrata i pristup/Popravka_vrata_racun.pdf" target="_blank" className="Button Success"> Popravka_vrata_racun.pdf</a>
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
