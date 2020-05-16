import reducer from '../reducer';

describe('reducer', () => {
  test('should return empty array if no action type is given', () => {
    expect(reducer([],{type: null})).toEqual([]);
  });

  let action;
  const itemData = [
    {
      name: 'Blue shirt',
      description: 'Blue shirt description',
      available: 10,
      price: 10,
      id: 1
    },
    {
      name: 'Red shirt',
      description: 'Red shirt description',
      available: 10,
      price: 10,
      id: 2
    }
  ]

  test('Should add new item data to state', () => {
    expect(reducer([], {type: 'ADD_ITEM', data: {...itemData[0]} })).toEqual([{...itemData[0]}]);
  });
  
  test('Should replace item data if id already exists', () => {
    expect(reducer(itemData, {type: 'EDIT_ITEM', data: {name: 'Green shirt', description: "Green shirt description", available: 10, price: 10, id: 1}})).toEqual(
    [
      {
      name: 'Green shirt',
      description: 'Green shirt description',
      available: 10,
      price: 10,
      id: 1
      },
      {
      name: 'Red shirt',
      description: 'Red shirt description',
      available: 10,
      price: 10,
      id: 2
      }
      ]
    )
  });

  const itemDataBeforeDelete = [
    {
      name: 'Blue shirt',
      description: 'Blue shirt description',
      available: 10,
      price: 10,
      id: 1
    },
    {
      name: 'Red shirt',
      description: 'Red shirt description',
      available: 10,
      price: 10,
      id: 2
    }
  ]

  const itemDataAfterDelete = [
    {
      name: 'Red shirt',
      description: 'Red shirt description',
      available: 10,
      price: 10,
      id: 2
    }
  ]

  test('Should delete an item based on id', () => {
    expect(reducer(itemDataBeforeDelete, {type: 'DELETE_ITEM', data: 1})).toEqual(itemDataAfterDelete);
  });
  
});