import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import "./common.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {
  const [state, setState] = useState({
    id: "",
    name: "",
    phone: "",
    address: ""
  })
  const {id, name, phone, address} = state;
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let numExp = /^[0-9]+$/;
    let alphaExp = /^[a-zA-Z ]+$/;
    let addressExp = /^[a-zA-Z0-9@,/ ]+$/;
    if (id === "") {
      document.querySelector(".title1").innerHTML = "Please enter the ID";
    } else if (id.match(numExp)) {
      document.querySelector(".title1").innerHTML = "";
      // setStatus(true);
    } else {
      document.querySelector(".title1").innerHTML = "Enter Numbers Only";
      // setStatus(false);
    }
    if (name === "") {
      document.querySelector(".title2").innerHTML = "Please enter the Name";
    } else if (name.match(alphaExp)) {
      document.querySelector(".title2").innerHTML = "";
      // setStatus(true);
    } else {
      document.querySelector(".title2").innerHTML = "Enter Charecters Only";
      // setStatus(false);
    }

    if (phone === "") {
      document.querySelector(".title3").innerHTML = "Please Enter Number";
    } else if (phone.match(numExp)) {
      document.querySelector(".title3").innerHTML = "";
    } else {
      document.querySelector(".title3").innerHTML = "Enter Numbers Only";
    }

    if (address === "") {
      document.querySelector(".title4").innerHTML = "Please enter the Address";
    } else if (address.match(addressExp)) {
      document.querySelector(".title4").innerHTML = "";
      // setStatus(true);
    } else {
      document.querySelector(".title4").innerHTML = "Enter Correct address";
      // setStatus(false);
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && phone && address && id) {
      axios
      .post("http://localhost:5000/userdata", { id, name, phone, address })
      .then((res) => {
        alert('Data added successfully')
        setState({
          id: "",
          name: "",
          phone: "",
          address: ""
        })
      },[id])
      .catch((err) => {
        alert('Failed to add data')
      });
    } else {
      document.querySelector('.note').innerHTML="Please fill the Mandatory fileds"
    }
    navigate('/userdata');
   
  };

   const changehandler = (key, value) => {

  const cloneState = {...state};
  cloneState[key] = value
  setState(cloneState)

   }
  return (
    <Box className="RegFormBox">
      <div>
        <FormControl variant="standard">
          <InputLabel>ID</InputLabel>
          <Input value={id} onChange={(e) => changehandler('id', e.target.value)} />
          <div className="title title1"></div>
        </FormControl>
        <FormControl style={{ marginLeft: 60 }} variant="standard">
          <InputLabel>Name</InputLabel>
          <Input value={name} onChange={(e) => changehandler('name', e.target.value)} />
          <div className="title title2"></div>
        </FormControl>
      </div>
      <div style={{ marginTop: 30 }}>
        <FormControl variant="standard">
          <InputLabel>Phone</InputLabel>
          <Input value={phone} onChange={(e) => changehandler('phone', e.target.value)} />
          <div className="title title3"></div>
        </FormControl>
        <FormControl style={{ marginLeft: 60 }} variant="standard">
          <InputLabel>Address</InputLabel>
          <Input value={address} onChange={(e) => changehandler('address', e.target.value)}  />
          <div className="title title4"></div>
        </FormControl>
      </div>
      <div style={{ marginTop: 80, marginRight: 330 }}>
          <Button onClick={submitHandler} variant="contained">
            Submit
          </Button>
      </div>
      <div className="note"></div>
    </Box>
  );
};

export default Registrationform;
