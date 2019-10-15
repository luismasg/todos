import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./HomePage";
import Header from "../components/header";
import "./App.scss";

const About = () => <p>thias isan about page</p>;
const Search = () => <p> pagina cool de search </p>;
function App(props) {
  console.log(props);
  return (
    <>
      <Header location={props.location}></Header>
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/search" component={Search} />
    </>
  );
}
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}
export default connect(
  mapStateToProps,
  null
)(App);
