import React, { Component } from 'react'
import SearchBar from './SearchBar';
import { fontFamily3 } from '../contants/uiConstants';
import PopUpButton from './PopUpButton';
import OneColumnTable from './OneColumnTable';
import OverlayLoader from './OverlayLoader';
import MyModal from './MyModal';

export default class OverlayWithChild extends Component {
    constructor(props){
        super(props)
        this.state = {
            allData:[],
            
        }
    }
        
    controlDisplay = (e) => {
        e.preventDefault(e)
        this.props.handleOverlayClick (e)
    }
   
    render() {
        return (
            <div className='width-100-cent height-100-cent j-center a-center above-all left-0 top-0 position-fixed '>
                <div onClick = {(e) =>this.controlDisplay(e) }
                    className='width-100-cent height-100-cent a-center j-center  top-0 left-0 nate-black-more-partial-bg position-fixed'
                >
                </div>
                {this.props.children}
            </div>
        )
    }
}
