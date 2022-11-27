/**
 * @jest-environment jsdom
 */

import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";

describe("handleAddToDoFunction", () => {
  test("Should add todo", () => {
    // Arrange

    let todos: Todo[] = [];

    let length = todos.length;

    let text = "Clean";

    // Act
    addTodo(text, todos);

    // Assert

    expect(todos.length).toBe(length + 1);
    expect(todos[0].text).toBe(text);
    expect(todos[0].done).toBeFalsy();
  });

  test("should not add empty input value for todo to array", () => {
    // Arrange

    let todos: Todo[] = [];

    let text = "";

    // Act

    addTodo(text, todos);

    // Assert

    expect(todos.length).toBe(0);
  });
});

test("should change todo", () => {
  // Arrange

  let todo: Todo = new Todo("Train", false);

  expect(todo.done).toBeFalsy();

  // Act
  changeTodo(todo);
  // Assert

  expect(todo.done).toBeTruthy();
});

test("should remove all todos", () => {
  // Arrange

  let todos: Todo[] = [new Todo("Cook", false), new Todo("Bake", false)];

  expect(todos.length).toBe(2);

  //Act

  removeAllTodos(todos);

  //Assert

  expect(todos.length).toBe(0);
});
