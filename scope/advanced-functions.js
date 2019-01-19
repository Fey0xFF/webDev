const first = () => {
	const greet = "Hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures
// child scope has access to parent scope


// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // 


// Compose
const compose = (f, g) => (a) => f(g(a));
// f, g = sum
// a = 5
// step by step = sum(sum(5))

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding Side Effects = Functional Purity = Deterministic/Determinisim
// Always returns the same thing
