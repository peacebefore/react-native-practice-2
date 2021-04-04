import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51IGZh2CBMSD9L0WHM0EbwT2BIk1r1bjq4B4tWjkobf2u0GPkQZ3VVRTZGx6df3ZW3G9Msnxn6wRyMilRqYyRcyA800blYIYark"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
