import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CustomRedirect extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        alert(this.props.link)
    }
    render() {
        this.props.history.push(this.props.link)
        return (
            <div>
                
            </div>
        );
    }
}

export default withRouter(CustomRedirect)