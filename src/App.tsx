import React, { useState, useEffect } from 'react';
import { useStyles } from './App.styles';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from '@material-ui/core';
import { walletAddress } from './constraints/walletAddress';
import axios from 'axios';
import { apiKey, infuraProvider, web3url } from './constraints/api';
import { TokenResponce } from './types/api';

import Balance from './components/Balance';
import Web3 from 'web3';
import TokenList from './components/TokenList';

const web3 = new Web3(Web3.givenProvider || infuraProvider);

const App: React.FC = () => {
  const styles = useStyles();
  const [wallet, setWallet] = useState(walletAddress);
  const [balanceInWei, setBalanceInWei] = useState<string>('');
  const [tokens, setTokens] = useState<TokenResponce[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTokens = async () => {
    try {
      setIsLoading(true);
      // Getting tokens from address
      const responseTokens = await axios.get(
        `${web3url}/addresses/${wallet}/token-balances/latest`,
        {
          headers: { 'x-api-key': apiKey },
        }
      );
      setTokens(responseTokens.data?.payload?.records);

      // Getting eth balance
      const balance = await web3.eth.getBalance(wallet);
      setBalanceInWei(balance);
    } catch (error) {
      alert(`${error.message}, try again`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      fetchTokens();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <TextField
        className={styles.root}
        label='Address'
        fullWidth
        value={wallet}
        onChange={({ target }) => setWallet(target.value)}
      />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Button variant='contained' color='primary' onClick={fetchTokens}>
          Get Balance
        </Button>
      </Grid>
      {isLoading && (
        <Grid
          className={styles.loading}
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          <CircularProgress />
        </Grid>
      )}
      <Balance
        visible={!isLoading}
        value={balanceInWei || '0'}
        showIn='ether'
      />
      <TokenList visible={!isLoading} tokens={tokens} />
    </Container>
  );
};

export default App;
