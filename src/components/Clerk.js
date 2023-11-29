import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
// export const clerkPubKey = "pk_test_cHJlY2lzZS10ZXRyYS05MS5jbGVyay5hY2NvdW50cy5kZXYk";
ClerkProvider.initialize({ apiKey: clerkPubKey });