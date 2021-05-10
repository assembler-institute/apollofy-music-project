/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable operator-assignment */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from "react";
import { string, array, bool, arrayOf, oneOf } from "prop-types";

import { Pie } from "react-chartjs-2";

import "./PieChart.scss";
import { randomRGBColor } from "../../../utils/utils";

function PieChart({ title, axis, labels, showLabels, values, classes }) {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: axis,
    layout: {
      padding: 0,
    },
    plugins: {
      datalabels: {
        font: {
          weight: "bold",
          size: 16,
        },
        color: "rgba(255,255,255,1)",
      },
      title: {
        display: false,
        text: "",
      },
      legend: {
        display: showLabels,
        labels: {
          color: "rgba(255,255,255,1)",
        },
      },
    },
    scales: {},
  };

  const [backgroundColors, setBackgroundColors] = useState([]);
  const [borderColors, setBorderColors] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      const rgbColors = labels.map((_) => {
        return randomRGBColor();
      });

      const bgColors = rgbColors.map((c) => {
        return `rgba(${c.join(", ")}, 0.5)`;
      });

      const bdColors = rgbColors.map((c) => {
        return `rgba(${c.join(", ")}, 1)`;
      });
      resolve([bgColors, bdColors]);
    }).then((colors) => {
      setBackgroundColors(colors[0]);
      setBorderColors(colors[1]);
    });
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        fontColor: "#000",
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        hoverOffset: 2,
        datalabels: {
          color: "#FFF",
        },
      },
    ],
  };

  const chartRef = useRef();

  return (
    <div className="PieChart">
      <div className="PieChart__wrapper">
        <h2 className="PieChart__title">{title}</h2>
        <div className="PieChart__canvas">
          <Pie ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

PieChart.propTypes = {
  title: string,
  axis: oneOf(["y", "x"]),
  labels: arrayOf(string),
  showLabels: bool,
  values: array,
  classes: arrayOf(string),
};

PieChart.defaultProps = {
  title: "",
  axis: "y",
  labels: [],
  showLabels: true,
  values: [],
  classes: [],
};

export default PieChart;
