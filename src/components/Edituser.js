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
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get(`http://localhost:5000/userdata/${sno}`)
    .then(res=>{
      setId(res.data.id);
      setName(res.data.name);
      setPhone(res.data.phone);
      setAddress(res.data.address);
    })
    .catch()
  },[])
  
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/userdata/${id}`,{id,name,phone,address})
    .then(res=>{
      alert('Data Updated Successfully')
      navigate('/userdata')
    })
    .catch(err=>{
      alert('Failed to update user data')
    })
  }

  return (
      <Box className="RegFormBox">
        <div>
          <FormControl variant="standard">
            <InputLabel>ID</InputLabel>
            <Input value={id} onChange={(e) => setId(e.target.value)} />
            <div className="title title1"></div>
          </FormControl>
          <FormControl style={{ marginLeft: 60 }} variant="standard">
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
            <div className="title title2"></div>
          </FormControl>
        </div>
        <div style={{ marginTop: 30 }}>
          <FormControl variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div className="title title3"></div>
          </FormControl>
          <FormControl style={{ marginLeft: 60 }} variant="standard">
            <InputLabel>Address</InputLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
