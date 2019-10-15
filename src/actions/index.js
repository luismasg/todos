const UrlBase = "http://localhost:3001";

export const fetchTodos = () => dispatch => {
  fetch(`${UrlBase}/todos`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "fetch-todos",
        payload: data
      });
    });
};

export const deleteTodos = id => dispatch => {
  fetch(`${UrlBase}/todos/${id}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json"
    }
    // body: JSON.stringify(todo)
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "remove-todo",
        payload: { id }
      });
    });
};

export const createTodos = todo => dispatch => {
  fetch(`${UrlBase}/todos`, {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "add-todo",
        payload: todo
      });
    });
};
