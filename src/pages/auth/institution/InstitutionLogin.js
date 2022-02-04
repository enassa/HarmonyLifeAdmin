import { Lock } from '@mui/icons-material';
import React, { Component } from 'react'
import { getTodaysDateWithoutDash } from '../../../contants/generalFunctions';
import FormGenerator from '../../../tools/FormGenerator/FormGenerator'
import { FIELDS } from '../../../tools/FormGenerator/FormGeneratorFields';
import Casantey from '../../../component_bag/Casantey';
import { ArrowRight } from '@mui/icons-material';
import { fontFamily3, fontFamily5 } from '../../../contants/uiConstants';
import logo from '../../../assets/images/greenlogo.png'
import { connect } from 'react-redux';
import { loginAction } from '../../../store/actions/AuthActions';
import { changeLoadingState } from '../../../store/actions/AppStateActions';
import { openSnackBar } from '../../../store/actions/generalActions';
import OverlayLoader from '../../../component_bag/OverlayLoader';
import MyModal from '../../../component_bag/MyModal';
import { loginInstitution } from '../../../store/actions/institutionsActions';
class InstitutionLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            typeOfUser:null,
            loading:false,
            error:"",
        }
    }
    handleSubmit= (data,resetForm,completed)=>{
        // this.props.changeLoadingState()
        completed()
       
        // this.props.history.push('/institution/admin')
        this.props.loginInstitution(data)        
    }
    render() {
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
                    <div style={{fontSize:20,fontFamily:fontFamily5}} className='all-center'><Lock/> Institution Login</div>
                    <div className='width-100-cent'>
                    <FormGenerator
                        fields = {[
                            {
                                fieldType: FIELDS.input,
                                name: "username",
                                label: "Username",
                                placeholder: "FirstName LastName OtherNames",
                                required: true,
                            },
                            {
                                fieldType: FIELDS.password,
                                name: "password",
                                label: "Password",
                                placeholder: "Password",
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
                    <div className='cursor-pointer' onClick={() => {this.props.history.push('/institution/verify')}} style={{fontFamily:fontFamily3}}>Forgot password?</div>
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
        loginInstitution: (data) => dispatch(loginInstitution(data)),
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
export default connect(mapStateToProps,mapDispatchToProps)(InstitutionLogin)