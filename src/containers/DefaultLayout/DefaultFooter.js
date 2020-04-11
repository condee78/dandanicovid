import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row } from "reactstrap";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Row>
          <span>
            <p className="text-center mb-0">
              <a href="#">DandaniCovid19</a> &copy; 2020 Made with ❤ by
              Fazriaziz. Powered by{" "}
              <a href="https://coreui.io/react" target="_blank">
                CoreUI for React
              </a>
            </p>
          </span>
        </Row>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
