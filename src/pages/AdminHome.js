


import React, { Component } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import { PAGE, PAGES, fontFamily5, fontFamily3 } from '../contants/uiConstants';
import NewAlerts from './new_alerts/NewAlerts';
import ProcessingAlerts from './processing_alerts/ProcessingAlerts';
import ResolvedAlerts from './resolved_alerts/ResolvedAlerts';
import NavbarAlt3 from '../component_bag/NavbarAlt3';
import { Dashboard } from '@mui/icons-material';
import NavbarAlt2 from '../component_bag/NavbarAlt2';

class AdminHome extends Component {
    constructor(props){
        super(props)
        this.state={
            activePage:'Dashboard'
        }
    }
    ejectSideNavItems = () => {
        return 
    }
    changePage = (page) => {
        console.log(page)
        this.setState({activePage:page.title})
        // this.props.history.push(`${page.url}`)
    }
    getSubPage = () => {
        switch (this.state.activePage) {
            case PAGES[0].title:
                return <NewAlerts/>
            case PAGES[1].title:
                return <ProcessingAlerts/>
            case PAGES[2].title:
                return <ResolvedAlerts/>
            default:
                break;
        }
    }
    componentDidMount(){
       const page = this.props.match.url
        switch (page) {
            case PAGES[0].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[1].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            case PAGES[2].url:
                    this.setState({activePage:PAGES[0].title})
                break;
            default:
                break;
        }
        console.log(page)
    }
    render() {
        const myfontFamly = fontFamily5
        const {activePage} = this.state;
        return (
            <div className='width-100-cent height-100-cent f-column nate-white-bg j-start'>
                <NavbarAlt2 style={{borderRadius:"", borderBottom:"1px solid #F7F7F7"}} title1={'MTN Ghana'} title2={'Achimota Branch'}/>
                <div className='width-100-cent height-100-cent j-start '>
                    <div className='min-width-320 d-flex f-column j-center a-start height-100-cent  nate-white-bg'>
                        <div className='width-100-cent height-100 padding-l-20 padding-t-20'>
                            {/* <span className='font-1-2-em nate-grey-text'>Alerts Page </span> */}
                        </div>
                        {/* side buttons container */}
                        <div className='width-100-cent height-100-cent f-column a-center'>
                        <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.dashboard?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent'>
                                    <Dashboard style={{ color:"#2295FA"}}/>
                                    <span style={{marginLeft:10, color:"#2295FA",fontWeight:300, fontFamily:fontFamily3}}>Dashboard</span>
                                </span>
                                <div style={{color:"#2295FA", backgroundColor:"rgb(34 149 250 / 21%)"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    11
                                </div>
                            </div>
                            <div 
                                onClick = {() => {this.changePage(PAGES[1])}} 
                                style={{borderRadius:20, cursor:"pointer",backgroundColor:`${activePage===PAGE.awaiting?'aliceblue':''}`,}} 
                                className='width-80-cent  margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent '>
                                    <CachedIcon style={{ color:"#A2D920"}}/>
                                    <span style={{marginLeft:10, color:"#A2D920",fontWeight:300, fontFamily:fontFamily3}}>Awaiting Approval</span>
                                </span>
                                <div style={{color:"#A2D920", backgroundColor:"rgb(162 217 32 / 28%)"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    23
                                </div>
                            </div>
                            {/* <div 
                                onClick = {() => {this.changePage(PAGES[0])}} 
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.new?'aliceblue':''}`}} 
                                className='width-80-cent margin-b-20 transition-all-fast height-60 padding-10  j-space-between a-center curved-corners-more'>
                                <span className='a-center height-100-cent '>
                                    <ErrorOutlineIcon style={{ color:"#E11717"}}/>
                                    <span style={{marginLeft:10,color:"#FF0F0F"}}>Awaiting Approval</span>
                                </span>
                                <div style={{color:"#E91212", backgroundColor:"#FEB8B8"}} 
                                className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    15
                                </div>
                            </div> */}
                            
                            <div 
                                onClick = {() => {this.changePage(PAGES[2])}}
                                style={{borderRadius:20,fontFamily:myfontFamly, cursor:"pointer", backgroundColor:`${activePage===PAGE.approved?'aliceblue':''}`}} 
                                className='width-80-cent  margin-b-20 transition-all-fastheight-60 padding-10  j-space-between a-center curved-corners-more'
                            >
                                <span className='a-center height-100-cent '>
                                    <CheckCircleOutlineIcon style={{ color:"#078113"}}/>
                                    <span style={{marginLeft:10, color:"#399A42",fontWeight:300, fontFamily:fontFamily3}}>Approved</span>
                                </span>
                                <div style={{color:"#078113", backgroundColor:"#C8E3CB"}}  className='width-40 height-40 min-width-40 min-height-40 a-center j-center round-up'>
                                    08
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div style={{minHeight:"100%"}} className='width-100-cent height-90-cent min-height-90-cent j-start f-column nate-white-bg overflow-hidden'>
                        {this.getSubPage()}
                        {/* <div className='height-20-cent width-100-cent nate-blue-bg'>jj</div> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminHome;