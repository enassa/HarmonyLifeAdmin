import { localStorageGet } from "./generalFunctions";

const domainName = "http://almamaterworld.com:8082"



export  const ALL_URLS  = {
    base:"/",

    // harmony Links
    loginFacility: '/facility/login',
    registerFacility: '/facility/register',
    loginInstitution: '/institution/login',
    loginAgent: '/agent/login',
    
    adminFacility: '/facility/admin',
    adminInstitution: '/institution/admin',
    adminSuper: '/super/admin',
    
    firstResetFacilityPassword:'/facility/reset/initial',
    firstResetInstitutionPassword:"/institution/reset/initial",
    facilityCreationSuccess:"/facility/register/success",

    resetFacilityPassword:'/facility/reset',
    resetInstitutionPassword:"/institution/reset",

    verifyFacilityEmail:"/facility/verify",
    verifyInstitutionEmail:"/institution/verify",
    // main urls

}
export  const ACTORS = {
    actorOne:"Super admin",
    actorTwo:"Organisation admin",
    actorThree:"Group Admin",
    actorFour:"Member",
}
export const TOKEN = {
    devToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXMiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly9hbG1hbWF0ZXJ3b3JsZC5jb206ODA4Mi9hcGkvbG9naW4iLCJleHAiOjIxMDUwOTM1NzN9.I_gtRfFJaPixpn-OaW21enqwLBn8U60nPhRSkIzLdTo",
    paymentToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzeXMiLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImlzcyI6Imh0dHA6Ly8xNTAuMjMwLjExMy4xOTk6ODA4My9hcGkvbG9naW4iLCJleHAiOjE3OTEyMTYxNDB9.r3DNKJ5Wz2ftF2Arci3jBjuN1fh2rFNv1Tx2ukjm52M"
}

let serviceType = 'delivery'

let devMode = true;
const base_url = devMode?'https://ef58-154-160-19-171.ngrok.io':`https://dev.api.harmonylife.io`;

export const URL_END_POINTS = {
    CREATE_ORGANISATION:`${base_url}/organization/create-from-web`,
    INNITIAL_INSTITUTION_PASSWORD_RESET:`${base_url}/organization-auth/resetPassword`,
    INNITIAL_FACILITY_PASSWORD_RESET:`${base_url}/institution-auth/authenticate`,
    LOGIN_INSTITUTION:`${base_url}/organization-auth/authenticate`,
    LOGIN_FACILITY:`${base_url}/institution-auth/authenticate`,
    GET_ACTIVE_INSTITUTIONS:`${base_url}/organization/status/Active`,
    GET_SERVICES:`${base_url}/static-data/all`,
    CREATE_FACILITY:`${base_url}/institution/createInstitution/web`,
    CREATE_AGENT:`${base_url}/staff/createStaffAndAuth/web`,
    
    REGISTER:`${domainName}/api/User/createUser/`,
    LOGIN_FACILITY:`${base_url}/auth/authenticate`,
    GET_ANSWERS_BY_FILTER:`${base_url}/application/start`,//
    UPDATE_RECORDS:`${base_url}/application/updateApplication`,
    RESET:`${domainName}/api/User/resetUser`,
    GET_PROJECTS:'https://jsonplaceholder.typicode.com/photos',
    GET_NEWS:'https://jsonplaceholder.typicode.com/posts',
    GET_INSTITUTIONS:'https://jsonplaceholder.typicode.com/photos',
    GET_PICTURES:'https://jsonplaceholder.typicode.com/albums/1/photos',
    GET_ANNOUNCEMENT:'https://jsonplaceholder.typicode.com/comments',
    GET_CONTRIBUTERS:'https://jsonplaceholder.typicode.com/photos',
    GET_PROJECTS_STATUS_UPDATE:'https://jsonplaceholder.typicode.com/photos',
    GET_GROUPS:'https://jsonplaceholder.typicode.com/photos',
    GET_JOINED_GROUPS:'https://jsonplaceholder.typicode.com/photos',
    GET_PAYMENTS:'https://jsonplaceholder.typicode.com/comments',
    PRODUCTION_BASE_URL:'http://almamaterworld.com:8081/',
    MAKE_PAYMENT:`http://150.230.113.199:8083/api/createInvoice`,
// Questionnaire

    SUBMIT_ANSWERS:`${base_url}/save`,//save a single object
    EDIT_ANSWERS:`${base_url}/edit`,//edit answers
    GET_ANSWERS_BY_PHONE:`${base_url}/phone`,
    GET_ANSWERS_BY_NAME:`${base_url}/name`,
    GET_ANSWERS_BY_EMAIL:`${base_url}/email`,//
    GET_ANSWERS_BY_ID:`${base_url}/id`,//
    GET_ANSWERS_BY_INSTITUTION:`${base_url}/institution`,//

    GET_ANSWERS:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERERS:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERERS_OF_ANSWER:"https://jsonplaceholder.typicode.com/posts",
    GET_ANSWERS_OF_ANSWERER:"https://jsonplaceholder.typicode.com/posts",

    GET_FROM_LUX:'https://luxcom-web-api.herokuapp.com/api/reservation/initial/'
    
}

// delivery-controller

// YYY-MM-DD
// POST
// /delivery/save

// GET
// /delivery/start/{start}/end/{end}

// GET
// /delivery/start/{start}/end/{end}/page/{page}/pageSize/{pageSize}

