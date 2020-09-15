import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(2),
    marginBottom: spacing(2),
  },
  total: {
    marginLeft: spacing(2),
  },
  loading: {
    marginTop: spacing(6),
  },
}));
