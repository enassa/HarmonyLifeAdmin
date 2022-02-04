import React, { Component } from 'react';
import style from '../css/statuscard.module.css'
import { randomImages } from '../css/dummydata/dummyData';
import { Add, Apartment, Autorenew, BrokenImage } from '@material-ui/icons';
import { cssModules } from '../contants/generalFunctions';
import { applyToInstitution } from '../store/actions/InstitutionActions';
import { connect } from 'react-redux';
import { openProjectStatus } from '../store/actions/ProjectActions';

let styles = ''
let mod = ''
class StatusCard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    mod = cssModules(style)
    getPendingComponent = () => {
        return <div className={style["main-container"]}>
                    <div style={this.props.style} className={mod("status-card anime-zoom")}>
                        <div style={{backgroundImage:`url(${
                                this.props.imageSrc?this.props.imageSrc:null
                                // randomImages
                            })`, backgroundColor:"white", color:"grey",display:"flex", flexFlow:"column", justifyContent:"center",}}  
                            className={style["image-container"]}
                        >
                            {!this.props.imageSrc?<BrokenImage style={{width:200, height:200, alignSelf:"center"}}/>:null}
                        </div>
                        <div  className={style["add-main-container"]}>
                            <div  className={style["add-container"]} >
                                <span className={style["add-text-container"]}>
                                {this.props.cardData?this.props.cardData.title:null}
                                </span>
                                <span style={{backgroundColor:"grey"}} className={mod('add-button-container anime-rotate')}>
                                        <Autorenew/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.props.cardData?this.props.cardData.Institution:"Unknown Institution"}
                    </div>
            </div>
    }
    getJoinedComponenet = () => {
        return  <div className={style["main-container"]} onClick={() => {this.props.openStatus(this.props.cardData)}}>
                    <div style={this.props.style} className={mod("status-card anime-zoom")}>
                        {/* <div style={{backgroundImage:`url(${randomImages}/200x116)`,}} className={style["image-container"]}>
                            {!this.props.cardData?<BrokenImage style={{width:200, height:200, alignSelf:"center"}}/>:null}
                        </div> */}
                        <div style={{backgroundImage:`url(${this.props.cardData.image})`,}} className={style["image-container"]}>
                            {!this.props.cardData?<BrokenImage style={{width:200, height:200, alignSelf:"center"}}/>:null}
                        </div>
                        {/* <div style={{backgroundImage:`url(${this.props.cardData.url})`,}} className={style["image-container"]}>
                            {!this.props.cardData?<BrokenImage style={{width:200, height:200, alignSelf:"center"}}/>:null}
                        </div> */}
                                <div 
                                    className={style["text-container"]} >
                                    {this.props.cardData?`${this.props.cardData.projectName.slice(0,5)}...`:"Unknown"}
                                </div>
                    </div>
                    <div>
                        {this.props.cardData?this.props.cardData.Institution:"Unknown Institution"}
                    </div>
        </div>
    
    }
    getNotJoined = () => {
        return <div className={style["main-container"]}>
                    <div style={this.props.style} className={mod("status-card anime-zoom")}>
                        <div style={{backgroundImage:`url(${
                                this.props.imageSrc?this.props.imageSrc:null
                                // randomImages
                            })`, backgroundColor:"white", color:"grey",display:"flex", flexFlow:"column", justifyContent:"center",}}  
                            className={style["image-container"]}
                        >
                            {!this.props.imageSrc?<Apartment style={{width:200, height:200, alignSelf:"center"}}/>:null}
                        </div>
                        <div  className={style["add-main-container"]}>
                            <div  className={style["add-container"]} >
                                <span className={style["add-text-container"]}>
                                {this.props.cardData?this.props.cardData.Nickname:null}
                                </span>
                                <span 
                                    onClick = {()=>{this.props.applyToThisInstitution(this.props.institution)}} 
                                    className={style["add-button-container"]}>
                                        <Add/>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div>
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
    console.log()
    return {
        applyToThisInstitution:(institution) => dispatch(applyToInstitution(institution)),
        openStatus:(status) => dispatch(openProjectStatus(status))
  }
}
export default connect(null,mapDispatchToProps)(StatusCard);

