import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51IGZh2CBMSD9L0WHM0EbwT2BIk1r1bjq4B4tWjkobf2u0GPkQZ3VVRTZGx6df3ZW3G9Msnxn6wRyMilRqYyRcyA800blYIYark"
);

export const CreditCardInput = () => {
  const onChange = (formData) => {
    
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");

    const card = {
      number: "4242424242424242",
      exp_month: "02",
      exp_year: "24",
      cvc: 444,
      name: "Mo",
    };
    
    const info = await stripe.createToken({ card });
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
