// Slightly-modified version of the arithmetic grammar example from the Peggy
// documentation
// (<https://peggyjs.org/documentation.html#grammar-syntax-and-semantics>)
start
  = additive

additive
  = left:multiplicative "+" right:additive { return left + right; }
  / multiplicative

multiplicative
  = left:primary "*" right:multiplicative { return left * right; }
  / primary

primary
  = integer
  / "(" additive:additive ")" / "(" start:start ")" { return additive; }

integer "simple number"
  = digits:[0-9]+ { return parseInt(digits.join(""), 10); }
