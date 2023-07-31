const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola mundo - curso MIt Cap 4 - Miguel Pineda");
  });
});
