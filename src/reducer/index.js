export default(state=[], action) => {
  const { type, data } = action;
  
  switch (type) {
    case 'ADD_ITEM':
      return state;
    case 'EDIT_ITEM':
      return state;
    case 'DELETE_ITEM':
      return state;
    default:
      return state;
  }
}