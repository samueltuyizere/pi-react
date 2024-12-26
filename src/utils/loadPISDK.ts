declare global {
  interface Window {
    Pi: any;
  }
}

export const loadPiSDK = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.Pi) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.minepi.com/pi-sdk.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pi SDK"));
    document.head.appendChild(script);
  });
};
