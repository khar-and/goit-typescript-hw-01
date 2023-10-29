import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

// let total: number = 100;
// let name: string = "alex";
// let name = 200;

// const numbers: number[] = [1, 2, 3, 4, 5, 55, 0];
// numbers.push("11");
// ======================================================================================

// const user: { name: string; age: number } = {
//   name: "alex",
//   age: 18,
// };
// user.age = "sjadfjkv";

type User = {
  name: string;
  age: number | string;
};

const user: User = {
  name: "alex",
  age: 18,
};

user.age = "sjadfjkv";
// ==========================================================================================

enum Sizes {
  small = "small",
  medium = "medium",
  large = "large",
}

const button1: Sizes = Sizes.small;
// ============================================================================================

// function add(num1: number, num2: number): string{
//   return `${num1} + ${num2}`
// }

function add(num1: number, num2: number): void {
  console.log(num1 + num2);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
