/**
 * @jest-environment jsdom
 */
import * as mainFunctions from "../ts/main";
import * as functions from "../ts/functions";
import { Todo } from "../ts/models/Todo";

/* import {
  createNewTodo,
  createHtml,
  toggleTodo,
  displayError,
  clearTodos,
} from "./../ts/main";
 */

//function displayError
describe("displayError", () => {
  //arrange
  test("should display error", () => {
    document.body.innerHTML = `
<div id="error"></div>
`;

    let errorMessage: string = "Error";
    let show: boolean = true;

    //act
    mainFunctions.displayError(errorMessage, show);

    //assert

    expect(document.getElementById("error")?.innerHTML).toBe("Error");
  });

  test("should display error without class", () => {
    document.body.innerHTML = `
        <div id="error"></div>
        `;

    let errorMessage: string = "Error";
    let show: boolean = false;

    //act
    mainFunctions.displayError(errorMessage, show);
    //assert

    expect(document.getElementById("error")?.innerHTML).toBe("Error");
  });
});
//init

//function createNewTodo
describe("Should create a new Todo", () => {
  test("Create new todo", () => {
    //Arrange
    let spy = jest.spyOn(mainFunctions, "createHtml").mockReturnValue();
    let toDoText: string = "Listen to music";
    let todos: Todo[] = [new Todo("Read", false)];

    //Act
    mainFunctions.createNewTodo(toDoText, todos);

    //Assert
    expect(spy).toBeCalled();
    expect(todos.length).toBe(2);
  });
});

test("Should not create new todo", () => {
  //Arrange
  let spy = jest.spyOn(mainFunctions, "displayError").mockReturnValue();
  let toDoText: string = "";
  let todos: Todo[] = [new Todo("Go to gym", false)];

  //Act
  mainFunctions.createNewTodo(toDoText, todos);

  //Assert
  expect(spy).toBeCalled();
  expect(todos.length).toBe(1);
});

//function createHtml
///

//function toggleTodo
test("should call change todos", () => {
  //arrange
  let spy = jest.spyOn(functions, "changeTodo").mockReturnValue();
  let todo = new Todo("Send an email", false);
  //act
  mainFunctions.toggleTodo(todo);
  //assert
  expect(spy).toHaveBeenCalled();
});

//function clearTodos
describe("clearTodos", () => {
  test("should call removeAllTodo", () => {
    //arrange

    let spy = jest
      .spyOn(functions, "removeAllTodos")

      .mockReturnValue();

    let todos: Todo[] = [new Todo("remove all todos", false)];

    //act

    mainFunctions.clearTodos(todos);

    //assert

    expect(spy).toHaveBeenCalled();
  });
});
