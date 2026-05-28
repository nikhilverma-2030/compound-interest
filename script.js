// predefined variables
import { compound_interest } from "./utility.js";

let p = 50000; // Principal amount
let r = 5; // Rate of interest
let n = 2; // Number of times compounded per year
let t = 3; // Time in years

// Function call
let total_amount = compound_interest(p, r, n, t);

// Display Output
console.log("The compound interest after ", t, "year is: ", total_amount.toFixed(0));
