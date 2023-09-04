import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../types';

function Wallet() {
  const userEmail = useSelector((state: RootState) => state.user.email);

  return (
    <header>
      <p>
        Bem-vindo,
        {userEmail}

      </p>
    </header>
  );
}

export default Wallet;
