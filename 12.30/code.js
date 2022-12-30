// my solution
function validatePIN(pin) {
  return [4, 6].includes(pin.length) && !/\D/.test(pin)
}

console.log(
  validatePIN("1234"),
  validatePIN("12345"),
  validatePIN("a123"),
  validatePIN("698092")
) // expecting true, false, false, true

// someone else's solution
const validatePIN2 = pin => /^\d{4}$|^\d{6}$/.test(pin)
// absolutely unreadable, but a cool regex flex at least