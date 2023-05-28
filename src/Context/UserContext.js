import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React } from 'react';
export const UserContext = createContext()

export default function UserDataContext({ children }) {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
  let userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();
  function console() {
    console.log('working')
  }
  async function login(email, password) {

    try {
      const { data } = await axios.post(
        "http://130.61.246.36/api/v1/auth/login",
        {
          email,
          password

        }

      );
      localStorage.setItem("userToken", data.tokenData.token);
      setUserToken(localStorage.getItem('userToken'));
      userRole = localStorage.setItem('userRole', data.user.role);
      navigate("/");
    } catch (error) {
      document.getElementById('login-errors').innerHTML = error.response.data.message;

      console.log(error)

    }
  }

  async function register(email, password, name, role = 'user') {
    try {
      const { data } = await axios.post(
        "http://130.61.246.36/api/v1/auth/register",
        {
          email,
          password,
          name,
          role
        }
      );
      navigate("/login");
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    setUserToken(null)
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    navigate(window.location.pathname)
  };

  return <UserContext.Provider value={{ userToken, login, logOut, register, userRole, console }}>

    {children}
  </UserContext.Provider >


}