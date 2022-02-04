import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ImageHolder extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        
    }


    render() {
        const {imageSrc} =  this.props;
       const myClasses={
            mainContainer:'d-flex fill-container f-row',
            imageSize:"fill-container"
        }
        const styles={
            mainContainer:{
                background: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }
        }
        return (
            <div className={myClasses.mainContainer} style={styles.mainContainer}>
                {/* <img className={myClasses.imageSize} alt="" src={imageSrc}/> */}
           </div>
        );
    }
}

ImageHolder.propTypes = {

};

;