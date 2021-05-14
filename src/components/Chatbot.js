import ChatBot from "react-simple-chatbot";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f0f8ff",
  fontFamily: "Helvetica Neue",
  headerBgColor: " #5F9EA0",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: " #5F9EA0",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};
const steps = [
  {
    id: "1",
    message: "Welcome to Still Good! Are you a buyer or seller?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: 1, label: "Buyer", trigger: "3" },
      { value: 2, label: "Seller", trigger: "11" },
    ],
  },
  {
    id: "3",
    message: "How may I help you?",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: 1, label: "Register", trigger: "18" },
      { value: 2, label: "Update Shipping Address", trigger: "5" },
      { value: 3, label: "Payment", trigger: "6" },
      { value: 4, label: "Return Products", trigger: "7" },
    ],
  },
  {
    id: "5",
    message:
      "You may go to Account Setting to update your shipping address or update it before on the cart page before the payment",
    trigger: "8",
  },
  {
    id: "6",
    message: "We only accept card payment, sorry for any inconvenience",
    trigger: "8",
  },
  {
    id: "7",
    message:
      "We have a no refund, no return, no exchange, & no resale policy. Please confirm all items before proceed to the checkout.",
    trigger: "8",
  },
  {
    id: "8",
    message: "Do you still have other questions?",
    trigger: "9",
  },
  {
    id: "9",
    options: [
      { value: 1, label: "yes", trigger: "3" },
      { value: 2, label: "No", trigger: "10" },
    ],
  },
  {
    id: "10",
    message:
      "Great! Hope you enjoy our service. Please contact us via '+852 8888 8888' or 'contact@stillgood.com' if you have further quries.",
    end: true,
  },
  {
    id: "11",
    message: "How may I help you?",
    trigger: "12",
  },
  {
    id: "12",
    options: [
      { value: 1, label: "Register", trigger: "17" },
      { value: 2, label: "Sell Products", trigger: "13" },
      { value: 3, label: "Create Events", trigger: "14" },
    ],
  },
  {
    id: "13",
    message: "Please fill in the 'Add Product' form at 'Account Setting'.",
    trigger: "15",
  },
  {
    id: "14",
    message: "Please fill in the 'Add Event' form at 'Account Setting'.",
    trigger: "15",
  },
  {
    id: "15",
    message: "Do you still have other questions?",
    trigger: "16",
  },
  {
    id: "16",
    options: [
      { value: 1, label: "yes", trigger: "12" },
      { value: 2, label: "No", trigger: "10" },
    ],
  },
  {
    id: "17",
    message:
      "Please sign up at our site and upload the Certificate of Incorporation and the Business Registration Certificate. We will review your application and get back to you in a few days.",
    trigger: "15",
  },
  {
    id: "18",
    message:
      "Please sign up at our site and upload the Certificate of Incorporation and the Business Registration Certificate. We will review your application and get back to you in a few days.",
    trigger: "8",
  },
];

const Chatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} {...config} />
  </ThemeProvider>
);

export default Chatbot;
