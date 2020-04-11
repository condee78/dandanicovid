import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo,
            width: 89,
            height: 25,
            alt: "DandaniCovid19 Logo",
          }}
          minimized={{
            src: sygnet,
            width: 30,
            height: 30,
            alt: "DandaniCovid19 Logo",
          }}
        />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/about" className="nav-link">
              Tentang Kami
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar></Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
