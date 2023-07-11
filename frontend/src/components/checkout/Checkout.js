import React, { useState, useContext } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
} from "@mui/material";
// import * as React from "react";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../hooks/Auth";
import { CartContext } from "../dashboard/CartContext";

const steps = ["Your Address", "Payment Information", "Proceed to Check Out"];

export default function Checkout() {
  ////////////////
  const { user } = useAuth();
  const { setCartItems } = useContext(CartContext);
  const userAddress = user.address;
  const [address, setAddress] = useState(user.address);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    ccv: "",
    name: "",
  });
  /////////////////

  const [activeStep, setActiveStep] = useState(0);
  const [confirmationNumber, setConfirmationNumber] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 2) {
      const confirmationNumber = Math.floor(Math.random() * 1000000);
      setConfirmationNumber(confirmationNumber);
      setCartItems([]);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  //   const handleReset = () => {
  //     setActiveStep(0);
  //   };

  //////////
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentInfoChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Perform the checkout process here
    console.log("Address:", address);
    console.log("Payment Info:", paymentInfo);
  };
  //////////

  return (
    <Box>
      <Box sx={{ width: "80%" }} mt={10}>
        <Navbar />
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Typography sx={{ mt: 2, mb: 1, pt: 2 }}>
              Confirmation Number: {confirmationNumber}
            </Typography>
            {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* {} */}
              {activeStep === 0 && (
                <Box sx={{ width: "100%" }}>
                  <TextField
                    label="Address"
                    value={address}
                    onChange={handleAddressChange}
                    fullWidth
                  />
                </Box>
              )}

              {activeStep === 1 && (
                <Box sx={{ width: "100%" }}>
                  <TextField
                    label="Card Number"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentInfoChange}
                    fullWidth
                  />
                  <TextField
                    label="CCV"
                    name="ccv"
                    value={paymentInfo.ccv}
                    onChange={handlePaymentInfoChange}
                    fullWidth
                  />
                  <TextField
                    label="Name on Card"
                    name="name"
                    value={paymentInfo.name}
                    onChange={handlePaymentInfoChange}
                    fullWidth
                  />
                </Box>
              )}

              <Box sx={{ flex: "1 1 auto" }} />
              {/* {} */}
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Confirm Order" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
