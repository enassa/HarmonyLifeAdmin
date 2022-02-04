import React, { Component } from 'react';
import { randomImages } from '../dummydata/dummyData';
import BlockIcon from '@mui/icons-material/Block';
import style from '../css/horizontalscroller.module.css'
import { Add, Group } from '@mui/icons-material';
import { fontFamily3, fontFamily5, letteringColor6 } from '../contants/uiConstants';
class HorizontalScroller extends Component {
    render() {
        const styles={
            mainContainer:{
                height:300,
                ...this.props.style
            }
        }
        return (
            <div style={styles.mainContainer} className={style["scrolling-wrapper"]}>
                <div className={style["scrolling-wrapper-inner"]}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HorizontalScroller;
