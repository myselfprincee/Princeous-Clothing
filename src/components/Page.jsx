import { SignedIn, ClerkProvider } from "@clerk/clerk-react";

function Page() {
  return (
    <ClerkProvider publishableKey="pk_test_cHJlY2lzZS10ZXRyYS05MS5jbGVyay5hY2NvdW50cy5kZXYk">
      <section>
        <div>
          This content is always visible.
        </div>
        <SignedIn>
          <div>
            This content is visible only to 
            signed in users.
          </div>
        </SignedIn>
      </section>
    </ClerkProvider>
  );
}

export default Page;