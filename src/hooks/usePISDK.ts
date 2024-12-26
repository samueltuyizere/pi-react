import { useEffect, useState } from "react";
import { loadPiSDK } from "../utils/loadPISDK";

export const usePiSDK = (sandbox = false) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await loadPiSDK();
        window.Pi?.init({ version: "2.0", sandbox });
        setIsInitialized(true);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to initialize Pi SDK", error);
      }
    })();
  }, [sandbox]);

  return isInitialized;
};
