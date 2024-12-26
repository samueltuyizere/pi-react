/* eslint-disable no-console */
import React, { useEffect } from "react";

interface PiAuthProps {
  onAuthSuccess: (authResult: any) => void;
  onAuthError?: (error: any) => void;
}

const PiAuth: React.FC<PiAuthProps> = ({ onAuthSuccess, onAuthError }) => {
  const authenticate = async () => {
    try {
      const authResult = await window.Pi?.authenticate(
        ["username", "payments", "wallet_address"],
        (payment: any) => {
          console.log("Incomplete Payment Found:", payment);
        }
      );
      onAuthSuccess(authResult);
    } catch (error) {
      console.error("Authentication failed", error);
      onAuthError?.(error);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return null; // No UI for this component
};

export default PiAuth;
