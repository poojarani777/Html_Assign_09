let Salary = parseInt(prompt("enter the salary"));
let DearnessAllowance = 0.4 * Salary;
console.log(DearnessAllowance);
let hra = 0.2 * Salary;
console.log(hra);
let gross = DearnessAllowance + hra + Salary;
console.log(gross);