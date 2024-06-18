import React, { useEffect, useState } from "react";
import "./common.css";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Grid,
  GridColumn,
  Icon,
  Button,
} from "semantic-ui-react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Userdata = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/userdata")
      .then((res) => {
        setUserdata(res.data);
      })
      .catch((err) => {
        alert("Failed to Fetch Api");
      });
  });
  const deleteUserData = (userid) => {
    axios
      .delete(`http://localhost:5000/userdata/${userid}`)
      .then((data) => {
        alert("Deleted Successfully");
      })
      .catch((err) => {
        alert("Deletion failed");
      });
  };
  return (
    <div className="userdata">
      <Grid>
        <GridColumn width={3}></GridColumn>
        <GridColumn width={10}>
          <Table striped>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Phone</TableHeaderCell>
                <TableHeaderCell>Address</TableHeaderCell>
                <TableHeaderCell>Delete</TableHeaderCell>
                <TableHeaderCell>Edit</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userdata.map((data) => {
                return (
                  <TableRow>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.address}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => deleteUserData(data.id)}
                        style={{ width: 60 }}
                      >
                        <Icon className="icon1" name="trash" size="large" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <NavLink to={`/edituser/${data.id}`}>
                        <Button style={{ width: 55 }}>
                          <Icon className="icon2" name="edit" size="large" />
                        </Button>
                      </NavLink>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </GridColumn>
      </Grid>
      <NavLink to={"/"}>
        <Button style={{ marginTop: 50 }} primary>
          Go to Home Page
        </Button>
      </NavLink>
    </div>
  );
};

export default Userdata;
