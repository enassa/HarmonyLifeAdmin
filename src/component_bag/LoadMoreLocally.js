import React, { Component } from 'react';
import Loader from './Loader';
import { School } from '@material-ui/icons';
import { CheckIfInSight, LoadMoreObserver } from '../contants/generalFunctions';
import { withRouter } from 'react-router-dom';
let dataSlice =''
class LoadMore extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            loadMore:false,
            prevPage:0,
            dataLimit:this.props.dataLimit,
            allData:[],
            dataSlice:[]
        }
        this.observerRef = React.createRef();
    }

    returnData = () => {
        let currentPage =  this.state.prevPage + this.state.dataLimit;
        let newDataSlice = this.state.allData.slice(this.state.prevPage, currentPage)
        console.log(newDataSlice)
        // this.setState({dataSlice:[...this.state.dataSlice, ...newDataSlice]},
        //     this.props.getUpdate(dataSlice) 
        // )
    }

   componentDidMount () {
        let dataLimit = this.props.dataLimit
        dataSlice = this.props.data.slice(0,dataLimit)
        this.setState({allData:this.props.data,prevPage:0,dataLimit:dataLimit,dataSlice},
            )
        this.props.getUpdate(dataSlice)
   }
    render() {
        return (
                this.props.handleClick
                ?<div 
                    style={{width:"100%", display:"flex", justifyContent:"center", marginBottom:"50px"}} 
                    ref={this.observerRef}
                    onClick = {()=>{
                        
                    }}
                >
                {this.state.loadMore
                    ?<Loader loaderIcon={<School style={{color:"rgba(147, 26, 222, 0.83)"}}/>}/>
                    :<button 
                        onClick={() => {this.returnData()}} 
                        style={{borderRadius:5, border:"none"}}
                        >
                        <span>Load more...</span>
                    </button>
                }
                </div>
                :<div style={{widht:"100%", display:"flex", justifyContent:"center"}} ref={this.observerRef}>
                    <Loader loaderIcon={<School style={{color:"rgba(147, 26, 222, 0.83)"}}/>}/>
                </div>
                
        );
    }
}

export default withRouter(LoadMore);