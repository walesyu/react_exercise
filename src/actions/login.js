//定義Action的資料型態
export const login = (payload: { text: string }) => {
  return {type: 'LOGIN', payload};
};

export const logout = () => {
  return {type: 'LOGOUT'}
};
