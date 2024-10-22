const Stack = require('./Stack');

const BRACKET_PATTERN = /\(|\)|\[|\]|\{|\}/g;
const BRACKET_MAP = {
  '{': '}',
  '[': ']',
  '(': ')'
};
const ALL_OPENERS = Object.keys(BRACKET_MAP);
const ALL_CLOSERS = Object.values(BRACKET_MAP);

const parser = code => code.match(BRACKET_PATTERN);

const isOpener = bracket => ALL_OPENERS.includes(bracket);
const isCloser = bracket => ALL_CLOSERS.includes(bracket);

const handleCloser = (opener, closer) => {
  if(BRACKET_MAP[opener] !== closer) {
    throw { error: `missing ${BRACKET_MAP[opener]}` };
  }
};

const handleBracket = (bracket, stack) => {
  if(isOpener(bracket)) {
    stack.push(bracket);
  }

  if(isCloser(bracket)) {
    handleCloser(stack.pop(), bracket);
  }
};

const validateBrackets = code => {
  const brackets = parser(code);
  const stack = new Stack();
  for(let i = 0; i < brackets.length; i++) {
    handleBracket(brackets[i], stack);
  }

  if(stack.peek()) {
    throw { error: `missing ${BRACKET_MAP[stack.peek()]}` };
  }
};

const lint = code => {
  try {
    validateBrackets(code);
    return { success: true };
  } catch(err) {
    return err;
  }
};


module.exports = {
  parser,
  lint
};
