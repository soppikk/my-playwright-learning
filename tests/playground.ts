type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

function formatPrice(price: number): string{
return `$${price}`;
}

const product1: Product ={
name:"backpack",
price: 29.99,
inStock: true
}

console.log(product1.name)







// const retries: number = 5;  // What does VS Code show? ---underline red
// const user = { email: "john@test.com" ;
//     password: "paroli12"
// };
// console.log(user.password);      // What does VS Code show?
// //---------
// function getTimeout(seconds: number): string {
//     return seconds * 1000;  // Hint: look at the return type
// }
// function getTimeout(seconds: number): number {
//     return seconds * 1000;  // Hint: look at the return type
// }
// //---------
// const config = { baseURL: "https://staging.example.com" };
// console.log(config.baseUrl);  // Hint: case matters


// const config = { baseURL: "https://staging.example.com" };
// console.log(config.baseURL);  // Hint: case matters
// //---------
// function printName(name: string) {
//   console.log(name);
// }
// const userName: string | undefined = "undefined";
// printName(userName);  // Hint: what if userName is undefined?


// // function printName(name: string) {
// //   console.log(name);
// // }
// // const userName: string | undefined = undefined;
// // printName(userName);  // Hint: what if userName is undefined?

// //---------