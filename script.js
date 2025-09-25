const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  let change = {};

  // number of quarters (25¢)
  change.q = Math.floor(amount / 25);
  amount = amount % 25;

  // number of dimes (10¢)
  change.d = Math.floor(amount / 10);
  amount = amount % 10;

  // number of nickels (5¢)
  change.n = Math.floor(amount / 5);
  amount = amount % 5;

  // remaining pennies (1¢)
  change.p = amount;

  return change;
}

// ✅ Example runs
console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }
console.log(makeChange(99)); // { q: 3, d: 2, n: 0, p: 4 }

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
