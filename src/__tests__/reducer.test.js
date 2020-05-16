import reducer from '../reducer';

describe('reducer', () => {
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });

});