import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!");
    });
}
const user = {
    name: "alex",
    age: 18,
};
user.age = "sjadfjkv";
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
const button1 = Sizes.small;
// ============================================================================================
// function add(num1: number, num2: number): string{
//   return `${num1} + ${num2}`
// }
function add(num1, num2) {
    console.log(num1 + num2);
}
//# sourceMappingURL=index.js.map