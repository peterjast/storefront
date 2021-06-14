import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://peterstaker.com">
        Peter Staker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}