import React from 'react';
import { Carousel } from 'react-bootstrap';
import DescriptionCard from './DescriptionCard';
import almamaterLogo from "../resources/images/logo.png"
import SimpleButton from "./PopUpButton";


const  outerStyle = {
    // defaults styles on top here
    height:"100%",
}
const  carousalItemStyle = {
    height:"100%",
    width:"100%", 
    display:"flex", 
    justifyContent:"center"
}
const innerStyle   = {
    // defaults styles on top here
    display:"flex", 
    alignItems:"center",
    height:"100%",
    width:"100%",
    backgroundColor:"",
    margin:"auto",  
    borderRadius:"10px", 
    overflow:"hidden"
}
/**
 * 
 */
class CarousalBoostrap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <div style={outerStyle}>
            <Carousel variant="dark"  style={innerStyle}>
                <Carousel.Item style={carousalItemStyle}>
                    <DescriptionCard
                        outerStyles={{backgroundColor:"",padding:"0px 0px",height:"300px%",width:"80%",borderRadius:20}}
                        magePosition="left" 
                        headerText="WE ARE EVERY WHERE..."  
                        bodyText="It doesn’t matter where you are or they are. You are welcome to join us. And we can help you bring them together Alumni around the world together 
                        to drive the development on..."
                        headerStyles={{color:"white"}}
                        bodyStyles={{fontSize:20, color:"white"}}
                        imageSrc={almamaterLogo}
                        actionButton = {<SimpleButton buttonText={"Join Us"} innerStyles={{padding: "19px 47px", borderRadius:15}} innerClasses={'primary-one-bg primary-three-color'}/>}
                    
                    />
                </Carousel.Item>
            </Carousel>
        </div>;
    }
} 

// #endregion

export default CarousalBoostrap;
