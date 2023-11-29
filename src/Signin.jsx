import { SignIn } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

const Signin = () => {
  useEffect(() => {
    // Disable right-click on the entire document
    function disableRightClick(event) {
      toast.error("Right click is disabled", {
        position: 'top-center',
        richColors: true,
        duration: 1000
      });
      event.preventDefault();
    }
    return document.addEventListener("contextmenu", disableRightClick);
  }, []);
  return (
    <div className="relative">
        <Toaster  className="toast h-10 w-10"/>
      <video
        className="mt-[1.6rem] mb-[-1.5rem] object-cover Mobile:h-[90vh]"
        controls={false}
        autoPlay
        loop
        muted
      >
        <source rel="prefetch"
          src="https://res.cloudinary.com/dmy3ymbnl/video/upload/v1696673573/auth_bg.mkv"
          type="video/mp4"
        />
      </video>
      <SignIn />
    </div>
  );
};

export default Signin;
