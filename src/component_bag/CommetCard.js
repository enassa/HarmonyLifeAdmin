import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { withRouter } from 'react-router-dom';

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function commentsContainer(props) {
    const {comments} = props;
       return (
        comments
        ?<div style={{ padding: "40px 20px", marginTop: 10 }}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                <Avatar alt="Remy Sharp" src={comments.image} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 
                style={{
                    display:"flex",width:"100%",
                    // borderTop:"0.5px solid rgb(239 239 239)",
                }}>
                {comments.sender}</h4>
                <p style={{
                  fontFamily:"Helvetica Neue",marginBottom:"6%", 
                  width:"100%",fontStyle:"normal", fontWeight:"340",
                  lineHeight:"29px", color:"#333333", fontSize:"18px",textAlign:"justify",
              }}  >
                    {comments.body}
                    {" "}
                </p>
                <p style={{ textAlign: "left", color: "gray" }}>
                    {/* {`posted 1 minute ago`} */}
                    {`posted on: ${comments.date}`}
                </p>
                </Grid>
        </Grid>
        <Divider/>
      </div>
      :null

      );
    }
    
    export default withRouter(commentsContainer)
    

