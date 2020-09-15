import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Web3 from 'web3';
import { useStyles } from './Balance.styles';

interface BalanceProps {
  value: string;
  showIn:
    | 'noether'
    | 'wei'
    | 'kwei'
    | 'Kwei'
    | 'babbage'
    | 'femtoether'
    | 'mwei'
    | 'Mwei'
    | 'lovelace'
    | 'picoether'
    | 'gwei'
    | 'Gwei'
    | 'shannon'
    | 'nanoether'
    | 'nano'
    | 'szabo'
    | 'microether'
    | 'micro'
    | 'finney'
    | 'milliether'
    | 'milli'
    | 'ether'
    | 'kether'
    | 'grand'
    | 'mether'
    | 'gether'
    | 'tether';
  visible: boolean;
}
const Balance: React.FC<BalanceProps> = ({ value, showIn, visible }) => {
  const styles = useStyles();
  if (!visible) return null;
  return (
    <Grid
      className={styles.root}
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Typography variant='h5' display='inline'>
        {Web3.utils.fromWei(value, showIn)} {showIn}
      </Typography>
    </Grid>
  );
};
export default Balance;
