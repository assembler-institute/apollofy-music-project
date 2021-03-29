import React from "react";
import { string, any } from "prop-types";

import "./CardPanel.scss";

function CardPanel({ title, subtitle, endpoint, children, ...props }) {
  return (
    <div className="CardPanel">
      <div className="CardPanel__wrapper">
        <div className="CardPanel__header">
          <div className="inline-block flex-grow overflow-hidden">
            <div className="CardPanel__title">
              <a href={`/${endpoint}`}>{title}</a>
            </div>
          </div>
          <div className="w-full flex flex-row mt-2">
            <div className="flex-1">{subtitle}</div>
            <a className="CardPanel__btn" href={`/${endpoint}`}>
              See more
            </a>
          </div>
        </div>
        <div className="CardPanel__content">{children}</div>
      </div>
    </div>
  );
}

CardPanel.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
  endpoint: string.isRequired,
  children: any,
};

CardPanel.defaultProps = {
  children: [],
};

export default CardPanel;
