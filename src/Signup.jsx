import { SignUp } from "@clerk/clerk-react";

const Signup = () => {

  return (
    <div className="relative" onContextMenu={false}>
      <video
        className="mt-[1.6rem] mb-[-1.5rem] object-cover Mobile:h-[90vh]"
        controls={false}
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dmy3ymbnl/video/upload/v1696673573/auth_bg.mkv"
          type="video/mp4"
        />
      </video>
      <SignUp />
    </div>
  );
};

export default Signup;
