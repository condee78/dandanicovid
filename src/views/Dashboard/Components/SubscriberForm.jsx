import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "//condee78.us17.list-manage.com/subscribe/post?u=8d541edc99a1245d8cbc428c1&id=8d2c221d8e";

class SubscriberForm extends Component {
  state = {};
  render() {
    return <MailchimpSubscribe url={url} />;
  }
}

export default SubscriberForm;
