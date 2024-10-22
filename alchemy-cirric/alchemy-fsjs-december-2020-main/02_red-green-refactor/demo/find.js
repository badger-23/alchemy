const dictionary = require('./dictionary.json');

const findDefinitionByWord = searchTerm => {
  const index = dictionary
    .map(([word]) => word)
    .indexOf(searchTerm);
    
  if(index >= 0) return dictionary[index][1];
  throw new Error('google it instead');
};

module.exports = {
  findDefinitionByWord
};
