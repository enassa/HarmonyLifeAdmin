import React, { Component } from 'react'
import { fontFamily3, fontFamily5 } from '../contants/uiConstants'

export default class MyModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            showButtons:true
        }
    }
    // Returns either true or false based on user inputs, overlay also return false
    returnResponse = (response) => {
        this.props.getResponse?this.props.getResponse(response):alert('pass a getResponse prop as a function to receive respoonse')
    }
    getSuccessfullConponent = () => {
        return <div style={{fontFamily:fontFamily5}} className='width-50-cent f-column j-center a-center height-100-cent'>
                <div style={{fontSize:40}} className='width-100 height-100 anime-bounce-z nate-green-bg nate-white-text elevated-all round-up all-center margin-b-10'>✔</div>
                <span className='nate-green-text'>{this.props.failureMessage?this.props.failureMessage:'Action was  succesful'}</span>
            </div>
    }
    getFailedComponent = () => {
        return <div style={{fontFamily:fontFamily5,}} className='width-50-cent f-column j-center a-center height-100-cent'>
                <div style={{fontSize:40}} className='width-100 height-100  nate-pink-bg nate-white-text elevated-all round-up all-center margin-b-10'>x</div>
                <span style={{  fontSize:20,
                fontWeight:300,}} className='nate-pink-text'>{this.props.succesMessage?this.props.succesMessage:'Action was not succesful'}</span>
            </div>
    }
    render() {
        const styles = {
            outerStyles:{
                ...this.props.styles
            },
            buttonStyles:{
                border:'0px',
                backgroundColor:"white",
                fontFamily:fontFamily5,
                fontSize:20,
                fontWeight:300,
                ...this.props.buttonStyles
            }
        }
        return (
            <div className='width-100-cent height-100-cent j-center a-center above-all left-0 top-0 position-fixed '>
                <div onClick = {(e) =>this.returnResponse(false) }  className='width-100-cent cursor-pointer fade-in height-100-cent a-center j-center  top-0 left-0 nate-black-more-partial-bg position-fixed'>
                </div>
                <div className='pop-up-rise width-30-cent height-30-cent position-relative j-start f-column position-relative  above-all curved-corners nate-white-bg overflow-hidden'>
                    <div className='width-100-cent all-center height-100-cent'>
                        {
                            //If user passes children, dont use default succes and failue components
                        this.props.children?this.props.children

                        // If user passes failed, failed component is shown
                        :this.props.state
                        ?this.getSuccessfullConponent()
                        :this.getFailedComponent()
                        }
                    </div>
                    {this.state.showButtons
                    ?<div style={{fontFamily:fontFamily5}} className='width-100-cent  pointer-events-none position-abosulte left-0 bottom-0 j-end padding-r-40 padding-b-20'>
                        {/* If user passes hideCancel the cancel button is hidden, Also if user does not pass a cance text text 'Cancel is shown' */}

                        {this.props.hideCancel?null
                        :<button style={styles.buttonStyles} onClick = {(e) =>this.returnResponse(false) }  className='margin-r-20 nate-pink-text pointer-events-all cursor-pointer'>
                            {this.props.cancelText?this.props.canceltext:'Cancel'}
                        </button>
                        }
                        {/* If user does not pass an oktext text text 'OK is shown' */}
                        <button style={styles.buttonStyles}  onClick = {(e) =>this.returnResponse(true) }  
                              className='pointer-events-all cursor-pointer nate-blue-text'
                        >
                            {this.props.okText?this.props.canceltext:'Sure'}
                        </button>                  
                    </div>
                    :null}
                </div>
        </div>
        )
    }
}
