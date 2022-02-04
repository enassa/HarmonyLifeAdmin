import { CloseRounded, Done, ReplyAll } from '@material-ui/icons';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { ALL_URLS } from '../contants/urls';

class ActionResponsePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const page = this.props.match.params.page
        return (
            <div className={`d-flex f-cloumn fill-entire-page j-center nate-white-bg a-center `}>
                {
                page==="success"
                ?<div className = 'slide-up-2 nate-green-text'  >
                {/* <CloseRounded style={{width:200, height:200}}/> */}
                <h1 className='d-flex j-center a-center' style={{fontSize:"900%"}}>🤗</h1>
                <h4>Transaction was succesful!</h4>
                <a className='d-flex j-center a-center' href={ALL_URLS.memberListProjects}>
                    <ReplyAll style={{marginRight:"10px"}}/>
                    <span>Return to app</span>
                </a>
            </div> 
                :<div className = 'slide-up-2 nate-pink-text'  >
                    {/* <CloseRounded style={{width:200, height:200}}/> */}
                    <h1 className='d-flex j-center a-center' style={{fontSize:"900%"}}>😩</h1>
                    <h4>Transaction failed!</h4>
                    <a className='d-flex j-center a-center' href={ALL_URLS.memberListProjects}>
                        <ReplyAll style={{marginRight:"10px"}}/>
                        <span>Return to app</span>
                    </a>
                </div> 
                }
            </div>
        );
    }
}
export default withRouter(ActionResponsePage)