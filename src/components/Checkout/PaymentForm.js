import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { PaystackButton } from "react-paystack";

import Review from "./Review";

const PaymentForm = ({
  checkoutToken,
  nextStep,
  backStep,
  shippingData,
  onCaptureCheckout,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    const orderData = {
      line_items: checkoutToken.live.line_items,
      customer: {
        firstname: shippingData.firstName,
        lastname: shippingData.lastName,
        email: shippingData.email,
      },
      shipping: {
        name: "International",
        street: shippingData.address1,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        postal_zip_code: shippingData.zip,
        country: shippingData.shippingCountry,
      },
      fulfillment: { shipping_method: shippingData.shippingOption },
    };

    onCaptureCheckout(checkoutToken.id, orderData);

    nextStep();
  };

  const publicKey = "pk_live_a07545d3858ad1c11108c5be493fbbf217a9885b";

  const componentProps = {
    email: shippingData.email,
    amount: 2000,
    metadata: {
      name: shippingData.firstName,
      phone: shippingData.no,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <PaystackButton {...componentProps} />
    </>
  );
};

export default PaymentForm;
