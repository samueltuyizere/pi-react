# pi-react

`pi-react` is a React library for integrating the Pi Network SDK into React projects easily.

## Installation

```bash
npm install pi-react
```

## Usage

### Initialize the SDK

Use the `usePiSDK` hook to initialize the Pi SDK in your app:

``` typescript
import { usePiSDK } from "pi-react";

const App = () => {
  const isInitialized = usePiSDK(true); // Enable sandbox mode

  return <div>{isInitialized ? "SDK Initialized" : "Loading SDK..."}</div>;
};
```

### Authenticate Users

Use the `PiAuth` component to authenticate users:

```typescript
import { PiAuth } from "pi-react";

const App = () => {
  const handleAuthSuccess = (authResult) => {
    console.log("Authenticated user:", authResult.user);
  };

  return <PiAuth onAuthSuccess={handleAuthSuccess} />;
};
```

### Handle Payments

Use the `PaymentButton` component to handle payments:

```typescript
import { PaymentButton } from "pi-react";

const App = () => {
  const handleServerApproval = (paymentId) => {
    console.log("Payment ready for approval:", paymentId);
  };

  return (
    <PaymentButton
      amount={3.14}
      memo="Test Payment"
      onReadyForServerApproval={handleServerApproval}
    />
  );
};
```
