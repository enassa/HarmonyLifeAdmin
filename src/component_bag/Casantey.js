import React, { Component } from 'react'
import { getTodaysDateWithoutDash } from '../contants/generalFunctions'
import { fontFamily3, fontFamily5 } from '../contants/uiConstants';

export default class Casantey extends Component {
    render() {
        return (
            <div className='position-fixed bottom-20  j-center f-column a-center' style={{fontFamily:fontFamily5,fontSize:18}}>
                <div >Powered by <a href={'//www.casantey.com'} target='_blank' style={{color:"#01B000"}} className='nate-pink-text'>Casantey</a></div>
                <div style={{fontSize:10}}  className=''> Copyright &#169; 2022 |v{getTodaysDateWithoutDash()}131820</div>
            </div>
        )
    }
}
