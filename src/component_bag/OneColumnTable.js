import React, { Component } from 'react'
import { MoreVert, Edit, OpenWith, Close, CloudDownload, Delete, AssignmentInd, Article, TableView } from '@mui/icons-material';
import { fontFamily3, colors, popUpItems, fontFamily5, fontFamily2 } from '../contants/uiConstants';
import { capitalizeFirstLetter, getFirstLetter } from '../contants/generalFunctions';
import ActionTree from './ActionTree';
import SearchBar from './SearchBar';
import { someData } from '../dummydata/dummyData';
import MyModal from './MyModal';
import PopUpButton from './PopUpButton';
import { color, style } from '@mui/system';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Dropdown from './Dropdown';
const  actionsList = [
    {icon:<Delete/>,description:'Delete',iconColor:'red',},
    {icon:<Edit/>,description:'Edit', iconColor:"blue",},
    {icon:<AssignmentInd/>,description:'Assign', iconColor:"green"},
    {icon:<Article/>,description:'Export', iconColor:"#000080"},
    {icon:<TableView/>,description:'Export all', iconColor:"gold"},
]

export default class OneColumnTable extends Component {
constructor(props){
    super(props)
    this.state = {
        allData:[],
        hoveredRow:[],
        selectedRows:[],
        selectedRowsIndex:[],
        data:someData
    }
}
    returnSelected = (selected) => {
        this.props.getSelected
        ?this.props.getSelected(this.state.selectedRows)
        :console.log(this.state.selectedRows)
    }
    addToSelected = (item,index) => {
        const {hoveredRow,selectedRowsIndex, selectedRows,editMode, actionsState} = this.state
        // Check if item has already been selected, if yes delete both the index and the item itself from their respective states
        if(selectedRowsIndex.includes(index)){
            let indexesArray = this.state.selectedRowsIndex
            let rowsArray = this.state.selectedRows 
            let selectedIndex = indexesArray.indexOf(index)
            if (selectedIndex !== -1) {
                indexesArray.splice(selectedIndex, 1);

                let rowSelected = rowsArray.indexOf(index)
                rowsArray.splice(rowSelected,1)

                this.setState({selectedRowsIndex:indexesArray});
                return
            }
        }
        this.setState({selectedRows:[...selectedRows,item],selectedRowsIndex:[...selectedRowsIndex,index]})
    }
    deleteItem = (itemIndex) => {
        let arr = [...this.state.allData]; // make a separate copy of the array
        arr.splice(itemIndex, 1);
        this.setState({allData: arr});
        return
    }
    handleAction = (action,data) => {
        if(action.toLowerCase()==='delete'){
            this.deleteItem(data)
        }
        if(action.toLowerCase()==='edit'){
                this.setState({editMode:true})
                this.setState({editingItem:data})
        }
        this.setState({popUpState:""})
    }

    getTablePage = () => {
        const {hoveredRow, selectedRows,selectedRowsIndex,editMode, actionsState} = this.state

        let getLetteredColumn = (item,property, index) => {
            let color = colors[index];
            if(color===undefined){
                color = colors[0]
            }
            return <td> 
                        <div className='j-start a-center'>
                            <div className='j-start a-center'>
                                <div 
                                    style={{backgroundColor:color, fontSize:20,fontFamily:fontFamily5}} 
                                    className='height-35 margin-l-10 width-35 all-center margin-r-20 round-up  nate-white-text'
                                >
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                                <span style={{fontFamily:fontFamily3}} className='elipse-overflow'>{item[property]}</span>
                        </div>
                    </td>
        }

        let getLetteredAndCheckBoxColumn = (item,property,index) => {
            let color = colors[index];
            if(color===undefined){
                color = colors[0]
            }
            
            return <td className=' j-start a-center position-relative cursor-pointer'>
                    <div 
                        style={{visibility:`${selectedRowsIndex.includes(index)||index === hoveredRow?'visible':'hidden'}`}} 
                        className='a-center j-start position-absolute height-40 width-40 round-up nate-white-bg left-10'
                    >
                        <input 
                            checked = {selectedRowsIndex.includes(index)}
                            className='cursor-pointer  width-20 height-20' type="checkbox"
                        />  
                    </div>
                    <div className='j-start   width-100-cent a-center '>
                            <div className='j-start a-center '>
                                <div style={{backgroundColor:color, fontSize:20, fontFamily:fontFamily5}} 
                                    className='height-35 margin-l-10 width-35 all-center nate-blue-bg margin-r-20 round-up nate-white-text'
                                >
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                            <span style={{fontFamily:fontFamily3}} className='elipse-overflow'>{item[property]}</span>
                        </div>
            </td>
        }
        let getActionColumn = (item,property,index) => {
            return <td>
                 <div className='j-start a-center  height-100-cent '>
                                  <div style={{fontFamily:fontFamily3}} className=' no-break'>{item[property]}</div>
                                 <div className=' j-center width-100-cent height-100-cent ' >
                                     {/* edit action */}
                                            <div
                                                style={{visibility:`${hoveredRow === item.id?'visible':'hidden'}`}}
                                                className='d-flex f-column   height-100-cent'
                                                    onClick = {() => {
                                                        this.setState({editMode:true})
                                                        this.setState({editingItem:item})
                                                    }}
                                            >
                                                <Edit 
                                                    className=' pointer-events-none nate-blue-text height-100-cent '
                                                />
                                            </div>
                                              {/* More action */}
                                            <div
                                                style={{visibility:`${hoveredRow === item.id?'visible':'hidden'}`}}
                                                className='d-flex  f-column height-100-cent'
                                                onClick = {(e) => {
                                                    e.stopPropagation()
                                                    this.setState({popUpState:item.id})
                                                }} 
                                            >
                                                <MoreVert 
                                                    className=' pointer-events-none nate-grey-text height-100-cent '
                                                />
                                            </div>
                                            
                                        </div>
                            </div>
        </td>
    }
        let getActionsAndLetteredColumn = (item,property,index) => {
            let color = colors[index];
            if(color===undefined){
                color = colors[0]
            }
            return <td>
                 <div className='j-start a-center   height-100-cent '>
                 <div className='j-start a-center'>
                            <div className='j-start a-center'>
                                <div 
                                    style={{backgroundColor:color, fontSize:20,fontFamily:fontFamily5}} 
                                    className='height-35 margin-l-10 width-35 all-center margin-r-20 round-up  nate-white-text'
                                >
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                                <span style={{fontFamily:fontFamily3}} className='elipse-overflow no-break'>{item[property]}</span>
                        </div>                    
                        <div className=' j-center width-100-cent height-100-cent pointer-events-all' >
                        {/* edit action */}
                                <div
                                    style={{visibility:`${hoveredRow === index?'visible':'hidden'}`}}
                                    className='d-flex f-column   height-100-cent '
                                        onClick = {() => {
                                            // this.setState({editMode:true})
                                            // this.setState({editingItem:item})
                                            // alert('hey')
                                        }}
                                >
                                    <Edit 
                                        className=' pointer-events-none nate-blue-text height-100-cent '
                                    />
                                </div>
                                    {/* More action */}
                                <div
                                    style={{visibility:`${hoveredRow === index?'visible':'hidden'}`}}
                                    className='d-flex  f-column height-100-cent'
                                    onClick = {(e) => {
                                        e.stopPropagation()
                                        this.setState({popUpState:item.id})
                                    }} 
                                >
                                    <MoreVert 
                                        className=' pointer-events-none nate-grey-text height-100-cent '
                                    />
                                </div>
                                
                            </div>
                </div>
        </td>
    }
        let getActionsLetteredCheckboxColumn = (item,property,index) => {
            let color = colors[index];
            if(color===undefined){
                color = colors[0]
            }
            return <td>
                 <div className='j-start a-center  height-100-cent '>
                 <div 
                        style={{visibility:`${selectedRowsIndex.includes(index)||index === hoveredRow?'visible':'hidden'}`}} 
                        className='a-center j-start position-absolute height-40 width-40 margin-l-9 round-up nate-white-bg left-30'
                    >
                        <input 
                            checked = {selectedRowsIndex.includes(index)}
                            className='cursor-pointer  width-20 height-20' type="checkbox"
                        />  
                    </div>
                    <div className='j-start   width-100-cent a-center '>
                            <div className='j-start a-center '>
                                <div style={{backgroundColor:color, fontSize:20, fontFamily:fontFamily5}} 
                                    className='height-35 margin-l-10 width-35 all-center nate-blue-bg margin-r-20 round-up nate-white-text'
                                >
                                    {getFirstLetter(item[property])}
                                </div>
                            </div>
                            <span style={{fontFamily:fontFamily3}} className='elipse-overflow'>{item[property]}</span>
                        </div>
                    <div className=' j-center width-100-cent height-100-cent ' >
                        {/* edit action */}
                                <div
                                    style={{visibility:`${hoveredRow === index?'visible':'hidden'}`}}
                                    className='d-flex f-column   height-100-cent'
                                        onClick = {() => {
                                            this.setState({editMode:true})
                                            this.setState({editingItem:item})
                                        }}
                                >
                                    <Edit 
                                        className=' pointer-events-none nate-blue-text height-100-cent '
                                    />
                                </div>
                                    {/* More action */}
                                <div
                                    style={{visibility:`${hoveredRow === index?'visible':'hidden'}`}}
                                    className='d-flex  f-column height-100-cent'
                                    onClick = {(e) => {
                                        e.stopPropagation()
                                        this.setState({popUpState:item.id})
                                    }} 
                                >
                                    <MoreVert 
                                        className=' pointer-events-none nate-grey-text height-100-cent '
                                    />
                                </div>
                                
                            </div>
                </div>
        </td>
    }
   let  getCheckBoxColumn = (item,property, index) => {
    return <td> 
        <div className='j-start  a-center width-auto  position-relative'>
        <div 
                style={{visibility:`${selectedRowsIndex.includes(index)||index === hoveredRow?'visible':'hidden'}`, left:"-5px"}} 
                className='a-center  j-start top-0 nate-white-bg margin-r-10  '
        >
            <input 
                checked = {selectedRowsIndex.includes(index)}
                className='cursor-pointer width-20 height-20' type="checkbox"
            /> 
        </div>
            <div style={{fontFamily:fontFamily3}} className='a-center  j-start'>{item[property]}</div>
        </div>
    </td>
    }
   let  getCheckBoxCoverColumn = (item,property, index) => {
    return <td> 
        <div className='j-start  a-center width-auto  position-relative'>
        <div 
                style={{visibility:`${selectedRowsIndex.includes(index)||index === hoveredRow?'visible':'hidden'}`, left:"-5px"}} 
                className='a-center  j-start top-0 nate-white-bg position-absolute  '
        >
            <input 
                checked = {selectedRowsIndex.includes(index)}
                className='cursor-pointer width-20 height-20' type="checkbox"
            /> 
        </div>
            <div style={{fontFamily:fontFamily3}} className='a-center  j-start'>{item[property]}</div>
        </div>
    </td>
    }
    let getUnspecifiedColumn = (item,property,index) => {
        // alert('')
        return <td> 
                <div className='j-start a-center '>
                    <div style={{fontFamily:fontFamily3}}>{item[property]}</div>
                </div>
            </td>
    }
       
        let ejectTableRows = () => {
            let propertiesToShow = ['name','phone','email']
            let enableSerialNumbers = false
            let tableDesc = {
                LetteredCheckBoxColumn:'name',
                LetteredColumn:'',
                checkBoxColumn:'',
                checkBoxCoverColumn:'sn',
                actionsColumn:'',
                actionsAndLettered:'name',
                actionsAndLetteredCheckbox:'',
            }
            // if user has enabled display of serial numbers add serial numbers to properties to show
            if(enableSerialNumbers){
                propertiesToShow = ['sn',...propertiesToShow]
            }
           let tableData = this.state.data;
             return  tableData.map((item, counter) => {
                let rowData = item
                // if user has enabled display of serial numbers push serial number to begining of each object in the array of objects
                if(enableSerialNumbers){
                    rowData = {'sn':counter+1, ...rowData}
                }
                  return <tr  
                            className='width-100-cent margin-l-20 position-relative cursor-pointer'
                            onMouseOver = {() => {
                                this.setState({hoveredRow:counter})
                            }}
                            onMouseOut = {() => {
                                this.setState({hoveredRow:''})
                            }}
                            onClick = {() => {
                                this.addToSelected(item,counter)
                            }}
                        > 
                        
                        {propertiesToShow.map((property,index)=>{
                            return property === tableDesc.LetteredCheckBoxColumn
                            ?getLetteredAndCheckBoxColumn(rowData,property,counter)
                            :property ===  tableDesc.LetteredColumn
                            ?getLetteredColumn(rowData,property,counter)
                            :property === tableDesc.checkBoxColumn
                            ?getCheckBoxColumn(rowData,property,counter)
                            :property === tableDesc.checkBoxCoverColumn
                            ?getCheckBoxCoverColumn(rowData,property,counter)
                            :property === tableDesc.actionsColumn
                            ?getActionColumn(rowData,property,counter)
                            :property === tableDesc.actionsAndLettered
                            ?getActionsAndLetteredColumn(rowData,property,counter)
                            :property === tableDesc.actionsAndLetteredCheckbox
                            ?getActionsLetteredCheckboxColumn(rowData,property,counter)
                            :getUnspecifiedColumn(rowData,property,counter)
                            }
                        // </td>    
                        )}
                        
                    </tr>  
            })
        }
        return <div style={{fontFamily:fontFamily2,borderSpacing: '0 15px'}} className='width-100-cent position-relative f-column j-start a-start height-100-cent'>
                    <div style={{fontFamily:fontFamily5}} className='width-100-cent height-100-cent j-start f-column'>
                        <div className='full-width height-100-cent padding-b-40 y-auto d-flex f-column j-start a-start '>
                            <table style={{borderSpacing:"0 15px"}} className='width-100-cent  margin-b-50 height-300'>
                                <tbody style={{}} className='width-100-cent  height-100-cent'>
                                    {ejectTableRows()}
                                </tbody>
                            </table>
                        </div>
                        <div className='height-80 position-absolute bottom-0 left-0 pointer-events-none  width-100-cent j-end a-center padding-r-30'>
                            <PopUpButton buttonText='Assign' handleClick = {() => {this.returnSelected()}}/>
                    </div>
                    </div>
                </div>
    }
    componentDidMount(){
    
    }
    render() {
        const styles = {
            mainContainer:{
                ...this.props.styles
            }
        }
        
        return (
            <div style={styles.mainContainer} className='width-100-cent nate-white-bg height-20-cent curved-corners nate-blue-bg overflow-hidden j-start a-start nate-white-bg f-column'>
                <div className='width-100-cent j-end f-column a-center  nate-white-bg height-100  min-height-100 '>
                        <div className='width-100-cent j-space-around padding-l-20 padding-r-20'>
                            <div className='width-50-cent height-100-cent '>
                                {/* <span>Assign to</span> 
                                <ArrowRight/>  */}
                               
                            </div>
                            <SearchBar 
                                    disableFilter
                                    handleClick = {(inputValue,selectedFilter) => {
                                        this.props.handleClick(inputValue,selectedFilter)
                                    }}
                                    style={{
                                        backgroundColor:"white", 
                                        border:"0px",
                                        color:"#B0B0B1",
                                        width:"50%",
                                        fontFamily:fontFamily3, 
                                        borderRadius:"100px", 
                                        padding:"0px 10px"
                                    }}
                                    innerStyle = {{
                                        color:"#B0B0B1",
                                        fontWeight:"bolder", 
                                        fontSize:20
                                    }}
                            />
                        </div>
                      
                           <div 
                                style={{fontFamily:fontFamily5}} 
                                className='width-100-cent nate-blue-text padding-l-40 margin-t-10'>
                                {this.state.selectedRows.length} people selected
                          </div>
                    </div>
                <div className='width-100-cent  height-85-cent f-start a-start padding-l-20 padding-r-20'>
                    {this.getTablePage()}
                    {/* <MyModal hideCancel getResponse = {(response)=>{}}/> */}
                </div>
            </div>
        )
    }
}
