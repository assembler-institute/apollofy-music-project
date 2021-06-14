import React from "react";

import "./WebPlayerStats.scss";

import { Container, Column, Row } from "../../components/Layout";

import WebPlayer from "../WebPlayer";

import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

function WebPlayerStats() {
  return (
    <WebPlayer>
      <h1>Stats</h1>
      <div className="WebPlayerStats">
        <div className="WebPlayerStats__wrapper">
          <div className="WebPlayerStats__chart bar">
            <BarChart
              title="BarChart test"
              labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
              values={[12, 19, 3, 5, 2, 3]}
              valuesMeaning="Usage"
            />
          </div>
          <div className="WebPlayerStats__chart donut">
            <PieChart
              title="PieChart test"
              labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}
              values={[12, 19, 3, 5, 2, 3]}
              valuesMeaning="Usage"
            />
          </div>
        </div>
      </div>
    </WebPlayer>
  );
}

export default WebPlayerStats;
