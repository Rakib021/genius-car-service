import React from "react";
import googleLogo from "../../../images/social/ggogle.png";
import facebookLogo from "../../../images/social/facbook.png";
import githubLogo from "../../../images/social/github.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router";
import Loading from "../../shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//   const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

if(loading || loading1){
    return <Loading></Loading>
}
  let errorElement;
  if (error ||error1) {
    errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
     
  }

  if (user || user1) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto rounded my-2"
        >
          <img
            style={{ width: "30px" }}
            className="bg-info"
            src={googleLogo}
            alt=""
          />

          <span className="px-2"> Google Sign In</span>
        </button>
        <button  className="btn btn-info w-50 d-block mx-auto rounded my-2">
          <img
            style={{ width: "30px" }}
            className="bg-info"
            src={facebookLogo}
            alt=""
          />

          <span className="px-2"> Facebook Sign In</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-info w-50 d-block mx-auto rounded my-2">
          <img
            style={{ width: "30px" }}
            className="bg-info"
            src={githubLogo}
            alt=""
          />

          <span className="px-2"> Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
