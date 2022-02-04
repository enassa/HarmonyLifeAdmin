import React, { Component } from 'react';
import Loader from './Loader';
import { School } from '@mui/icons-material';
import { CheckIfInSight, LoadMoreObserver } from '../contants/generalFunctions';
import { withRouter } from 'react-router-dom';
import { doNothing } from '../store/actions/generalActions';

class LoadMore extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            loadMore:false,
            dataLimit:this.props.quantityToLaod,
        }
        this.observerRef = React.createRef();
    }
    handleClick = () => {
        let dataLimit = this.props.dataLimit?this.props.dataLimit:10;
        this.setState({
            dataLimit:this.state.dataLimit+this.props.quantityToLaod,
        }, 
        this.props.handleClick
        ?this.props.handleClick(dataLimit,'TERTIARY')
        :this.props.handleVisible(dataLimit, 'TERTIARY')
        )
        // alert(this.state.dataLimit)
    }
   
   componentDidMount () {
       this.props.handleVisible?LoadMoreObserver(this.props.handleVisible,this.observerRef.current):doNothing()
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
                        onClick={() => {this.handleClick()}} 
                        style={{borderRadius:5, border:"none", padding:"10px 20px", color:"grey"}}
                        >
                        <span>Load more</span>
                    </button>
                }
                </div>
                :<div style={{widht:"100%", display:"flex", justifyContent:"center"}} ref={this.observerRef}>
                    {
                        this.props.noIcon
                        ?<Loader loaderColor={this.props.loaderColor} style={{...this.props.style}} noIcon/>
                        :<Loader loaderColor={this.props.loaderColor} style={{...this.props.style}} loaderIcon={<School style={{color:"rgba(147, 26, 222, 0.83)"}}/>}/>
                    }
                </div>
                
        );
    }
}

export default withRouter(LoadMore);