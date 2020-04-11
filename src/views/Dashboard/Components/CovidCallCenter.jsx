import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { mapToCssModules } from "reactstrap/lib/utils";

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func,
};

const defaultProps = {
  variant: "facebook",
  phoneNumber: "-",
  provider: "-",
  description: "-",
};

class CovidCallCenter extends Component {
  render() {
    // eslint-disable-next-line
    const {
      children,
      className,
      cssModule,
      dataBox,
      phoneNumber,
      provider,
      description,
      variant,
      ...attributes
    } = this.props;

    if (
      !variant ||
      ["facebook", "twitter", "linkedin", "google-plus"].indexOf(variant) < 0
    ) {
      return null;
    }

    const back = "bg-" + variant;
    const classCard = "brand-card";
    const classCardHeader = classNames(`${classCard}-header`, back);
    const classCardBody = classNames(`${classCard}-body`);
    const classes = mapToCssModules(
      classNames(classCard, className),
      cssModule
    );

    return (
      <div className={classes}>
        <div className={classCardHeader}>
          <h3 style={{ color: "white" }}>{phoneNumber}</h3>
        </div>
        <div className={classCardBody}>
          <div>
            <div>
              <h6>{provider}</h6>
            </div>
            <div className="text-uppercase text-muted small">{description}</div>
          </div>
        </div>
      </div>
    );
  }
}

CovidCallCenter.propTypes = propTypes;
CovidCallCenter.defaultProps = defaultProps;

export default CovidCallCenter;
