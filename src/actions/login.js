//定義Action的資料型態
export const login = (payload) => {
  return {type: 'LOGIN', payload};
};

export const logout = () => {
  return {type: 'LOGOUT'}
};
