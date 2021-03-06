import { Lock } from '@mui/icons-material';
import React, { Component } from 'react'
import { decodeFromB64, getParameterByName, getTodaysDateWithoutDash } from '../../../contants/generalFunctions';
import FormGenerator from '../../../tools/FormGenerator/FormGenerator'
import { FIELDS } from '../../../tools/FormGenerator/FormGeneratorFields';
import Casantey from '../../../component_bag/Casantey';
import { ArrowRight } from '@mui/icons-material';
import { fontFamily5 } from '../../../contants/uiConstants';
import logo from '../../../assets/images/greenlogo.png'
import { connect } from 'react-redux';
import { loginAction } from '../../../store/actions/AuthActions';
import { changeLoadingState } from '../../../store/actions/AppStateActions';
import { openSnackBar } from '../../../store/actions/generalActions';
import OverlayLoader from '../../../component_bag/OverlayLoader';
import MyModal from '../../../component_bag/MyModal';
import { inntialResetFacilityPassword } from '../../../store/actions/facilityActions';
let decodedEmail = ''
class FirstAutoReset extends Component {
    constructor(props){
        super(props)
        this.state = {
            typeOfUser:null,
            loading:false,
            error:"",
        }
    }
    handleSubmit= (data,resetForm,completed)=>{
        this.props.changeLoadingState()
        completed()
        // const myData = {
        //     'email':data.email?data.email:null,
        //     'password':data.password?data.password:null,
        // }
        let newData = {...data, username:decodedEmail}
        delete newData.passwordConfirmation
        // this.props.history.push('/mtn/agent/admin')
        this.props.inntialResetFacilityPassword(newData)
    }
    render() {
        decodedEmail = decodeFromB64(getParameterByName('email'))

        return (
            <div className='width-100-cent height-100-cent nate-grey-bg all-center nate-white-bg f-column j-start a-center'>
                {this.props.loading?<OverlayLoader/>:null}
                 {this.state.error!==""
                ?<MyModal/>
                :null}
                <div style={{color:"grey", fontSize:50,fontWeight:"bolder",fontFamily:fontFamily5}} 
                     className='width-100-cent position-fixed left-0 top-50 j-center height-50 a-center font-1-2-em'
                >
                    {/* <span className='a-center' ><ArrowRight style={{width:"40px", height:"40px"}}/></span>  */}
                    <img src={logo} style={{width:40, height:40}}/>
                    <span>Harmony <span className='nate-green-text'>Life</span> </span>
                </div>                
                    <div style={{borderTop:"2px solid black "}} className='width-400 height-400 curved-corners j-space-around a-center f-column  nate-white-bg elevated-blend padding-30'>
                    <div style={{fontSize:20,fontFamily:fontFamily5}} className='all-center'><Lock/>Password Reset</div>
                    <div className='width-100-cent'>
                    <div  className='width-100-cent j-center '><input style={{border:"1px solid black"}} className="curved-corners-more padding-10" disable value={decodedEmail}/></div> 
                    <FormGenerator
                        fields = {[
                            {
                                fieldType: FIELDS.input,
                                name: "password",
                                label: "New Password",
                                placeholder: "Password Confirmation",
                                required: true,
                            },
                            {
                                fieldType: FIELDS.password,
                                name: "passwordConfirmation",
                                label: "Password Confirmation",
                                placeholder: "Password Confirmation",
                                required: true,
                            },
                        ]}
                        handleOnSubmit = {(data, resetFunc,completed)=>{
                            this.handleSubmit(data,resetFunc,completed)
                        }}
                        buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px", backgroundColor:"black"}}
                        serverReport = {this.props.authError}
                        reportState = {this.props.errorState}
                    />
                    </div>   
                </div>
             <Casantey/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        loginUser: (userData) => dispatch(loginAction(userData)),
        changeLoadingState: (userData) => dispatch(changeLoadingState()),
        openSnackBar:(message,messageType) => dispatch(openSnackBar(message,messageType)),
        inntialResetFacilityPassword: (data) => dispatch(inntialResetFacilityPassword(data)),

    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.appState.loading,
        isLogedIn:state.auth.isLogedIn,
        snackBarState:state.generalReducer.snackBarState,
        authError:state.auth.authError,
        errorState:state.auth.errorState
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FirstAutoReset)