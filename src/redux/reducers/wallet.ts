// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// wallet.ts
const INITIAL_STATE = {
  currencies: [], // Inicialmente, a lista de moedas está vazia
  expenses: [], // Inicialmente, a lista de despesas está vazia
  editor: false, // Inicialmente, a edição não está ativada
  idToEdit: 0, // Inicialmente, o ID para editar é 0
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Defina as ações relacionadas à carteira aqui, como adicionar ou editar despesas, ativar o modo de edição, etc.
    default:
      return state;
  }
};

export default walletReducer;
