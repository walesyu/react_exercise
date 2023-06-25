//定義可以觸發的action type與動作
const login = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      let account = action.account;
      return {
        user: {
          name: account,
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
