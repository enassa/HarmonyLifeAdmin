import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSnackBar } from '../store/actions/generalActions';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import { letteringColor6, fontFamily3 } from '../contants/uiConstants';

let dummyFilters = [
    {name:"filter", label:"Projects"},
    {name:"filter", label:"Institutions"},
    {name:"filter", label:"News"},
    {name:"filter", label:"Gallery"},
]

let style = {};
class SearchBar extends Component {
    constructor (props){
        super(props)
        this.state={
            inputValue:'',
            selectedFilter:'Projects',
            showFilter:false,
            showingPlaceholder:true,
            placeholderColor:this.props.placeholderColor?this.props.placeholderColor:"grey"
        }
        this.inputRef = React.createRef();

    }
    handleChange (e){
        if(e.target.value!=="Search..."||e.target.value!==this.props.placeholder){
            this.props.handleChange
        ?this.props.handleChange(e)
        :this.setState({inputValue:e.target.value, showFilter:true},console.log(e.target.value))
        }
    }
    handleClick (e){
        const {inputValue,selectedFilter} = this.state;
        if(inputValue===""||selectedFilter===""){
            this.props.openSnackBar('Please input a text in the searchbox', 'error')
        }
        this.props.handleClick
        ?this.setState({showFilter:false},this.props.handleClick(inputValue,selectedFilter))
        :this.setState({showFilter:false}, console.log(inputValue,selectedFilter))
    }
    handleFocus (e) {
        const node = this.inputRef.current;
        if(e.target.value===this.props.placeholder||e.target.value==="Search..."){
            node.value=''
        }
    }
    handleBlur (e){
        const node = this.inputRef.current;
        if(e.target.value===""||e.target.value===" "){
            node.value=this.props.placeholder?this.props.placeholder:"Search..."
            this.setState({showFilter:false,placeholderColor:this.props.placeholderColor})
        }
    }
    ejectFilters = () => {
        const  { selectedFilter } = this.state
        // alert(dummyFilters.length)
        return this.props.filters
        ?this.props.filter.map((filter, index) => {
          return  <div style={style.filterCard}
                    onClick = {()=>this.setState({selectedFilter:filter.label})}
                    >
                    <Radio 
                        name="filter" 
                        value={filter.label}
                        checked={selectedFilter===filter.label}
                    /> 
            </div>
        })
        :dummyFilters.map((filter, index) => {
           return <div style={style.filterCard}
                    onClick = {()=>this.setState({selectedFilter:filter.label})}
                  >
                    <Radio 
                        name="filter" 
                        value={filter.label}
                        checked={selectedFilter===filter.label}
                    /> 
                    <span >{filter.label}</span>
                  </div>
        })
    }
    componentDidMount(){
    }
    render() {
        style={
            style:{
                backgroundColor:"#EFF2F5", border:"1px solid grey", borderRadius:"5px",width:"100%",
                ...this.props.style
            },
            innerStyle:{
                backgroundColor:"transparent",  border:"0px", outline:"none",
                color:this.props.placeholderColor?this.state.showingPlaceholder==true?`${this.props.placeholderColor}!important`:this.props.textColor:"white",
                fontFamily:fontFamily3, 
                fontWeight:300,
                ...this.props.innerStyle

                
            },
            IconStyle:{
                cursor:"pointer",
                ...this.props.IconStyle
            },
            filterOuterStyle:{
                display:"flex",
                flexFLow:"column",
                justifyContent:"flex-start",
                alignItems:"flex-start",
                width:220,
                boxShadow:"0 12px 12px var(--shadow-2),inset 0 0 0 0 var(--shadow-inset)",
                ...this.props.filterOuterStyle
            },
            filterCard:{
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
                width:"100%",
                height:"50px",
                cursor:"pointer",
            },
            filterRadio:{
                // height:"100%",
                width:"auto",
                backgroundColor:"yellow"
            },
            filterLabel:{
                width:"100%",
                height:"100%",
            }
        }
        return (
            <div className="d-flex j-start a-center height-40 padding-r-5 position-relative elevated-blend" 
                style={style.style}
            >
                <input 
                    ref={this.inputRef}
                    id = {this.props.id}
                    onChange={(e)=>this.handleChange(e)} style={style.innerStyle}
                    onFocus = {(e)=>{this.handleFocus(e)}} 
                    onBlur= {(e) => {this.handleBlur(e)}}
                    defaultValue={this.props.placeholder?this.props.placeholder:"Search..."}
                    // onMouseOut = {()=>{this.setState({showFilter:false})}}
                    className="fill-entire-page padding-l-10 "
                />
                <SearchIcon onClick={(e)=>this.handleClick(e)} style={style.IconStyle}/>
                {this.props.disableFilter
                ?null
                :this.state.showFilter
                ?<div style={style.filterOuterStyle} 
                  className="position-absolute top-40 left-0 height-auto padding-10 d-flex f-column nate-white-bg elevated-all"
                 >
                      {this.ejectFilters()}
                 </div>
                 :null
                }
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openSnackBar: (message,type) => dispatch(openSnackBar(message,type))
  }
}
const mapStateToProps = (state) => {
    return {
        profileInfoState:state.generalReducer.profileInfoState,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
