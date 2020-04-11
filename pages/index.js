import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter
} from "../store/actions/counterActions";

const App = props => {
  return (
    <div>
      <button onClick={props.incrementCounter}>Increment</button>
      <button onClick={props.decrementCounter}>Decrement</button>
      <h1>{props.counter}</h1>
    </div>
  );
};
App.getInitialProps = ({ store }) => {};
const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
