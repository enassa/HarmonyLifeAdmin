import { AccessTime } from '@material-ui/icons';
import React, { Component, useState } from 'react';
import { randomImages } from '../css/dummydata/dummyData';
import style from '../css/mediacardgallerystyle.module.css'
import { fontFamily3 } from '../contants/uiConstants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openNews } from '../store/actions/NewsActions';
import { ALL_URLS } from '../contants/urls';

const MediaCardGalleryStyle = (props) => {
    const {cardData} = props;
    const myString = cardData?cardData.title:''
    const secondString = cardData?cardData.body:''
    const date= cardData?cardData.date:''
    const organizationName = cardData?cardData.organizationName:''


const [hovered, setHovered] = useState(false)
    // const setHovered = useState()
    // console.log(cardData?cardData.id:null)
    const styles = {
        outerStyle:{
            cursor:"pointer",
            ...props.style,
        },
        imageContainer:{
            height:"200px",
            backgroundImage:`url(${cardData?cardData.image:null})`,
            ...props.imageContainerStyles
        },
        headerText:{
            fontWeight: "700",
            cursor: "pointer",
            fontFamily:`${fontFamily3}`,
            textDecoration:`${hovered?"underline":'none'}`,
            color:`${hovered?'#1a0dab':'black'} `,            
            ...props.headerStyles
        },
        subHeaderStyles:{
            textDecoration:`${hovered?"underline":'none'}`,
            color:`${hovered?'#1a0dab':'black'} `, 
            fontFamily:`${fontFamily3}`,
            fontWeight:200,    
            ...props.subHeaderStyles
        },
        descriptionStyles:{
            textDecoration:`${hovered?"underline":'none'}`,
            color:`${hovered?'#1a0dab':'black'} `, 
            fontFamily:`${fontFamily3}`,
            fontWeight:400,    
            ...props.descriptionStyles
        }
    }
   
    // const myString = 'Boris Johnson and Joe Biden in the Oval Office on 21 September 2021 Biden plays down chances of UK-US trade deal'
    // const secondString = 'The US presidents comments come as he meets Boris Johnson for talks in the White House'
        return (
            <div 
                onMouseOut= {()=>setHovered(false)}  
                onMouseOver = {()=>setHovered(true)} 
                className='j-center nate-white-bg padding-20 elevated-blend'
                onClick = {() => {
                    props.openNews(cardData)
                    props.history.push(`${ALL_URLS.memberListNews}/${cardData.id}`)

                }}

            >
                <div style={styles.outerStyle} className={style['main-container']}>
                    <div style={styles.imageContainer} className={style['image-container']}>
                    </div>
                    <div style={styles.headerText} className={style['header-text']}>
                        {
                            myString.length > 112
                            ?`${myString.slice(0,112)}...`
                            :myString
                        }
                    </div>
                    <div style={styles.subHeaderStyles} className={style['sub-header']}>
                        {
                          secondString.slice(0,87) + "..."
                        }
                        {/* <a href="#">..read more</a> */}
                    </div>
                    <div style={styles.descriptionStyles} className={style['descritption-styles']}>
                        <span>
                            <AccessTime style={{marginRight:"10px"}}/>
                            <span>{date}</span>
                        </span>
                        <span>&nbsp;-</span>
                        <span className={style['type-container']}>{organizationName}</span>
                        
                    </div>
                </div>
            </div>
        );
}

const mapDispatchToProps = (dispatch) => {
    return {
        openNews: (news) => dispatch(openNews(news)),
  }
}
const mapStateToProps = (state) => {
    return {
        projects: state.projects.openedProjects,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MediaCardGalleryStyle));
