// Logical AND (&&)
// Returns TRUE if both operands are true

let highIncome = false;
let goodCreditScore = false;
/// let eligibleForLoan = highIncome && goodCreditScore;

/// console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
/// let highIncome = false;
/// let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

/// console.log(eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;

console.log(eligibleForLoan);
