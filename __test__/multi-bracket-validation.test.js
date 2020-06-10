const multiBracket = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('multu-brackets validator', () => {
  it('return true', () => {
    expect(multiBracket('{}')).toEqual(true);
  });
  it('return true', () => {
    expect(multiBracket('{}(){}')).toEqual(true);
  });
  it('return true', () => {
    expect(multiBracket('()[[Extra Characters]]')).toEqual(true);
  });
  it('return true', () => {
    expect(multiBracket('(){}[[]]')).toEqual(true);
  });
  it('return true', () => {
    expect(multiBracket('{}{Code}[Fellows](())')).toEqual(true);
  });
  it('return false', () => {
    expect(multiBracket('[({}]')).toEqual(false);
  });
  it('return false', () => {
    expect(multiBracket('(](')).toEqual(false);
  });
  it('return false', () => {
    expect(multiBracket('{(})')).toEqual(false);
  });
});