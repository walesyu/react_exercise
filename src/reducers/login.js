//定義可以觸發的action type與動作
const login = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      let data = action.payload;
      return {
        user: {
          name: data,
          role: 'Admin'
        }
      };
    case 'LOGOUT': {
      return null
    }
    default:
      return state
  }
};

export default login
