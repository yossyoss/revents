import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decreamentCounter } from "./testActions";
const mapState = state => ({
  data: state.test.data
});
const actions = {
  incrementCounter,
  decreamentCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decreamentCounter, data } = this.props;
    return (
      <div>
        <h1>TestComponent</h1>
        <h3>the answer is {data}</h3>
        <Button onClick={incrementCounter} color="green" content='Increment' />
        <Button onClick={decreamentCounter} color="red" content='Decrement' />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
