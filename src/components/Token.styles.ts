import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
    padding: spacing(1),
  },
  address: {
    paddingTop: spacing(0.5),
    paddingBottom: spacing(0.5),
    paddingLeft: spacing(1),
    paddingRight: spacing(1),
  },
  addressButton: {
    fontWeight: 100,
    cursor: 'pointer',
    color: '#20a3d6',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
