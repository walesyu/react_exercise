//定義Action的資料型態
export const addTodo = (payload) => {
  console.log(payload)
  return {
    type: 'ADD_ITEM',
    payload: payload
  };
};

export const removeTodo = (id) => {
  console.log('removeTodo' , id)
  return {type: 'DEL_ITEM', id}
};
