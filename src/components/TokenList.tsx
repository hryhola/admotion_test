import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { ethDevAddress } from '../constraints/api';
import { TokenResponce } from '../types/api';
import Token from './Token';

interface TokenListProps {
  tokens: TokenResponce[];
  visible: boolean;
}

const TokenList: React.FC<TokenListProps> = ({ visible, tokens }) => {
  if (!visible) return null;
  if (tokens.length === 0) {
    return (
      <Grid container justify='center' alignContent='center'>
        Total: 0. Nothing to display
      </Grid>
    );
  }
  const tokensToShow = tokens.filter((t) => t.address !== ethDevAddress);
  return (
    <>
      <Typography>Total: {tokens.length}</Typography>
      {tokensToShow.map((t) => (
        <Token key={t.address} token={t} />
      ))}
    </>
  );
};
export default TokenList;
