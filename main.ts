import { add, multiply, square } from "./mathUtils";
import { greet, makeGreeting } from "./stringUtils";

function calculateTotal(price: number, quantity: number): number {
    const subtotal = multiply(price, quantity);
    const tax = square(2);

    return add(subtotal, tax);
}

function printResult(name: string, price: number, quantity: number): void {
    console.log(greet(name));

    const total = calculateTotal(price, quantity);

    console.log(`Total: $${total}`);
}

function main(): void {
    printResult("Alice", 10, 3);

    const customGreeting = makeGreeting("Bob");
    console.log(customGreeting);
}

main();
