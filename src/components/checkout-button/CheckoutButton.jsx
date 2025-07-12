import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51MuN7CJWxxxxxxxxxxxxxxx"); // ✅ Test Publishable Key

export default function CheckoutButton({ amount }) {
  const handleClick = async () => {
    console.log("Checkout button clicked!");

    const stripe = await stripePromise;

    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();
    console.log("Stripe session:", session);

    if (!session.id) {
      console.error("Session ID not returned:", session);
      return;
    }

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error("Stripe redirect error:", result.error.message);
    }
  };

  return (
    <button onClick={handleClick} className="focus:outline-none">
      <img
        src="/assets/images/fg-images/payment-gateway.png"
        alt="Payment options"
        className="cursor-pointer"
      />
    </button>
  );
}
