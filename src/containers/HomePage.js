import React from "react";
import { connect } from "react-redux";
import { fetchTodos, createTodos, deleteTodos } from "../actions";
import uuidv4 from "uuid/v4";
import "./homepage.scss";

class Home extends React.Component {
  state = {
    newTodo: ""
  };
  componentDidMount() {
    this.props.fetchTodos();
  }
  handleSubmit = () => {
    this.props.createTodos({ task: this.state.newTodo, id: uuidv4() });
  };
  handleChange = e => {
    this.setState({ newTodo: e.target.value });
  };
  handleDelete(id) {
    // console.log("aver =>", id);

    this.props.deleteTodos(id);
  }
  render() {
    const items = this.props.todos.map(todo => (
      <li className="la-lista" key={todo.id}>
        {todo.task}
        <button
          onClick={() => {
            this.handleDelete(todo.id);
          }}
        >
          delete
        </button>
      </li>
    ));

    return (
      <main>
        <div>
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>search</button>
        </div>
        {this.props.todos.length ? (
          <ul>{items}</ul>
        ) : (
          <p>no todo , please add</p>
        )}
      </main>
    );
  }
}

function mapStateToProps({ todos }) {
  console.log("los todos=>", todos);
  return {
    todos
  };
}
export default connect(
  mapStateToProps,
  { fetchTodos, createTodos, deleteTodos }
)(Home);
