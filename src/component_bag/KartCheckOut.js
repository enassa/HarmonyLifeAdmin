import React, { Component } from 'react';

class KartCheckOut extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div className='width-100-cent height-100-cent all-center'>
                <div className='width-70-cent height-80-cent elevated-blend f-row j-start'>
                    <div className='width-65-cent height-100-cent f-column '>
                        <div className='width-100-cent height-80-cent f-column '>
                            <div className='width-100-cent height-100 a-center padding-l-40 '>
                                Shopping Kart
                            </div>
                            <div className='width-100-cent height-100-cent a-center f-column j-start padding-t-30 y-scroll'>
                                {/* <div className='width-90-cent height-100  curved-corners-more margin-b-20 elevated-blend'> </div> */}
                                <div className='width-90-cent height-100 min-height-100 a-center padding-10 curved-corners-more margin-b-20 elevated-blend'>
                                    <div className='width-80 min-width-80 height-80 round-up nate-grey-bg all-center'></div>
                                    <div className='width-100-cent padding-20 height-100-cent a-center elipse-overflow'>Now that you are in the university</div>
                                    <div className='width-auto height-100-cent j-start'>
                                        <div className='width-80 min-width-80 height-100-cent nate-blue-bg'></div>
                                        <div className='width-80 min-width-80 height-100-cent nate-purple-bg'></div>
                                        <div className='width-80 min-width-80 height-100-cent nate-pink-bg'></div>
                                    </div>
                                    
                                </div>
                                <div className='width-90-cent height-100 min-height-100  curved-corners-more margin-b-20 elevated-blend'></div>
                                <div className='width-90-cent height-100 min-height-100  curved-corners-more margin-b-20 elevated-blend'></div>
                                <div className='width-90-cent height-100 min-height-100  curved-corners-more margin-b-20 elevated-blend'></div>
                                <div className='width-90-cent height-100 min-height-100  curved-corners-more margin-b-20 elevated-blend'></div>
                                <div className='width-90-cent height-100 min-height-100  curved-corners-more margin-b-20 elevated-blend'></div>
                            </div>
                        </div>
                        <div className='width-100-cent j-space-between padding-l-40 padding-r-40'>
                            <div>
                                <input type='checkbox'/>
                                <span>Add gift code</span>
                            </div>
                            <span>Total: $200</span>
                        </div>
                    </div>
                    <div className='width-35-cent height-100-cent nate-purple-bg'></div>
                </div>
            </div>
        );
    }
}

export default KartCheckOut;