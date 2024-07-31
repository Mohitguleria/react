import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, [status]);
  return status;
};

export default useOnlineStatus;

// import { useState, useEffect } from "react";

// function useOnlineStatus() {
//   const [status, setStatus] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => setStatus(true);
//     const handleOffline = () => setStatus(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return status;
// }

// export default useOnlineStatus;
