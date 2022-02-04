import './App.css';
import React, { Component } from 'react'
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import { ALL_URLS } from './contants/urls';
import { connect } from 'react-redux';
import { sendAnswers } from './store/actions/answersActions';
import NewDashboard from './pages/dashboard/NewDashboard';
import AdminHome from './pages/AdminHome';
import FacilityForms from './pages/facilityforms/FacilityForms';
import FormPage from './pages/facilityforms/FormPage';
import FacilityLogin from './pages/auth/facility/FacilityLogin';
import InstitutionAdmin from './pages/InstitutionAdmin';
import InstitutionLogin from './pages/auth/institution/InstitutionLogin';
import SuperAdmin from './pages/SuperAdmin';
import FacilityEmailVerification from './pages/auth/facility/FacilityEmailVerification';
import FacilityPasswordReset from './pages/auth/facility/FacilityPasswordReset';
import InstitutionPasswordReset from './pages/auth/institution/InstitutionPasswordReset';
import InstitutionEmailVerification from './pages/auth/institution/InstitutionEmailVerification';
import InstitutionFirstAutoReset from './pages/auth/institution/InstitutionFirstAutoReset';
import EmailSuccess from './pages/facilityforms/EmailSuccess';
import FacilityFirstAutoReset from './pages/auth/facility/FacilityFirstAutoReset';
import FacilityAdmin from './pages/FacilityAdmin';
 class Appp extends Component {
   constructor(props){
     super(props)
     this.state={
     }   
    }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ALL_URLS.base} component={FacilityForms}/>
          
          <Route exact path={ALL_URLS.loginInstitution} component={InstitutionLogin}/>
          <Route exact path={ALL_URLS.resetInstitutionPassword} component={InstitutionPasswordReset}/>
          <Route exact path={ALL_URLS.verifyInstitutionEmail} component={InstitutionEmailVerification}/>
          <Route exact path={ALL_URLS.firstResetInstitutionPassword} component={InstitutionFirstAutoReset}/>
          <Route exact path={ALL_URLS.firstResetFacilityPassword} component={FacilityFirstAutoReset}/>
          <Route exact path={ALL_URLS.registerFacility} component={FormPage}/>
          
          <Route exact path={ALL_URLS.loginFacility} component={FacilityLogin}/>
          <Route exact path={ALL_URLS.resetFacilityPassword} component={FacilityPasswordReset}/>
          <Route exact path={ALL_URLS.verifyFacilityEmail} component={FacilityEmailVerification}/>
          <Route exact path={ALL_URLS.facilityCreationSuccess} component={EmailSuccess}/>
          <Route exact path={ALL_URLS.adminFacility} component={FacilityAdmin}/>
          
          <Route exact path={ALL_URLS.adminSuper} component={SuperAdmin}/>
          <Route exact path={ALL_URLS.adminInstitution} component={InstitutionAdmin}/>
          <Route exact path={ALL_URLS.anyOther} component={FormPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      sendAnswers: (answers) => dispatch(sendAnswers(answers)),
}
}
const mapStateToProps = (state) => {
  // console.log(state.answersReducer.receivedData)
  return {  
      submissionState:state.answersReducer.submissionState,
      receivedData:state.answersReducer.receivedData,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Appp);


