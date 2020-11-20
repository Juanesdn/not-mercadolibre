import { useState } from "react";
import { useUserDispatch } from "../contexts/UserContext";
import { useRouter } from "next/router";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useUserDispatch();
  const router = useRouter();

  const SignIn = async (email, password) => {
    setLoading(true);
    const url = `${process.env.API_URL}/authentication/login/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    await fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "user_logged_in",
          payload: data.result.access_token,
        });
        sessionStorage.setItem("access_token", data.result.access_token);
        setLoading(false);
        setError(false);
        router.push("/shop");
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  };

  const SignUp = (email, password, first_name, last_name) => {
    setLoading(true);
    const url = `${process.env.API_URL}/authentication/signup/`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        access: {
          admin: "True",
        },
        first_name,
        last_name,
      }),
    };

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SignIn(email, password);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };

  return { SignIn, SignUp, loading, error };
};

export default useAuth;
