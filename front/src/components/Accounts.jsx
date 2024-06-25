import React from 'react';
import PropTypes from 'prop-types';
import AccountData from './AccountData'

const Accounts = ({ accounts }) => {
  return (
    <>
      {accounts.map((accountInfo) => (
      <AccountData account={accountInfo} />
      ))}
    </>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      
    })
  ).isRequired,
};

export default Accounts;
