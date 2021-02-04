import React from "react";

import Card from "./components/Card";
import Contador from "./components/Contador";
import Footer from "./components/Footer";

import "./Placar.css";

export default function Placar() {
  return (
    <div className="Placar">
      <h1>Placar</h1>
      <div className="Cards">
        <Card title="Jogador 1">
          <Contador />
        </Card>

        <Card title="Jogador 2">
          <Contador />
        </Card>

        <hr />

        <Footer />
      </div>
    </div>
  );
}
