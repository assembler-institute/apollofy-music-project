/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { string, array, arrayOf, oneOf } from "prop-types";
import cn from "clsx";

import { Bar } from "react-chartjs-2";

import "./BarChart.scss";
import { randomRGBColor } from "../../../utils/utils";

function BarChart({ title, axis, labels, values, classes }) {
  const options = {
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
        display: false,
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
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
  }, []);

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

  return (
    <div className="BarChart">
      <div className="BarChart__wrapper">
        <h2 className="BarChart__title">{title}</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

BarChart.propTypes = {
  title: string,
  axis: oneOf(["y", "x"]),
  labels: arrayOf(string),
  values: array,
  classes: arrayOf(string),
};

BarChart.defaultProps = {
  title: "",
  axis: "y",
  labels: [],
  values: [],
  classes: [],
};

export default BarChart;
