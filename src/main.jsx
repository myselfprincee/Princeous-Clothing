import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// eslint-disable-next-line react-refresh/only-export-components
const ClerkWithRoutes = () => {
  const clerkPubKey =
    "pk_test_cHJlY2lzZS10ZXRyYS05MS5jbGVyay5hY2NvdW50cy5kZXYk";

  if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
  }
  const navigate = useNavigate();

  return (
    <>
      <ClerkProvider
        publishableKey={clerkPubKey}
        navigate={(to) => navigate(to)}
      >
        <App />
      </ClerkProvider>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={new QueryClient()}>
    <BrowserRouter>
      <ClerkWithRoutes />
      <ReactQueryDevtools/>
    </BrowserRouter>
  </QueryClientProvider>
);
