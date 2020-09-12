import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          alt=""
          src="https://images-eu.ssl-images-amazon.com/images/G/30/books/2019/ITES_BTS_2020/ES_BTS20/Traffic_driver/peak_2/XCM_Manual_ORIGIN_1263487_1343214_ES_es_es_hero_changes_peak2_es_es_3334985_3000x1200_es_ES._CB404778822_.jpg"
        />

        <div className="home_row">
          <Product
            id="31"
            title="
WOLTU 2X Taburetes de Bar con Respaldo Cuero "
            image="https://images-na.ssl-images-amazon.com/images/I/61Ct%2Bdu9ViL._AC_UL270_SR270,270_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="32"
            title="
Despiértame cuando acabe septiembre"
            image="https://images-na.ssl-images-amazon.com/images/I/91rGALXCivL._UX300__PJprime-reading,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL405_SR258,405_.jpg"
            price={7.59}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="
ANSIO Deshumidificador para interiores"
            image="https://images-na.ssl-images-amazon.com/images/I/615BNB1kCTL._AC_UL270_SR270,270_.jpg"
            price={19.97}
            rating={3}
          />
          <Product
            id="35"
            title="Oxford 100430197"
            image="https://images-eu.ssl-images-amazon.com/images/I/41YnGqDQaCL._AC_US327_QL65_.jpg"
            price={5.4}
            rating={3}
          />
          <Product
            id="36"
            title="Maglev Essentials"
            image="https://images-eu.ssl-images-amazon.com/images/I/317yTpPaSeL._AC_US327_QL65_.jpg"
            price={11.14}
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="37"
            title="Kipling - Creativity L"
            image="https://images-eu.ssl-images-amazon.com/images/I/41S7tc18S6L._AC_US327_QL65_.jpg"
            price={9.09}
            rating={0}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
