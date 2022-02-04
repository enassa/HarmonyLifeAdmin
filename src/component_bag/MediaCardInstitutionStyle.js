import React, { Component } from 'react';
import style from '../css/mediacardinstitutionstyle.module.css'
import { randomImages } from '../css/dummydata/dummyData';
import { Add, Apartment, Autorenew } from '@material-ui/icons';
import { cssModules } from '../contants/generalFunctions';
import { applyToInstitution, openInstitution } from '../store/actions/InstitutionActions';
import { connect } from 'react-redux';
import { ALL_URLS } from '../contants/urls';
import { withRouter } from 'react-router-dom';
import { fontFamily3, fontFamily5, letteringColor6, fontFamily6, letteringColor5 } from '../contants/uiConstants';

let styles = ''
let mod = ''
class MediaCardInstitutionStyle extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    mod = cssModules(style)
    getPendingComponent = () => {
        const {cardData} = this.props
        return <div  className={mod("main-container curved-corners  a-center")}>
                    <div style={this.props.style} className={mod("status-card anime-zoom curved-corners")}>
                        <div style={{color:"grey",display:"flex", flexFlow:"column", justifyContent:"center",}}  
                            className={mod("image-container elevated-blend curved-corners d-flex j-center a-center")}
                        >
                            {cardData.image?<div style={{backgroundImage:`url('${ cardData.image?cardData.image:null  }')`}} className='height-90-cent fit-bg width-90-cent'></div>:<Apartment style={{width:200, height:200, alignSelf:"center"}}/>}
                        </div>
                        <div  className={style["add-main-container"]}>
                            <div  className={style["add-container"]} >
                                <span style={{textAlign:"center", color:"#737373", fontFamily:`${fontFamily3}`, fontWeight:400,}} className={style["add-text-container"]}>
                                {/* {this.props.cardData?this.props.cardData.Nickname:null} */}
                                </span>
                                <span style={{backgroundColor:"grey"}} className={mod('add-button-container anime-rotate')}>
                                        <Autorenew/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:"center", color:letteringColor6, fontFamily:`${fontFamily5}`, fontWeight:400,}}>
                        {this.props.cardData?this.props.cardData.Institution:"Unknown Institution"}
                    </div>
            </div>
    }
    getJoinedComponenet = () => {
        const {cardData} = this.props
        return  <div className={mod("main-container")}>
                    <div style={this.props.style} className={mod("status-card anime-zoom ")}>
                                <div 
                                    className={mod('image-container fit-bg  elevated-blend curved-corners j-center a-center')}
                                    // style={{backgroundImage:`url('${cardData.image}')`,display:"flex", flexFlow:"column", background:"white", justifyContent:"center",}} 
                                    style={{backgroundColor:"white", backgroundSize:"contain", display:"flex", flexFlow:"column",justifyContent:"center",}}
                                >
                            {cardData.image?<div style={{backgroundImage:`url('${ cardData.image?cardData.image:null  }')`}} className='height-90-cent fit-bg width-90-cent'></div>:<Apartment style={{width:200, height:200, alignSelf:"center"}}/>}
                                </div>
                                <div 
                                    className={style["text-container"]} 
                                    style={{textAlign:"center", color:"#737373", fontFamily:`${fontFamily3}`, fontWeight:400,}}
                                    onClick = {() => {
                                        this.props.openInstitution(cardData)
                                        this.props.history.push(`${ALL_URLS.memberListInstitutions}/${this.props.id}`)
                                    }}
                                >
                                    {/* {this.props.cardData?this.props.cardData.Nickname:"Unknown Institution"} */}
                                </div>
                    </div>
                    <div style={{textAlign:"center", color:letteringColor6, fontFamily:`${fontFamily5}`, fontWeight:400,}}>
                        {this.props.cardData?this.props.cardData.Institution:"Unknown Institution"}
                    </div>
        </div>
    
    }
    getNotJoined = () => {
        const {cardData} = this.props
        return <div className={style["main-container"]}>
                    <div style={this.props.style} className={mod("status-card anime-zoom ")}>
                        <div style={{ backgroundColor:"white", color:"grey",display:"flex", flexFlow:"column", justifyContent:"center",}}  
                            className={mod("image-container curved-corners elevated-blend  j-center a-center")}
                        >
                            {cardData.image?<div style={{backgroundImage:`url('${ cardData.image?cardData.image:null  }')`}} className='height-90-cent curved-corners fit-bg width-90-cent'></div>:<Apartment style={{width:200, height:200, alignSelf:"center"}}/>}
                        </div>
                        <div  className={style["add-main-container"]}>
                            <div  className={style["add-container"]} >
                                <span style={{textAlign:"center", color:"#737373", fontFamily:`${fontFamily3}`, fontWeight:400,}} className={style["add-text-container"]}>
                                    {/* {this.props.cardData?this.props.cardData.Nickname:null} */}
                                </span>
                                <span 
                                    onClick = {()=>{this.props.applyToThisInstitution(this.props.institution)}} 
                                    className={style["add-button-container"]}>
                                        <Add/>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:"center", color:letteringColor6, fontFamily:`${fontFamily5}`, fontWeight:400,}}>
                        {this.props.cardData?this.props.cardData.Institution:"Unknown Institution"}
                    </div>
        </div>
    }
    render() {
        mod = cssModules(style)
       styles = {
            outerStyles:{
                ...this.props.style,
            }
        }
        return !this.props.notJoined
        ?this.getJoinedComponenet()
        :this.props.pending
        ?this.getPendingComponent()
        :this.getNotJoined()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        applyToThisInstitution:(institution) => dispatch(applyToInstitution(institution)),
        openInstitution:(institution) => dispatch(openInstitution(institution))

  }
}
export default connect(null,mapDispatchToProps)(withRouter(MediaCardInstitutionStyle));
