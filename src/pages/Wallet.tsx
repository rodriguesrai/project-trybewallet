import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';
import style from './Wallet.module.css';

function Wallet() {
  return (
    <div className={ style.mainContainer }>
      <Header />
      <WalletForm />
      <Table />
    </div>
  );
}

export default Wallet;
