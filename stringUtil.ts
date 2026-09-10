export function greet(name: string): string {
    return `Hello, ${name}!`;
}

export function toUpperCase(text: string): string {
    return text.toUpperCase();
}

export function makeGreeting(name: string): string {
    const message = greet(name);
    return toUpperCase(message);
}
