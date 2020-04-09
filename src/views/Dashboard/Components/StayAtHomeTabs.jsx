import React, { Component } from "react";
import {
  Badge,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import TableChallenge from "./TableChallenge";
import TableELearning from "./TableELearning";
import TableIslam from "./TableIslam";
import TableWebinar from "./TableWebinar";
import TableOther from "./TableOther";

class StayAtHomeTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill("1"),
    };
  }

  lorem() {
    return "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.";
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <TableChallenge />
        </TabPane>
        <TabPane tabId="2">
          <TableELearning />
        </TabPane>
        <TabPane tabId="3">
          <TableWebinar />
        </TabPane>
        <TabPane tabId="4">
          <TableIslam />
        </TabPane>
        <TabPane tabId="5">
          <TableOther />
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Nav tabs>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "1"}
              onClick={() => {
                this.toggle(0, "1");
              }}
            >
              Challenges
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "2"}
              onClick={() => {
                this.toggle(0, "2");
              }}
            >
              E-Learning
            </NavLink>
          </NavItem>
          {/*<NavItem>
            <NavLink
              active={this.state.activeTab[0] === "3"}
              onClick={() => {
                this.toggle(0, "3");
              }}
            >
              Webinar
            </NavLink>
            </NavItem>*/}
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "4"}
              onClick={() => {
                this.toggle(0, "4");
              }}
            >
              Islam
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={this.state.activeTab[0] === "5"}
              onClick={() => {
                this.toggle(0, "5");
              }}
            >
              Musik, Pilm, {" & "} lainnya
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab[0]}>
          {this.tabPane()}
        </TabContent>
      </div>
    );
  }
}

export default StayAtHomeTabs;
