# Week 4 — Functions & Git 🧩

You'll write four short JavaScript functions and push your work to GitHub. The functions are tiny on purpose — the real win this week is getting comfortable with **defining functions**, **returning values**, and the **Git workflow**.

## Setup

1. **Fork** this repo to your own GitHub account (button top-right).
2. **Clone** your fork to your computer:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Week4_Functions.git
   cd Week4_Functions
   ```
3. Open the folder in your code editor.
4. Open `index.html` in your browser. Open the browser console (F12 → Console).
5. Edit `challenges.js`. Refresh the page to see new output.

## Tasks

### Task 1 — Greet User 👋

Write a function `greetUser(name)` that **returns** a greeting string.

```js
greetUser("Fatuma");  // → "Hello, Fatuma!"
greetUser("Asha");    // → "Hello, Asha!"
```

> 📝 The function should **return** the string, not log it. The test code at the bottom of the file will log the result.

---

### Task 2 — Tip Calculator 💵

Write a function `calculateTip(bill, tipPercent)` that returns the tip amount.

```js
calculateTip(50, 20);   // → 10
calculateTip(80, 15);   // → 12
```

Formula: `bill * (tipPercent / 100)`

---

### Task 3 — Celsius to Fahrenheit 🌡️

Write a function `celsiusToFahrenheit(c)` that returns the temperature in °F.

```js
celsiusToFahrenheit(0);    // → 32
celsiusToFahrenheit(100);  // → 212
celsiusToFahrenheit(25);   // → 77
```

Formula: `(c * 9) / 5 + 32`

---

### Task 4 — Is Adult? 🎂

Write a function `isAdult(age)` that returns `true` if the age is 18 or older, otherwise `false`.

```js
isAdult(20);  // → true
isAdult(15);  // → false
isAdult(18);  // → true
```

> 💡 Try writing this one as an **arrow function**: `const isAdult = (age) => ...`

---

## ✅ When you're done

- All 4 functions exist with the exact names listed above
- Each function uses `return` (not just `console.log`)
- Running `index.html` in the browser shows the right values in the console

## Submitting (Git workflow)

```bash
git add .
git commit -m "Complete Week 4 functions assignment"
git push
```

Then submit the link to your repo (something like `https://github.com/your-name/Week4_Functions`).

## 🚀 Stretch (optional)

Add one more function: `getInitials(firstName, lastName)` → returns the initials, like `"Fatuma", "Ali"` → `"F.A."`
