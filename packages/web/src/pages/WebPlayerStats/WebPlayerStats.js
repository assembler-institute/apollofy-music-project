import React from "react";

import "./WebPlayerStats.scss";

import {
  WebPlayerFooter,
  WebPlayerLayout,
  WebPlayerMainContainer,
} from "../../components/WebPlayerLayout";

import WebPlayerSidebar from "../../components/WebPlayerSidebar/WebPlayerSidebar";
import WebPlayerMainView from "../../components/WebPlayerMainView/WebPlayerMainView";

import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

function WebPlayerStats() {
  return (
    <WebPlayerLayout>
      <WebPlayerMainContainer>
        <WebPlayerSidebar />
        <WebPlayerMainView>
          <h1>Stats</h1>
          <div className="WebPlayerStats">
            <div className="WebPlayerStats__wrapper">
              <div className="WebPlayerStats__chart bar">
                <BarChart
                  title="BarChart test"
                  labels={[
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ]}
                  values={[12, 19, 3, 5, 2, 3]}
                  valuesMeaning="Usage"
                />
              </div>
              <div className="WebPlayerStats__chart donut">
                <PieChart
                  title="PieChart test"
                  labels={[
                    "Red",
                    "Blue",
                    "Yellow",
                    "Green",
                    "Purple",
                    "Orange",
                  ]}
                  values={[12, 19, 3, 5, 2, 3]}
                  valuesMeaning="Usage"
                />
              </div>
            </div>
          </div>
        </WebPlayerMainView>
      </WebPlayerMainContainer>
      <WebPlayerFooter />
    </WebPlayerLayout>
  );
}

export default WebPlayerStats;
