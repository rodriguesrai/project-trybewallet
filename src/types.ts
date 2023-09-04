type RootState = {
  user: {
    email: string;
  };
  wallet: {
    currencies: string[];
    expenses: any[]; // Substitua "any[]" pelo tipo apropriado das despesas
    editor: boolean;
    idToEdit: number;
  };
};

export default RootState;
