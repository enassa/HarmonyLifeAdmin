import { combineReducers } from 'redux';
import newsReducer from './NewsReducer';
import authReducer from './AuthReducer';
import appStateReducer from './AppStateReducer';
import projectReducer from './ProjectReducer';
import albumReducer from './AlbumReducer';
import institutionReducer from './InstitutionReducer';
import generalReducer from './generalReducers';
import groupReducer from './groupsReducer';
import paymentsReducer from './PaymentReducer';

import answersReducer from './AnswersReducer';
import answererReducer from './AnswererReducer';
import answerDetailsReducer from './AnswerDetailsReducer';
import answererDetailsReducer from './AnswererDetailsReducer';
import newAlertsReducer from './newAlertsReducer';
import processingAlertsReducer from './processingAlertsReducer';
import resolvedAlertsReducer from './resolvedAlertsReducer';
import facilityReducer from './facilityReducer';

const rootReducer = combineReducers({
    auth:authReducer,
    news:newsReducer,
    appState:appStateReducer,
    projects:projectReducer,
    albums:albumReducer,
    generalReducer:generalReducer,
    groups:groupReducer,
    payments:paymentsReducer,
    
    answersReducer:answersReducer,
    answererReducer:answererReducer,
    answerDetailsReducer:answerDetailsReducer,
    answererDetailsReducer:answererDetailsReducer, 
    
    newAlerts:newAlertsReducer,
    processingAlerts:processingAlertsReducer,
    resolvedAlerts:resolvedAlertsReducer,
    
    institutions:institutionReducer,
    facilityReducer:facilityReducer,

})

export default rootReducer;
