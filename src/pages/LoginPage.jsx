import { API_URL } from "../config";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //
  const [name, setName] = useState("");
  const [surName, setSurname] = useState("");
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const nav = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(`${API_URL}/users`);
      console.log("This is the data", data);
      const foundUser = data.find((oneUser) => {
        if (oneUser.username.toLowerCase() === username.toLowerCase()) {
          return true;
        }
      });
      console.log("Found user!", foundUser);
      if (!foundUser) {
        setError("Invalid credentials");
      } else {
        const passCheck = foundUser.password === password;
        console.log("does the password match", passCheck);
        if (passCheck) {
          setCurrentUser(foundUser);
          nav("/request-received");
        } else {
          setError("Something went wrong, please try again.");
        }
      }
    } catch (error) {
      console.log("Something is not quite right", error);
    }
  };
  const handleAddLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/users`, {
        name,
        surName,
        username: createUsername,
        password: createPassword,
        email,
        telephone,
        address,
        city,
        postcode,
      });
      console.log("User created", data);
      setCurrentUser(data);
      nav("/request-received");
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        <form className="login-form-and-enter">
          <div className="account-details-row">
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                placeholder="Username"
              />
            </label>
            <label className="label-login">
              <input
                className="forms-login"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                placeholder="Password"
              />
            </label>
          </div>
        </form>

        {error && (
          <p style={{ color: "red" }}>Invalid credentials, please try again</p>
        )}
        <div className="enter-button-container">
          <button onClick={handleLogin} className="proceed-button">
            Enter
          </button>
        </div>
        <h3 className="no-account">Don't have an account yet?</h3>
        <form className="login-form" onSubmit={handleAddLogin}>
          <div className="account-details-row">
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Name"
              />
            </label>
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={surName}
                onChange={(event) => {
                  setSurname(event.target.value);
                }}
                placeholder="Surname"
              />
            </label>
          </div>
          <div className="account-details-row">
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={createUsername}
                onChange={(event) => {
                  setCreateUsername(event.target.value);
                }}
                placeholder="Username"
              />
            </label>

            <label className="label-login">
              <input
                className="forms-login"
                type="password"
                value={createPassword}
                onChange={(event) => {
                  setCreatePassword(event.target.value);
                }}
                placeholder="Password"
              />
            </label>
          </div>
          <div className="account-details-row">
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                placeholder="Email"
              />
            </label>
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={telephone}
                onChange={(event) => {
                  setTelephone(event.target.value);
                }}
                placeholder="Telephone"
              />
            </label>
          </div>
          <label className="label-login">
            <input
              className="forms-address"
              type="text"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              placeholder="Address"
            />
          </label>
          <div className="account-details-row">
            <label className="label-login">
              <input
                className="forms-login"
                type="text"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                placeholder="City"
              />
            </label>
            <label className="label-login">
              <input
                className="forms-login"
                type="postcode"
                value={postcode}
                onChange={(event) => {
                  setPostcode(event.target.value);
                }}
                placeholder="Postcode"
              />
            </label>
          </div>
          <div>
            <Link to="/companies">
              <button className="proceed-button">Back</button>
            </Link>
            <button className="proceed-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginPage;
