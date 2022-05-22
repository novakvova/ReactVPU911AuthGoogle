import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const onSuccess = async (res: any) => {
    try {
      console.log("token", res);
      // const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
      //   token: res?.tokenId,
      // });

      // setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const onFailure = async (res: any) => {
    try {
      console.log("token problem", res);
      // const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
      //   token: res?.tokenId,
      // });

      // setUser(result.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Good app");

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      {!user && (
        <GoogleLogin
          clientId="130989631512-tj78rudfve3e23mqipu58tagcgus6ln1.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Вхід"
          isSignedIn={false}
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default GoogleAuth;
