import React, { useState } from 'react';
import { Card, Grid, Typography, Popover } from '@material-ui/core';
import { TokenResponce } from '../types/api';
import { useStyles } from './Token.styles';
import { formatTokenAmount } from '../utils/formatTokenAmount';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface TokenProps {
  token: TokenResponce;
}

const Token: React.FC<TokenProps> = ({ token }) => {
  const { amount, name, symbol, decimals, address } = token;
  const [anchor, setAnchor] = useState<HTMLSpanElement | null>(null);
  const styles = useStyles();
  const smallWidth = useMediaQuery('(max-width:600px)');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);
  const id = open ? address : undefined;
  return (
    <Card className={styles.root}>
      <Grid container alignItems='center' spacing={2}>
        <Grid item xs={6}>
          <Typography variant='overline' color='textSecondary'>
            {symbol}
          </Typography>{' '}
          {name.length ? (
            name
          ) : (
            <Typography color='textSecondary'>Name was not provided</Typography>
          )}
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction='row'
          justify='space-between'
          alignItems='flex-end'
        >
          <span>
            {formatTokenAmount(amount, decimals, smallWidth ? 2 : decimals)}
          </span>
          <span className={styles.addressButton} onClick={handleClick}>
            address
          </span>
          <Popover
            id={id}
            open={open}
            anchorEl={anchor}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography variant='overline' className={styles.address}>
              {address}
            </Typography>
          </Popover>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Token;
