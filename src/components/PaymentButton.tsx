import React from "react";

interface PaymentButtonProps {
  amount: number;
  memo: string;
  metadata?: Record<string, any>;
  onReadyForServerApproval: (paymentId: string) => void;
  onReadyForServerCompletion: (paymentId: string, txid: string) => void;
  onCancel?: (paymentId: string) => void;
  onError?: (error: Error, payment?: any) => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  memo,
  metadata,
  onReadyForServerApproval,
  onReadyForServerCompletion,
  onCancel,
  onError,
}) => {
  const handlePayment = () => {
    const paymentData = { amount, memo, metadata };

    const callbacks = {
      onReadyForServerApproval,
      onReadyForServerCompletion,
      onCancel,
      onError,
    };

    window.Pi?.createPayment(paymentData, callbacks);
  };

  return(
<>
  <button onClick={handlePayment}>Pay {amount} Pi</button>
</>
);
};

export default PaymentButton;
