// Esse reducer será responsável por tratar as informações da pessoa usuária
// user.ts
type ActionTypeEmail = {
  type: string;
  payload: string;
};

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: ActionTypeEmail) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
