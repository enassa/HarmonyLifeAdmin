import React, { Component } from 'react';
import { INSTITUTION_IMG } from '../contants/uiConstants';
import { randomImages } from '../css/dummydata/dummyData';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import
class CarousalFade extends Component {
    constructor (props) {
        super(props)
        this.state = {
            index:null
        }
    }
    handleSelect = () => {

    }
    render() {
        const {index} = this.state
        return (
            <div
            // style={{maxHeight:70}}
                className='overflow-hidden d-flex a-center curved-corners'
            >
                {/* <Carousel activeIndex={index} onSelect={this.handleSelect}>
                    <Carousel.Item  interval={100} >
                        <div style={{width:500, height:400, backgroundImage:`url('${INSTITUTION_IMG.rKNUST}')`, backgroundPosition:"center", backgroundSize:"cover"}} className='nate-white-bg fill-entire-page d-flex a-center j-center padding-10'>
                            
                        </div>
                    </Carousel.Item>
                    <Carousel.Item   interval={100} style={{width:500, height:400}}>
                        <div style={{width:500, height:400,backgroundImage:`url('${INSTITUTION_IMG.rUCC}')`, backgroundPosition:"center", }} className='nate-white-bg fill-entire-page d-flex a-center j-center padding-10'>
                            
                        </div>
                    </Carousel.Item>
                    </Carousel> */}
                    <Carousel dynamicHeight={false} showArrows={false} style={{backgroundColor:"red"}} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                {/* <div style={{height:"80%",maxHeight:"80%"}}> */}
                    <img style={{width:"100%", height:"90%"}} className='curved-corners '  src={INSTITUTION_IMG.rKNUST} />
                    {/* <div className='position-absolute width-100-cent bottom-40 d-flex j-center a-center  padding-20'>
                        <div style={{color:"gold",padding:"8px 40px"}} className='position-absolute bottom-20 nate-black-bg   curved-corners nate-white-text'>
                            KNUST</div>
                    </div>

                </div> */}
                {/* <div style={{height:"100%"}}> */}
                    <img style={{width:"100%", height:"90%"}} className='curved-corners '  src={INSTITUTION_IMG.rUCC} />
                    {/* <div className='position-absolute width-100-cent bottom-40 d-flex j-center a-center  padding-20'>
                        <div style={{color:"gold",padding:"8px 40px"}} className='position-absolute bottom-20 nate-black-bg   curved-corners nate-white-text'>
                            UCC</div>
                    </div>

                </div> */}
                {/* <div style={{height:"100%"}}> */}
                    <img style={{width:"100%", height:"90%"}} className='curved-corners '  src={INSTITUTION_IMG.rCentral} />
                    {/* <div className='position-absolute width-100-cent bottom-40 d-flex j-center a-center  padding-20'>
                        <div style={{color:"gold",padding:"8px 40px"}} className='position-absolute bottom-20 nate-black-bg   curved-corners nate-white-text'>
                            CUC</div>
                    </div>

                </div> */}
                {/* <div>
                <img style={{width:"100%", height:"80%"}} className='curved-corners ' src={INSTITUTION_IMG.rCentral} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img style={{width:"100%", height:"80%"}} className='curved-corners' src={INSTITUTION_IMG.rCentral} />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
            </div>
        );
    }
}
export default CarousalFade;
