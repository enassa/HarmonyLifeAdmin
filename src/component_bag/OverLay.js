import React, { Component } from 'react'

export default class OverLay extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render() {
        const myClasses = { 
            NULL:null,
            mainContainer:`d-flex f-row j-center a-center fill-entire-page position-fixed z-highest`,
          } 
        const styles={
              mainContainer:{
                  backgroundColor:this.props.bgColor?this.props.bgColor:"rgb(0,0,0,0.5)"
              }
          }
        return (
            <div className={myClasses.mainContainer} style={styles.mainContainer}>
                {this.props.children}
            </div>
        )
    }
}
