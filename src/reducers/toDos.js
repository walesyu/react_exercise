//定義可以觸發的action type與動作
const toDos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let data = action.payload;
      return [
        {
          id: data.id,
          text: data.text
        }, ...state
      ];
    case 'DEL_ITEM': {
      return state.filter(item => item.id !== action.id)
    }
    default:
      return state
  }
};

export default toDos
