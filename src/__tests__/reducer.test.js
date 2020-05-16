import reducer from '../reducer';

describe('reducer', () => {
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });



  let action;
  const itemData = {
    name: 'Blue shirt',
    description: 'Blue shirt description',
    available: 10,
    price: 10,
    id: 1
  };


  test('Should add new item data to state', () => {
    expect(reducer([], {type: 'ADD_ITEM', data: {...itemData} })).toEqual([{...itemData}]);
    
  });




});

//name, description, available, price, key

  // [
  //   {
  //     name: 'Blue shirt',
  //     description: 'Blue shirt description',
  //     available: 10,
  //     price: 10,
  //     id: 1
  //   }
  // ]