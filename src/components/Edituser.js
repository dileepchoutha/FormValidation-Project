import React, { useEffect, useInsertionEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import "./common.css";
import Button from "@mui/material/Button";
import axios from "axios";


const Edituser = () => {
  const { sno } = useParams();
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const [state, setState] = useState({
    "id": '',
    "name": '',
    "phone": '',
    "address": '',
   "disable" : true
  })
  const {id, name, phone, address,disable} = state;
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get(`http://localhost:5000/userdata/${sno}`)
    .then(res=>{
      setState({...state, ...res.data})
      // setId(res.data.id);
      // setName(res.data.name);
      // setPhone(res.data.phone);
      // setAddress(res.data.address);
    })
    .catch()
  },[])
  console.log(state)
  
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/userdata/${id}`,state)
    .then(res=>{
      alert('Data Updated Successfully')
      navigate('/userdata')
    })
    .catch(err=>{
      alert('Failed to update user data')
    })
  }

  const changeHandler = (name, value)=> {
    const cloneState = {...state}
    cloneState[name] = value;
    setState(cloneState)
  }

  return (
      <Box className="RegFormBox">
        <div>
          <FormControl variant="standard">
            <InputLabel>ID</InputLabel>
            <Input value={id} onChange={(e) => changeHandler("id", e.target.value)} disabled={disable}/>
            <div className="title title1"></div>
          </FormControl>
          <FormControl style={{ marginLeft: 60 }} variant="standard">
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={(e) => changeHandler("name", e.target.value)} />
            <div className="title title2"></div>
          </FormControl>
        </div>
        <div style={{ marginTop: 30 }}>
          <FormControl variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input value={phone} onChange={(e) => changeHandler("phone", e.target.value)} />
            <div className="title title3"></div>
          </FormControl>
          <FormControl style={{ marginLeft: 60 }} variant="standard">
            <InputLabel>Address</InputLabel>
            <Input
              value={address}
              onChange={(e) => changeHandler("address", e.target.value)}
            />
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

export default Edituser;
