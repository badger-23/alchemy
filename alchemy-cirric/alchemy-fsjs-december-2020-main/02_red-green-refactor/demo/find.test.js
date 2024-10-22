const { findDefinitionByWord } = require('./find');

describe('findDefinitionByWord', () => {
  it('returns the definition of method', () => {
    const definition = findDefinitionByWord('method');

    expect(definition)
      .toEqual('1. An orderly procedure or process; regular manner of doing anything; hence, manner; way; mode; as, a method of teaching languages; a method of improving the mind. Addison. 2. Orderly arrangement, elucidation, development, or classification; clear and lucid exhibition; systematic arrangement peculiar to an individual. Though this be madness, yet there\'s method in it. Shak. All method is a rational progress, a progress toward an end. Sir W. Hamilton. 3. (Nat. Hist.)  Classification; a mode or system of classifying natural objects according to certain common characteristics; as, the method of Theophrastus; the method of Ray; the Linnæan method. Syn. -- Order; system; rule; regularity; way; manner; mode; course; process; means. -- Method, Mode, Manner. Method implies arrangement; mode, mere action or existence. Method is a way of reaching a given end by a series of acts which tend to secmode relates to a single action, or to the form which a series of acts, viewed as a whole, exhibits. Manner is literally the handling of a thing, and has a wider sense, embracing both method and mode. An instructor may adopt a good method of teaching to write; the scholar may acquire a bad mode of holding his pen; the manner in which he is corrected will greatly affect his success or failure.')
  });

  it('takes a word and returns a definition', () => {
    const definition = findDefinitionByWord('rotor');

    expect(definition)
      .toEqual('The rotating part of a generator or motor.');
  });

  it('throws an error saying google it instead', () => {
    expect(() => findDefinitionByWord('ntaoeuhsbntsbuotshaoeut'))
      .toThrow('google it instead');
  });
});
