//定義Action的資料型態
export const addTodo = (payload: { id: number, text: string }) => {
  return {type: 'ADD_ITEM', payload};
};

export const removeTodo = (id: string) => {
  return {type: 'DEL_ITEM', id}
};
