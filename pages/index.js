import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container, Grid } from '@material-ui/core';

import { getAll } from 'database/db';
import useCheckoutRetrieve from 'hooks/useCheckoutRetrieve';
import ProductList from 'components/ProductList';
import PaymentDialog from 'components/PaymentDialog';

const HomePage = ({ productList }) => {
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [checkoutRetrieveState, fetchCheckoutRetrieve] = useCheckoutRetrieve();

  const router = useRouter();
  const { gender, success, sessionId } = router.query;

  useEffect(() => {
    if (success) {
      setOpenPaymentDialog(true);
      fetchCheckoutRetrieve({ sessionId });
    }
  }, [success]);

  const handleClosePaymentDialog = () => {
    setOpenPaymentDialog(false);
    router.push('/');
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <ProductList
            list={
              gender === 'ALL' || !gender
                ? productList
                : productList.filter(item => item.gender === gender)
            }
          />
        </Grid>
      </Container>

      {openPaymentDialog && (
        <PaymentDialog
          open={openPaymentDialog}
          onClose={handleClosePaymentDialog}
          checkoutRetrieveState={checkoutRetrieveState}
        />
      )}
    </>
  );
};

export function getStaticProps() {
  const { items } = getAll();

  return { props: { productList: items } };
}

HomePage.propTypes = {
  productList: PropTypes.array,
};

export default HomePage;
