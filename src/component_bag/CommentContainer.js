import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function CommentsContainer(props) {
    const {Comment} = props;
  return (
    <div style={{ padding: 14,fontFamily: "sans-serif",width:"100%"}} 
    className="App">
      <h4 
        style={{
                display:"flex",width:"100%",padding:"20px 20px", 
                marginTop:"20px", marginBottom:"20px", 
                borderTop:"0.5px solid rgb(239 239 239)",
            }}>
            Comments
        </h4>
      <Paper style={{ padding: "40px 20px",boxShadow:" 0 1px 0 0 rgb(0 0 0 / 0%), 0 2px 10px 0 rgb(0 0 0 / 5%)",}}>
        {props.children?props.children:"No Comments yet helooo 😎"}
      </Paper>
    </div>
  );
}

export default withRouter(CommentsContainer)
