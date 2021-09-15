import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, Grid, Typography, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

const PaymentDialog = ({ open, onClose, checkoutRetrieveState }) => {
  const classes = useStyles();
  const { loading, data } = checkoutRetrieveState;

  return (
    <Dialog open={open} onClose={onClose}>
      <Grid container className={classes.root}>
        {loading ? (
          <CircularProgress className={classes.spinner} thickness={1} size="5rem" />
        ) : (
          <>
            <CheckCircleOutlineRoundedIcon
              style={{ color: green[500] }}
              className={classes.successIcon}
            />

            <Typography component="h1" variant="h4" paragraph className={classes.title}>
              Pago completado
            </Typography>

            <Typography
              component="p"
              variant="body1"
              align="center"
              paragraph
              className={classes.message}>
              Tu pago ha sido completado exitosamente. Un correo electronico de confirmación ha sido
              enviado
              {checkoutRetrieveState.error ? (
                '.'
              ) : (
                <>
                  {' a'} <strong>{data.customer_details.email}</strong>
                </>
              )}
            </Typography>

            {!checkoutRetrieveState.error && (
              <>
                <Typography component="p" variant="h6" aling="center">
                  Número de comprobante
                </Typography>
                <Typography component="p" variant="body1" aling="center" paragraph>
                  {data.payment_intent.split('_')[1]}
                </Typography>
              </>
            )}

            <Button variant="outlined" color="primary" className={classes.button} onClick={onClose}>
              Seguir comprando
            </Button>
          </>
        )}
      </Grid>
    </Dialog>
  );
};

PaymentDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  checkoutRetrieveState: PropTypes.object,
};

export default PaymentDialog;
