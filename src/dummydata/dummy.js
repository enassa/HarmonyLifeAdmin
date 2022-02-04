// // Component BoilerPlate 

// import { StylesProvider } from '@material-ui/core';
// import React, { Component } from 'react'

// export default class DynamicButton extends Component {
//     constructor(props){

//     }
//     handleClick=(someValue)=>{

//     }
//     render() {
//         // destructuring of props
//         const{
//             someText,
//             outerStyles,
//             innerStyles, 
//             outerClasses, 
//             innerClasses,
//             handleClick,
//         } = this.props;

//             // styles passed as props replace default styles
//         const innerStyle = {
//             // defaults styles on top here

//             ...innerStyles,
//         }
//         const outerStyle = {
//             // defaults styles on top here
//             ...outerStyles
//         }
//           const innerClass = `
//             // defaults classes on top here
//             ${innerClasses}
//         `
//         const outerClass = `
//             // defaults classes on top here
//             ${outerClasses}
//         `
//         return (
//             <div 
//                 onClick={(value)=>{handleClick(value)}} 
//                 style={outerStyle} 
//                 className={outerClass}
//             >
//                 <div style={innerStyle} className={innerClass}>
//                     {someText}
//                 </div>
//             </div>
//         )
//     }
// }

// // simple boilerplate
// import React, { Component } from 'react'
// import styles from "../../css/landing_page.module.css"
// export default class landingPage extends Component {
//     render() {
//         return (
//             <div 
//                 className={styles[``]} 
//                 id={styles[``]}
//             >
                
//             </div>
//         )
//     }
// }


// <div id="header-main-container">
// <h3>Dashboard</h3>
// <p>Welcome to your Dashboard, Anane</p>
// </div>
// <div id={"home-workspace-cards-region"} className={null}>
// {/* Kindly delete this and use your own icon or button for toggling */}
// {this.state.showWelcomeMessage
// ?<div id={"home-workspace-welcome-container"}>
//     <div id={"welcome-text-container"}>
//       <h5>Hello Amanda,</h5>
//       <p>Welcome to your origgin space, you are at the right place. Here you can connect with friends and manage all your apps. Feel at home enjoy yourself.</p>
//     </div>
//     <div id={"welcome-svg-container"}>
//       <div id={"welcome-close-container"} onClick={() => {this.setState({showWelcomeMessage:false})}}><CancelSharp/></div>
//       <img id={"welcome-svg"} src={WelcomeSvg}/>
//     </div>
// </div>
// :null
// }
// <div id={"home-worspace-cards-container"}>
//   <InfoCard 
//     contents={{value:"200", icon:<SupervisedUserCircle/>, desc:"Year groups"}}
//     outerStyles={{width:284,height: 152,borderRadius:"10px", background:"linear-gradient(90deg, #5C25D5 0%, rgba(41, 111, 249, 0.33) 107.07%)"}}
//     iconStyles={{color:"white"}}
//     descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
//     valueStyles={{color:"white"}}
//     />
//   <InfoCard 
//     contents={{value:"200", icon:<SupervisedUserCircle/>, desc:"Year groups"}}
//     outerStyles={{width:284,height: 152, borderRadius:"10px", background:"linear-gradient(90deg, #FB5A1E 0%, #F7B232 107.07%)"}}
//     iconStyles={{color:"white"}}
//     descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
//     valueStyles={{color:"white"}}
//     />
//   <InfoCard 
//     contents={{value:"200", icon:<SupervisedUserCircle/>, desc:"Year groups"}}
//     outerStyles={{width:284,height: 152,  borderRadius:"10px",  background:"linear-gradient(90deg, #15B48E 0%, rgba(140, 200, 67, 0.33) 107.07%)"}}
//     iconStyles={{color:"white"}}
//     descStyles={{color: "rgba(255, 255, 255, 0.76)"}}
//     valueStyles={{color:"white"}}
//     />

// </div>
// </div>
// <div id={"home-workspace-stats-container"}>
// <Dropdown 
//         handleSelect = {(itemName)=>this.handleUserTypeSelect(itemName)} 
//         pillStyles={{maxWidth:171, maxHeight:36 , minWidth:171, minHeight:36 , overFlow:"hidden"}}  asType={"pill"}
// />
//   <div id={"pie-chart-container"}>
//   <Chart
//         width={'322px'}
//         height={'320px'}
//         style={{boxShadow:""}}
//         chartType="PieChart"
//         loader={<div>Loading Chart</div>}
//         data={[
//             ['', ''],
//             ['Paid', 11],
//             ['Balance', 2],
//         ]}
//         options={{
//             title: 'Total Contributions / Balance',
//             // Just add this option
//             is3D: true,
//         }}
//         rootProps={{ 'data-testid': '2' }}
//     />
//   <Chart
//         width={'322px'}
//         height={'320px'}
//         style={{boxShadow:""}}
//         chartType="PieChart"
//         loader={<div>Loading Chart</div>}
//         data={[
//             ['', ''],
//             ['2022 Year group', 11],
//             ['2010', 2],
//             ['2003', 2],
//             ['2000', 2],
//             ['2007', 7],
//         ]}
//         options={{
//             title: 'Contributions / Group',
//             // Just add this option
//             is3D: true,
//         }}
//         rootProps={{ 'data-testid': '2' }}
//     />
//   <Chart
//         width={'322px'}
//         height={'320px'}
//         style={{boxShadow:""}}
//         chartType="PieChart"
//         loader={<div>Loading Chart</div>}
//         data={[
//             ['', ''],
//             ['2022', 11],
//             ['2003', 2],
//             ['2000', 2],
//             ['2007', 2],
//         ]}
//         options={{
//             title: 'Member contribution / Group',
//             // Just add this option
//             is3D: true,
//         }}
//         rootProps={{ 'data-testid': '2' }}
//     />
//   </div>
// </div>
// <div id={"home-workspace-graph-container"} className={null}>
// <Dropdown 

//           handleSelect = {(itemName)=>this.handleUserTypeSelect(itemName)} 
//           pillStyles={{marginBottom:30,maxWidth:171, maxHeight:36 , minWidth:171, minHeight:36 , overFlow:"hidden"}}  asType={"pill"}
//   />
// <div id="graph-container-wrapper">
// <AdvancedTable/>
// </div>
// </div>


// function createColumnFromRows(rows){
//     var columnArray = [];
//     var columnObject = {}
//     let Properties;
//     Properties = Object.keys(rows)
//     for(let j=0;j<Properties.length;j++){
//     columnObject[Properties[j]] = Properties[j] 
// }
//     columnArray[0] = columnObject
//     return columnArray;
//     // console.log(columnArray)

// }

// function createColumnFromRows(rows){
//     var columnArray = [];
//     var columnObject = {}
//     let Properties;

//     Properties = Object.keys(rows)
//     columnObject["id"] =
//     for(let j=0;j<Properties.length;j++){
//     columnObject[Properties[j]] = Properties[j] 
// }
//     columnArray[0] = columnObject
//     return columnArray;
//     // console.log(columnArray)

// }
const followUpTo = {
    slayQueen:{
        followUpQuestion:'slayQueen',
        followUpAnswer:'Slay queen'
    },
    ordinaryCitizen:{
        followUpQuestion:'slayQueen',
        followUpAnswer:'Ordinary Citizen'
    }
}




{
    fieldType: FIELDS.radioEmoji,
    groups:true,
    question:"How satisfied were you with the quantity of Food ?",
    groupItems:[
        {
            name: "foodQuantity",
            label:"😡",
            placeholder: "😡",
            required: true,
        },
        {
            name: "foodQuantity",
            label: "☹️ ",
            placeholder: "😐",
            required: true,
        },
        {
            name: "foodQuantity",
            label: "😐",
            placeholder: "😐",
            required: true,
        },
        {
            name: "foodQuantity",
            label: "😊",
            placeholder: "😊",
            required: true,
        },
        {
            name: "foodQuantity",
            label: "😍",
            placeholder: "😍",
            required: true,
        },
    ],
},
{
    fieldType: FIELDS.radioEmoji,
    groups:true,
    question:"How satisfied were you with the Quality of Food ?",
    groupItems:[
        {
            name: "foodQuality",
            label:"😡",
            placeholder: "😡",
            required: true,
        },
        {
            name: "foodQuality",
            label: "☹️ ",
            placeholder: "😐",
            required: true,
        },
        {
            name: "foodQuality",
            label: "😐",
            placeholder: "😐",
            required: true,
        },
        {
            name: "foodQuality",
            label: "😊",
            placeholder: "😊",
            required: true,
        },
        {
            name: "foodQuality",
            label: "😍",
            placeholder: "😍",
            required: true,
        },
    ],
},
{
    fieldType: FIELDS.radioEmoji,
    groups:true,
    question:"How satisfied were you with the wait imes for your food and Drinks?",
    groupItems:[
        {
            name: "waitTimes",
            label:"😡",
            placeholder: "😡",
            required: true,
        },
        {
            name: "waitTimes",
            label: "☹️ ",
            placeholder: "😐",
            required: true,
        },
        {
            name: "waitTimes",
            label: "😐",
            placeholder: "😐",
            required: true,
        },
        {
            name: "waitTimes",
            label: "😊",
            placeholder: "😊",
            required: true,
        },
        {
            name: "waitTimes",
            label: "😍",
            placeholder: "😍",
            required: true,
        },
    ],
},




// Restaurant form
{
    fieldType: FIELDS.select,
    property:'name',
    name: "sites",
    label: "Which site have you visited before?",
    placeholder: "Which site have you visited before?",
    dropDownList:TouristSite,
    required: true,
},
{
    fieldType: FIELDS.radioQuestion,
    groups:true,
    question:"Do you think the Government is doing enough to promote Tourism?",
    groupItems:[
        {
            name: "govPromos",
            label: "Yes",
            placeholder: "Yes",
            required: true,
        },
        {
            name: "govPromos",
            label: "No",
            placeholder: "No",
            required: true,
        }
    ],
},
{
    fieldType: FIELDS.radioQuestion,
    groups:true,
    question:"Will you visit a Tourist site in the next 12 months?",
    groupItems:[
        {
            name: "visit",
            label: "Yes",
            placeholder: "Yes",
            required: true,
        },
        {
            name: "visit",
            label: "No",
            placeholder: "No",
            required: true,
        }
    ],
},
{
    fieldType: FIELDS.radioQuestion,
    groups:true,
    question:"How will you rate overall service level in our restaurants?",
    groupItems:[
        {
            name: "serviceRating",
            label: "Terrible",
            placeholder: "Terrible",
            required: true,
        },
        {
            name: "serviceRating",
            label: "So so",
            placeholder: "So so",
            required: true,
        },
        {
            name: "serviceRating",
            label: "hmmmm",
            placeholder: "hmmmm",
            required: true,
        },
        {
            name: "serviceRating",
            label: "Okay",
            placeholder: "Okay",
            required: true,
        },
        {
            name: "serviceRating",
            label: "Great",
            placeholder: "Great",
            required: true,
        },
    ],
},  


{
    fieldType: FIELDS.radioEmoji,
    groups:true,
    question:"What do you think of the delivery charge?",
    // style:{display:"flex",justifyContent:"center", alignItems:"center"},
    groupItems:[
        {
            name: "deliveryCharge",
            label:"Okay",
            placeholder: "okay",
            required: true,
        },
        {
            name: "deliveryCharge",
            label: "Could be less",
            placeholder: "Could be less",
            required: true,
        },
        {
            name: "deliveryCharge",
            label: "High",
            placeholder: "High",
            required: true,
        },
        {
            name: "deliveryCharge",
            label: "Highway robbery",
            placeholder: "Highway robbery",
            required: true,
        },
        {
            name: "deliveryCharge",
            label:'Jesus is watching You (thief High)',
            placeholder: "esus is watching You (thief High)",
            required: true,
        },
       
    ],
},



handleOnSubmit = {(
    dataCollectedSoFar,
    data,
    field,
    fields,
    requiredFields,
    regexPatterns,
    )=>{
        this.props.dataCollector( 
            dataCollectedSoFar,
            data,
            field,
            fields,
            requiredFields,
            regexPatterns,
            )}
    }

    {
        fieldType: FIELDS.radioQuestion,
        groups:true,
        question:"Which Delivery Service did you use?",
        groupItems:[
            {
                name: "deliveryService",
                label: "Glovo",
                placeholder: "Glovo",
                required: true,
            },
            {
                name: "deliveryService",
                label: "Jumia",
                placeholder: "Jumia",
                required: true,
            },
            {
                name: "deliveryService",
                label: "Bolts Food",
                placeholder: "Bolts Food",
                required: true,
            },
            {
                name: "deliveryService",
                label: "Hubtel",
                placeholder: "Hubtel",
                required: true,
            },
            {
                name: "deliveryService",
                label: "Potbelly Inhouse",
                placeholder: "Hubtel",
                required: true,
            },
            {
                name: "deliveryService",
                label: "Others",
                placeholder: "Others",
                required: true,
            },
            
        ],
    },
    {
        fieldType: FIELDS.radioQuestion,
        groups:true,
        question:"Did the food arrive Intact?",
        groupItems:[
            {
                name: "intactDelivery",
                label: "Yes",
                placeholder: "Packaging Needs some improvement",
                required: true,
            },
            {
                name: "intactDelivery",
                label: "No",
                placeholder: "No",
                required: true,
            },
            {
                name: "intactDelivery",
                label: "Packaging Needs some improvement",
                placeholder: "Packaging Needs some improvement",
                required: true,
            }
        ],
    },
    {
        fieldType: FIELDS.radioQuestion,
        groups:true,
        question:"Was the Order Accurate?",
        groupItems:[
            {
                name: "orderAccuracy",
                label: "Yes",
                placeholder: "Yes",
                required: true,
            },
            {
                name: "orderAccuracy",
                label: "No",
                placeholder: "No",
                required: true,
            },
            {
                name: "orderAccuracy",
                label: "Missing Products",
                placeholder: "Missing products",
                required: true,
            },
            {
                name: "orderAccuracy",
                label: "Wrong Products",
                placeholder: "Wrong Products",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.radioEmoji,
        groups:true,
        question:"How satisfied were you with the quantity of Food ?",
        groupItems:[
            {
                name: "foodQuantity",
                label:"😡",
                placeholder: "😡",
                required: true,
            },
            {
                name: "foodQuantity",
                label: "☹️ ",
                placeholder: "😐",
                required: true,
            },
            {
                name: "foodQuantity",
                label: "😐",
                placeholder: "😐",
                required: true,
            },
            {
                name: "foodQuantity",
                label: "😊",
                placeholder: "😊",
                required: true,
            },
            {
                name: "foodQuantity",
                label: "😍",
                placeholder: "😍",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.radioEmoji,
        groups:true,
        question:"How satisfied were you with the Quality of Food ?",
        groupItems:[
            {
                name: "foodQuality",
                label:"😡",
                placeholder: "😡",
                required: true,
            },
            {
                name: "foodQuality",
                label: "☹️ ",
                placeholder: "😐",
                required: true,
            },
            {
                name: "foodQuality",
                label: "😐",
                placeholder: "😐",
                required: true,
            },
            {
                name: "foodQuality",
                label: "😊",
                placeholder: "😊",
                required: true,
            },
            {
                name: "foodQuality",
                label: "😍",
                placeholder: "😍",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.radioQuestion,
        groups:true,
        question:"How often do opt for Delivery ?",
        groupItems:[
            {
                name: "weeklyVisits",
                label: "Once a week",
                placeholder: "less than 3x",
                required: true,
            },
            {
                name: "weeklyVisits",
                label: "Twice a week",
                placeholder: "Twice a week",
                required: true,
            },
            {
                name: "weeklyVisits",
                label: "Once a month",
                placeholder: "Once a month",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.radioQuestion,
        groups:true,
        question:"Will you recommend us to a friend?",
        groupItems:[
            {
                name: "recommend", 
                label: "Yes",
                placeholder: "Yes",
                required: true,
            },
            {
                name: "recommend",
                label: "Maybe",
                placeholder: "Maybe",
                required: true,
            },
            {
                name: "recommend",
                label: "Hells No",
                placeholder: "Hells No",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.radioEmoji,
        groups:true,
        question:"What do you think of the Delivery Charge?",
        // style:{display:"flex",justifyContent:"center", alignItems:"center"},
        groupItems:[
            {
                name: "deliveryCharge",
                label:"Okay",
                placeholder: "okay",
                required: true,
            },
            {
                name: "deliveryCharge",
                label: "Could be less",
                placeholder: "Could be less",
                required: true,
            },
            {
                name: "deliveryCharge",
                label: "High",
                placeholder: "High",
                required: true,
            },
            {
                name: "deliveryCharge",
                label: "Highway robbery",
                placeholder: "Highway robbery",
                required: true,
            },
            {
                name: "deliveryCharge",
                label:'Jesus is watching You (thief High)',
                placeholder: "esus is watching You (thief High)",
                required: true,
            },
           
        ],
    },
    {
        fieldType: FIELDS.radioEmoji,
        groups:true,
        question:"How long did it take to arrive?",
        groupItems:[
            {
                name: "arrivalTime",
                label:"Under 30 minutes",
                placeholder: "Under 30 minutes",
                required: true,
            },
            {
                name: "arrivalTime",
                label:"Under 45 minutes",
                placeholder: "Under 45 minutes",
                required: true,
            },
            {
                name: "arrivalTime",
                label:"Over one hour",
                placeholder: "Over one hour",
                required: true,
            },
        ],
    },
    {
        fieldType: FIELDS.select,
        property:'name',
        name: "orderInfo",
        label: "What did you order?",
        placeholder: "What did you order?",
        dropDownList:FoodMenu,
        required: true,
    },
    {
        fieldType: FIELDS.select,
        property:'name',
        name: "menuFavorite",
        label: "What is your favorite food item on the menu?",
        placeholder: "What is your favourite on our menu?",
        dropDownList:FoodMenu,
        required: true,
        },
    
    {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Compared to other restaurants how will you rate us?",
            groupItems:[
                {
                    name: "rate",
                    label: "You Do All",
                    placeholder: "You Do All",
                    required: true,
                },
                {
                    name: "rate",
                    label: "Just Okay",
                    placeholder: "Just Okay,",
                    required: true,
                },
                {
                    name: "rate",
                    label: " Apuu",
                    placeholder: " Apuu,",
                    required: true,
                },
                {
                    name: "rate",
                    label: "You Suck",
                    placeholder: "You Suck ",
                    required: true,
                },
                
            ],
        },
        {
            fieldType: FIELDS.select,
            property:'name',
            name: "sites",
            label: "Which Tourist site have you visited before?",
            placeholder: "Which site have you visited before?",
            dropDownList:TouristSite,
            required: true,
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Do you think the Government is doing enough to promote Tourism?",
            groupItems:[
                {
                    name: "govPromos",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "govPromos",
                    label: "No",
                    placeholder: "No",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Will you visit a Tourist site in the next 12 months?",
            groupItems:[
                {
                    name: "visit",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "visit",
                    label: "No",
                    placeholder: "No",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How will you rate overall service level in our restaurants?",
            groupItems:[
                {
                    name: "serviceRating",
                    label: "Terrible",
                    placeholder: "Terrible",
                    required: true,
                },
                {
                    name: "serviceRating",
                    label: "So so",
                    placeholder: "So so",
                    required: true,
                },
                {
                    name: "serviceRating",
                    label: "hmmmm",
                    placeholder: "hmmmm",
                    required: true,
                },
                {
                    name: "serviceRating",
                    label: "Okay",
                    placeholder: "Okay",
                    required: true,
                },
                {
                    name: "serviceRating",
                    label: "Great",
                    placeholder: "Great",
                    required: true,
                },
            ],
        },   

        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How did you order?",
            name:'orderMeans',
            groupItems:[
                {
                    name: "orderMeans",
                    label: "Walk In",
                    placeholder: "Walk In",
                    required: true,
                },
                {
                    name: "orderMeans",
                    label: "Call Centre",
                    placeholder: "Call Centre",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            followUp:{
                followUpQuestion:'orderMeans',
                followUpAnswer:'Call Centre'
            },
            groups:true,
            question:"How was the courteousness of the agent?",
            groupItems:[
                {
                    name: "agentCourtesy",
                    label: "Yes",
                    placeholder: "Yes ",
                    required: true,
                },
                {
                    name: "agentCourtesy",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
                {
                    name: "agentCourtesy",
                    label: "Very Unprofessional",
                    placeholder: "Very Unprofessional",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            followUp:{
                followUpQuestion:"orderMeans",
                followUpAnswer:"Call Centre"
            },
            groups:true,
            question:"How was the courteousness of the agent?",
            groupItems:[
                {
                    name: "agentCourtesy",
                    label: "Yes",
                    placeholder: "Yes ",
                    required: true,
                },
                {
                    name: "agentCourtesy",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
                {
                    name: "agentCourtesy",
                    label: "Very Unprofessional",
                    placeholder: "Very Unprofessional",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            followUp:{
                followUpQuestion:'orderMeans',
                followUpAnswer:'Call Centre'
            },
            groups:true,
            question:"Did the agent adequately attend to your needs?",
            groupItems:[
                {
                    name: "agentAttend",
                    label: "Yes",
                    placeholder: "Yes ",
                    required: true,
                },
                {
                    name: "agentAttend",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
                {
                    name: "agentAttend",
                    label: "Could Use more Training",
                    placeholder: "Could Use more Training",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            followUp:{
                followUpQuestion:'orderMeans',
                followUpAnswer:'Call Centre'
            },
            groups:true,
            question:"How was the Voice Quality during the call",
            groupItems:[
                {
                    name: "voiceQuality",
                    label: "Good enough",
                    placeholder: "Good enough",
                    required: true,
                },
                {
                    name: "voiceQuality",
                    label: "Needs Improvement",
                    placeholder: "Needs Improvement",
                    required: true,
                },
                {
                    name: "voiceQuality",
                    label: "Terrible",
                    placeholder: "Terrible",
                    required: true,
                }
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            followUp:{
                followUpQuestion:'orderMeans',
                followUpAnswer:'Call Centre'
            },
            groups:true,
            question:"Did you have any issues getting through",
            groupItems:[
                {
                    name: "issuesGettingTrough",
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "issuesGettingTrough",
                    label: "No",
                    placeholder: "No",
                    required: true,
                },
            ],
        },
        
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Was the Order Accurate?",
            groupItems:[
                {
                    name: "accuracyOfOrder",
                    label:"Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "accuracyOfOrder",
                    label:"No",
                    placeholder: "No",
                    required: true,
                },
                {
                    name: "accuracyOfOrder",
                    label:"Missing products",
                    placeholder: "Missing products",
                    required: true,
                },
                {
                    name: "accuracyOfOrder",
                    label:"Wrong products",
                    placeholder: "Wrong products",
                    required: true,
                },
                
            ],
        },
        
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"How often do you opt for delivery ?",
            groupItems:[
                {
                    name: "weeklyVisits",
                    label: "Once a week",
                    placeholder: "less than 3x",
                    required: true,
                },
                {
                    name: "weeklyVisits",
                    label: "Twice a week",
                    placeholder: "Twice a week",
                    required: true,
                },
                {
                    name: "weeklyVisits",
                    label: "Once a month",
                    placeholder: "Once a month",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Will you recommend us to a friend?",
            groupItems:[
                {
                    name: "recommend", 
                    label: "Yes",
                    placeholder: "Yes",
                    required: true,
                },
                {
                    name: "recommend",
                    label: "Maybe",
                    placeholder: "Maybe",
                    required: true,
                },
                {
                    name: "recommend",
                    label: "Hells No",
                    placeholder: "Hells No",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"What do you think of the delivery charge?",
            // style:{display:"flex",justifyContent:"center", alignItems:"center"},
            groupItems:[
                {
                    name: "deliveryCharge",
                    label:"Okay",
                    placeholder: "okay",
                    required: true,
                },
                {
                    name: "deliveryCharge",
                    label: "Could be less",
                    placeholder: "Could be less",
                    required: true,
                },
                {
                    name: "deliveryCharge",
                    label: "High",
                    placeholder: "High",
                    required: true,
                },
                {
                    name: "deliveryCharge",
                    label: "Highway robbery",
                    placeholder: "Highway robbery",
                    required: true,
                },
                {
                    name: "deliveryCharge",
                    label:'Jesus is watching You (thief High)',
                    placeholder: "esus is watching You (thief High)",
                    required: true,
                },
               
            ],
        },
        {
            fieldType: FIELDS.radioEmoji,
            groups:true,
            question:"How long did it take to arrive?",
            groupItems:[
                {
                    name: "arrivalTime",
                    label:"Under 30 minutes",
                    placeholder: "Under 30 minutes",
                    required: true,
                },
                {
                    name: "arrivalTime",
                    label:"Under 45 minutes",
                    placeholder: "Under 45 minutes",
                    required: true,
                },
                {
                    name: "arrivalTime",
                    label:"Over one hour",
                    placeholder: "Over one hour",
                    required: true,
                },
            ],
        },
        {
            fieldType: FIELDS.select,
            property:'name',
            name: "orderInfo",
            label: "What did you order?",
            placeholder: "What did you order?",
            dropDownList:FoodMenu,
            required: true,
        },
        {
            fieldType: FIELDS.select,
            property:'name',
            name: "menuFavorite",
            label: "What is your favorite food item on the menu?",
            placeholder: "What is your favourite on our menu?",
            dropDownList:FoodMenu,
            required: true,
            },
        {
            fieldType: FIELDS.radioQuestion,
            groups:true,
            question:"Compared to other restaurants how will you rate us?",
            groupItems:[
                {
                    name: "rate",
                    label: "You Do All",
                    placeholder: "You Do All",
                    required: true,
                },
                {
                    name: "rate",
                    label: "Just Okay",
                    placeholder: "Just Okay,",
                    required: true,
                },
                {
                    name: "rate",
                    label: " Apuu",
                    placeholder: " Apuu,",
                    required: true,
                },
                {
                    name: "rate",
                    label: "You Suck",
                    placeholder: "You Suck ",
                    required: true,
                },
                
            ],
        },
        
            {
                fieldType: FIELDS.select,
                property:'name',
                name: "sites",
                label: "Which Tourist site have you visited before?",
                placeholder: "Which site have you visited before?",
                dropDownList:TouristSite,
                required: true,
            },
            {
                fieldType: FIELDS.radioQuestion,
                groups:true,
                question:"Do you think the Government is doing enough to promote tourism?",
                groupItems:[
                    {
                        name: "govPromos",
                        label: "Yes",
                        placeholder: "Yes",
                        required: true,
                    },
                    {
                        name: "govPromos",
                        label: "No",
                        placeholder: "No",
                        required: true,
                    }
                ],
            },
            {
                fieldType: FIELDS.radioQuestion,
                groups:true,
                question:"Will you visit a Tourist site in the next 12 months?",
                groupItems:[
                    {
                        name: "visit",
                        label: "Yes",
                        placeholder: "Yes",
                        required: true,
                    },
                    {
                        name: "visit",
                        label: "No",
                        placeholder: "No",
                        required: true,
                    }
                ],
            },
            {
                fieldType: FIELDS.radioQuestion,
                groups:true,
                question:"How will you rate overall service level in our restaurants?",
                groupItems:[
                    {
                        name: "serviceRating",
                        label: "Great",
                        placeholder: "Great",
                        required: true,
                    },
                    {
                        name: "serviceRating",
                        label: "Okay",
                        placeholder: "Okay",
                        required: true,
                    },
                    {
                        name: "serviceRating",
                        label: "hmmmm",
                        placeholder: "hmmmm",
                        required: true,
                    },
                    {
                        name: "serviceRating",
                        label: "So so",
                        placeholder: "So so",
                        required: true,
                    },
                    {
                        name: "serviceRating",
                        label: "Terrible",
                        placeholder: "Terrible",
                        required: true,
                    }, 
                ],
            }, 

            generateAnimes = () => {
                let myArr;
                let myValue = ['🤗','😎','❤️','😍','🥰','🍒','🎃','👑','🍎','🍊','🍋','🍉','🍇','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🥪','🫓','🥙','🧆','🌮','🌯','🫔','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🦪','🍚','🥮','🥧','🍦','🍧','🍨','🧁','🥧','🍰','🎂','🍮','🍫','🍿','🍩','🍪','🌰','🥜','🥛','🍵','☕️','🫖','🧃','🥤','🧋','🍺','🍻','🥂','🍷','🥃','🍷','🥂','🥃','🍸','🧉','🧉','🍾','🍽','🥣']     
               return  myValue.map((item,index) => {
                    // myArr = myValue
                   return <span className=''>{item}</span>
                })
            }



            import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, potbelly8, potbelly10, potbelly2, vertical } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';

const TouristSite = [
    {
        name:"Mole Park"
    },
    {
        name:"Kakum National Park"
    },
    {
        name:"Cape Coast Castle"
    },
    {
        name:"Elmina Castle"
    },
    {
        name:"National Museum"
    },
    {
        name:"Aburi Botanical Garden"
    },
    {
        name:"Mountain Afadjato "
    },
    {
        name:"W.E.B. Dubois Centre " 
    },
    {
        name:"Manhyia Palace " 
    },
    {
        name:"Boabeng Fiema Monkey Sanctuary" 
    },
    {
        name:"Kintampo Balls" 
    },
    {
        name:"Tango Hills"
    },
    {
        name:"Cape Three Points " 
    },
    {
        name:"Kumasi Zoo" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Paga Zenga Crocodile Pond" 
    },
    {
        name:"Xavi Bird Sanctuary " 
    },
    {
        name:"Labadi Beach" 
    },
    {
        name:"Lake Bosomtwe" 
    },
    {
        name:"Wli Waterfalls" 
    },
    {
        name:"Lakeside Marina Park" 
    },
    {
        name:"The Manhyia Palace" 
    },
    {
        name:"Kwame Nkrumah Memorial Park and Mausoleum" 
    },
    {
        name:"Boti Falls" 
    },
    {
        name:"St Agustine College " 
    },
]
const FoodMenu = [
    {
        name:"Chicken Wings"
    },
    {
        name:"Pizza"
    },
    {
        name:"Burgers"
    },
    {
        name:"Meatballs"
    },
    {
        name:"BBQ Ribs"
    },
    {
        name:"Tacos"
    },
    {
        name:"Pasta"
    },
    {
        name:"Asian Fusion" 
    },
    {
        name:"Hotdogs" 
    },
    {
        name:"Fish and Chips" 
    },
    {
        name:"Full Chicken" 
    },
    {
        name:"Steaks"
    },
    {
        name:"Seafood" 
    },
    {
        name:"Salad" 
    },
    {
        name:"Breakfast" 
    },
    {
        name:"Others" 
    },
]
class DineInForm2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        console.log(data)
        let institution = this.props.match.params.institution
        delete data.undefined;
        let myData =  convertToJson(data)
        // let Name = localStorageGet('institution')
        console.log(myData)
        this.props.history.push(`/potbelly/forms/options/dine-in/3`)
        // this.props.history.push(ALL_URLS.sent)
        completed()
    }
    generateAnimes = () => {
        let myArr;
        let myValue = ['🤗','😎','❤️','😍','🥰','🍒','🎃','👑','🍎','🍊','🍋','🍉','🍇','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭','🍔','🍟','🥪','🫓','🥙','🧆','🌮','🌯','🫔','🫕','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🦪','🍚','🥮','🥧','🍦','🍧','🍨','🧁','🥧','🍰','🎂','🍮','🍫','🍿','🍩','🍪','🌰','🥜','🥛','🍵','☕️','🫖','🧃','🥤','🧋','🍺','🍻','🥂','🍷','🥃','🍷','🥂','🥃','🍸','🧉','🧉','🍾','🍽','🥣']     
       return  myValue.map((item,index) => {
            // myArr = myValue
           return <span className=''>{item}</span>
        })
    }
    render() {
       const followUpTo = {
            slayQueen:{
                followUpQuestion:'slayQueen',
                followUpAnswer:'Slay queen'
            },
            ordinaryCitizen:{
                followUpQuestion:'slayQueen',
                followUpAnswer:'Ordinary Citizen'
            }
        } 
        const innerWidth = getWindowWidth()
        return (
            <div style={{backgroundImage:`url(${potbelly2})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Submit'
                    fields = {[
                        {
                            fieldType: FIELDS.imageBanner,
                            // title: "P🥗T BELLY F🥘RM",
                            title: "Dine-in service",
                            name:"banner",
                            regexPattern:'#^23*&',
                            subtitle:"Select the service you use often",
                            image: potbelly,
                        },
                        {
                            fieldType:FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            required: true,
                            question:"How Long did you have to wait for your food?",
                            // style:{display:"flex",justifyContent:"center", alignItems:"center"},
                            groupItems:[
                                {
                                    name: "waiteTime",
                                    label:"Under 10 Mins",
                                    placeholder: "Under 10 Mins",
                                },
                                {
                                    name: "waiteTime",
                                    label:"20 to 30 Mins",
                                    placeholder: "20 to 30 Mins",
                                },
                                {
                                    name: "waiteTime",
                                    label:"Over 30 Mins",
                                    placeholder: "20 to 30 Mins",
                                },
                               
                               
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"How many times did the wait staff stop by your table?",
                            groupItems:[
                                {
                                    name: "waitTableStops",
                                    label: "At Least Twice",
                                    placeholder: "At Least Twice ",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "More than Twice",
                                    placeholder: "More than Twice",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "Enough",
                                    placeholder: "Enough",
                                },
                                {
                                    name: "waitTableStops",
                                    label: "Not Enough ",
                                    placeholder: "Not Enough h",
                                },
                                
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            required: true,
                            question:"Was this your first time?",
                            groupItems:[
                                {
                                    name: "firstVisit",
                                    label: "Yes",
                                    placeholder: "Yes",
                                },
                                {
                                    name: "firstVisit",
                                    label: "No",
                                    placeholder: "No",
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"How often do you visit a year?",
                            groupItems:[
                                {
                                    name: "yearlyVisits",
                                    label: "less than 3x",
                                    placeholder: "less than 3x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "3x",
                                    placeholder: "3x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "4x",
                                    placeholder: "4x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "5x",
                                    placeholder: "5x",
                                },
                                {
                                    name: "yearlyVisits",
                                    label: "More than 5x",
                                    placeholder: "More than 5x",
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            required: true,
                            groups:true,
                            question:"Will you recommend us to a friend?",
                            groupItems:[
                                {
                                    name: "recommend", 
                                    label: "Definitely",
                                    placeholder: "Definitely",
                                },
                                {
                                    name: "recommend",
                                    label: "Maybe",
                                    placeholder: "Maybe",
                                },
                                {
                                    name: "recommend",
                                    label: "No",
                                    placeholder: "No",
                                },
                            ],
                        },
                       
                ]}
                />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DineInForm2));



import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import { randomImages } from '../dummydata/dummyData';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth, localStorageSave } from '../contants/generalFunctions';
import { ALL_URLS } from '../contants/urls';
import { REGEX_PATTERNS } from '../contants/generalContants';
import { COUNTRY_DIAL_CODES, foood2, potbelly2, vertical } from '../contants/uiConstants';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';
const TouristSite = [
    {
        name:"Mole Park"
    },
    {
        name:"Kakum National Park"
    },
    {
        name:"Cape Coast Castle"
    },
    {
        name:"Elmina Castle"
    },
    {
        name:"National Museum"
    },
    {
        name:"Aburi Botanical Garden"
    },
    {
        name:"Mountain Afadjato "
    },
    {
        name:"W.E.B. Dubois Centre " 
    },
    {
        name:"Manhyia Palace " 
    },
    {
        name:"Boabeng Fiema Monkey Sanctuary" 
    },
    {
        name:"Kintampo Balls" 
    },
    {
        name:"Tango Hills"
    },
    {
        name:"Cape Three Points " 
    },
    {
        name:"Kumasi Zoo" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Paga Zenga Crocodile Pond" 
    },
    {
        name:"Xavi Bird Sanctuary " 
    },
    {
        name:"Labadi Beach" 
    },
    {
        name:"Lake Bosomtwe" 
    },
    {
        name:"Wli Waterfalls" 
    },
    {
        name:"Lakeside Marina Park" 
    },
    {
        name:"The Manhyia Palace" 
    },
    {
        name:"Kwame Nkrumah Memorial Park and Mausoleum" 
    },
    {
        name:"Boti Falls" 
    },
    {
        name:"St Agustine College " 
    },
]
const FoodMenu = [
    {
        name:"Chicken Wings"
    },
    {
        name:"Pizza"
    },
    {
        name:"Burgers"
    },
    {
        name:"Meatballs"
    },
    {
        name:"BBQ Ribs"
    },
    {
        name:"Tacos"
    },
    {
        name:"Pasta"
    },
    {
        name:"Asian Fusion" 
    },
    {
        name:"Hotdogs" 
    },
    {
        name:"Fish and Chips" 
    },
    {
        name:"Full Chicken" 
    },
    {
        name:"Steaks"
    },
    {
        name:"Seafood" 
    },
    {
        name:"Salad" 
    },
    {
        name:"Breakfast" 
    },
    {
        name:"Others" 
    },
]
class DeliveryForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,field,fields) => {
        let institution = this.props.match.params.institution
        delete data.undefined;
        let myData =  convertToJson(data)
        this.props.history.push(`/potbelly/forms/options/delivery/2`)
    }
   
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly2})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
                <div className={`${innerWidth<800?'width-100-cent':'width-70-cent'} nate-white-more-partial-bg elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Next'
                    fields = {[
                   
                    {
                        fieldType: FIELDS.imageBanner,
                        vertical:vertical,
                        // title: "P🥗T BELLY F🥘RM",
                        title: "Delivery Service",
                        name:"banner",
                        regexPattern:'#^23*&',
                        subtitle:"",
                        image: potbelly,
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        required: true,
                        groups:true,
                        question:"Which Delivery Service did you use?",
                        groupItems:[
                            {
                                name: "deliveryService",
                                label: "Glovo",
                                placeholder: "Glovo",
                            },
                            {
                                name: "deliveryService",
                                label: "Jumia",
                                placeholder: "Jumia",
                            },
                            {
                                name: "deliveryService",
                                label: "Bolts Food",
                                placeholder: "Bolts Food",
                            },
                            {
                                name: "deliveryService",
                                label: "Hubtel",
                                placeholder: "Hubtel",
                            },
                            {
                                name: "deliveryService",
                                label: "Potbelly Inhouse",
                                placeholder: "Hubtel",
                            },
                            {
                                name: "deliveryService",
                                label: "Others",
                                placeholder: "Others",
                            },
                            
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        groups:true,
                        required: true,
                        question:"Did the food arrive Intact?",
                        groupItems:[
                            {
                                name: "intactDelivery",
                                label: "Yes",
                                placeholder: "Packaging Needs some improvement",
                            },
                            {
                                name: "intactDelivery",
                                label: "No",
                                placeholder: "No",
                            },
                            {
                                name: "intactDelivery",
                                label: "Packaging Needs some improvement",
                                placeholder: "Packaging Needs some improvement",
                            }
                        ],
                    },
                    {
                        fieldType: FIELDS.radioQuestion,
                        vertical:vertical,
                        required: true,
                        groups:true,
                        question:"Was the Order Accurate?",
                        groupItems:[
                            {
                                name: "orderAccuracy",
                                label: "Yes",
                                placeholder: "Yes",
                            },
                            {
                                name: "orderAccuracy",
                                label: "No",
                                placeholder: "No",
                            },
                            {
                                name: "orderAccuracy",
                                label: "Missing Products",
                                placeholder: "Missing products",
                            },
                            {
                                name: "orderAccuracy",
                                label: "Wrong Products",
                                placeholder: "Wrong Products",
                            },
                        ],
                    },
                    
                ]}
                
                />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeliveryForm));


// console.log(e.target.selectedOptions)
    //    let vals = []
    var sel = e.target.options;
    //     for (var i=0, n=sel.options.length;i<n;i++) { // looping over the options
    //       if (sel.options[i].value) vals.push(sel.options[i].value);
    //     }
    //     console.log(vals)

  // let  mysayUrl = URL_END_POINTS.SUBMIT_ANSWERS
    // let  luxcomUrlGet = "https://luxcom-web-api.herokuapp.com/api/reservation/initial/" 
    // let  luxcomUrlPost2 = "https://luxcom-web-api.herokuapp.com/api/auth/admin-login/" 
    // let  luxcomUrlPost = "https://luxcom-web-api.herokuapp.com/api/reservation/create/room/" 
    // let  localUrl = "https://f846-197-251-220-146.ngrok.io/delivery/save" 
    // let  localUrl2 = "https://db4c-197-251-220-146.ngrok.io/test" 
    // let  localUrl23= "https://1631-197-251-220-146.ngrok.io/test-web-app/PostData" 
    let convertUrlEncodedToObject = (string) => {
        // let decoded = decodeURI(string)
        let decoded = decodeURIComponent(string)
        let splited = decoded.replaceAll('=',':').replaceAll('+',' ').split('&')
        // let splited2 = spli.replaceAll('=',':')
        console.log(splited)
    }


     // const convertUrlEncodedToObject = (string) => {
            //     let firstSplit = string.split('&');
            //     firstSplit.map(())

            // }
            // let dataNow = convertToUrlEncoded(dataToString2)
            // var decodedData = decodeURIComponent(dataNow);
            // var jsonObject = JSON.parse(decodedData);
            // console.log(decodedData );
            // console.log(dataNow)
            // convertToUrlEncoded(dataNow)
            // fetch(localUrl2, { 
            //     method: 'post', 
            //     headers: new Headers({
            //         'content-Type': 'application/x-www-form-urlencoded'
                    // 'content-Type': 'application/json',
                    // 'access-Control-Allow-Origin': '*',
                    // mode:'no-cors'
            //     }), 
            //     body: dataNow
            // })
            // .then(
            //     (result) => {
            //         console.log(result)
            //     },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            //     (error) => {
            //         console.log(error)
            //     }
            // )
            // var xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = function() {
            //     if (this.readyState == 4 && this.status == 200) {
            //     // Typical action to be performed when the document is ready:
            //     document.getElementById("demo").innerHTML = xhttp.responseText;
            //     }
            // };
            // xhttp.open("GET", "filename", true);
            // xhttp.send();




// impor





import React, { Component } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { PAGE, PAGES, fontFamily5, fontFamily3 } from '../contants/uiConstants';
import NewAlerts from './new_alerts/NewAlerts';
import ProcessingAlerts from './processing_alerts/ProcessingAlerts';
import ResolvedAlerts from './resolved_alerts/ResolvedAlerts';
import NavbarAlt3 from '../component_bag/NavbarAlt3';
import { Dashboard } from '@mui/icons-material';
import NavbarAlt2 from '../component_bag/NavbarAlt2';

class FacilityAdmin extends Component {
    constructor(props){
        super(props)
        this.state={
            activePage:'Dashboard'
        }
    }
    ejectSideNavItems = () => {
        return 
    }
    changePage = (page) => {
        console.log(page)
        this.setState({activePage:page.title})
        // this.props.history.push(`${page.url}`)
    }
    getSubPage = () => {
        switch (this.state.activePage) {
            case PAGES[0].title:
                return <NewAlerts/>
            case PAGES[1].title:
                return <ProcessingAlerts/>
            case PAGES[2].title:
                return <ResolvedAlerts/>
            default:
                break;
        }
    }
    componentDidMount(){
       const page = this.props.match.url
        switch (page) {
            case PAGES[0].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[1].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[2].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            default:
                break;
        }
        console.log(page)
    }
    render() {
        const myfontFamly = fontFamily5
        const {activePage} = this.state;
        return (
            <div className='width-100-cent height-100-cent f-column nate-white-bg j-start'>
                <NavbarAlt2 style={{borderRadius:"", borderBottom:"1px solid #F7F7F7"}} title1={'MTN Ghana'} title2={'Achimota Branch'}/>
                <div className='width-100-cent height-100-cent j-start '>
                    <div className='min-width-320 d-flex f-column j-center a-start height-100-cent  nate-white-bg'>
                        <div className='width-100-cent height-100 padding-l-20 padding-t-20'>
                            {/* <span className='font-1-2-em nate-grey-text'>Alerts Page </span> */}
                        </div>
                        {/* side buttons container */}
                        <div className='width-100-cent height-100-cent f-column a-center'>
                        <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.dashboard?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent'>
                                    <Dashboard style={{ color:"#2295FA"}}/>
                                    <span style={{marginLeft:10, color:"#2295FA",fontWeight:300, fontFamily:fontFamily3}}>Dashboard</span>
                                </span>
                                <div style={{color:"#2295FA", backgroundColor:"rgb(34 149 250 / 21%)"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    11
                                </div>
                            </div>
                            <div 
                                onClick = {() => {this.changePage(PAGES[1])}} 
                                style={{borderRadius:20, cursor:"pointer",backgroundColor:`${activePage===PAGE.awaiting?'aliceblue':''}`,}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent '>
                                    <CachedIcon style={{ color:"#A2D920"}}/>
                                    <span style={{marginLeft:10, color:"#A2D920",fontWeight:300, fontFamily:fontFamily3}}>Awaiting Approval</span>
                                </span>
                                <div style={{color:"#A2D920", backgroundColor:"rgb(162 217 32 / 28%)"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    23
                                </div>
                            </div>
                            {/* <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.new?'aliceblue':''}`}} 
                                className='width-80-cent margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent '>
                                    <ErrorOutlineIcon style={{ color:"#E11717"}}/>
                                    <span style={{marginLeft:10,color:"#FF0F0F"}}>Awaiting Approval</span>
                                </span>
                                <div style={{color:"#E91212", backgroundColor:"#FEB8B8"}} 
                                className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    15
                                </div>
                            </div> */}
                            
                            <div 
                                onClick = {() => {this.changePage(PAGES[2])}}
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.approved?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fastheight-60 padding-10  j-space-between a-center curved-corners-more'
                            >
                                <span className='a-center height-100-cent '>
                                    <CheckCircleOutlineIcon style={{ color:"#078113"}}/>
                                    <span style={{marginLeft:10, color:"#399A42",fontWeight:300, fontFamily:fontFamily3}}>Approved</span>
                                </span>
                                <div style={{color:"#078113", backgroundColor:"#C8E3CB"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    08
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div style={{minHeight:"100%"}} className='width-100-cent height-90-cent min-height-90-cent j-start f-column nate-white-bg overflow-hidden'>
                        {this.getSubPage()}
                        {/* <div className='height-20-cent width-100-cent nate-blue-bg'>jj</div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default FacilityAdmin;