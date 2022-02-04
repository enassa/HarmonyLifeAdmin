import React, { Component } from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import styles from "../css/infocard.module.css"
import { cssModules } from '../contants/generalFunctions';
import Count from './Count';
import { fontFamily3 } from '../contants/uiConstants';
class InfoCard2 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
   
    render() {
        const {contents, outerStyles, descStyles, iconStyles, valueStyles} = this.props
        const mod = cssModules(styles)
        const data =  {
            id: 20,
            label: "",
            number: contents.value,
            duration: "2"
        }
        return (
            <div style={outerStyles} className={mod("workpsace-cards")}>
                {/* <span style={iconStyles} className={mod("workspace-card-icon card-icon-1")}>
                {contents.icon}
                </span> */}
                <span className={mod("workspace-card-description")}>
                    <span style={{...valueStyles,fontSize:40,display:"flex", fontWeight: 300, justifyContent:"center",fontFamily:"sans-serif"}} className={mod("card-numbers")}>
                        <Count key={data.id} data={data}/>%
                        {/* {contents.value} */}
                        {/* 100000 */}
                    </span>
                    <span style={{...descStyles,display:"flex", justifyContent:"center",fontFamily:fontFamily3,fontSize:20, fontWeight: 300}} >{contents.desc}</span>
                </span>
          </div>
        );
    }
}

export default InfoCard2;
