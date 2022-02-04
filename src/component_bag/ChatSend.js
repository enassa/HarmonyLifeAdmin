import { Article, AttachFile, Camera, Close, EmojiEmotions, InsertPhoto, MusicNote, Send, Stop, Videocam } from '@mui/icons-material'
import React, { Component } from 'react'
import { stopAllTracks, stopBothVideoAndAudio } from '../contants/generalFunctions'
import { allEmojis } from '../contants/uiConstants'
let videoStream = undefined
let mediaRecord = undefined
let myStream = undefined
let mediaRecorder = undefined
const attachMents = [
    {
        name:'Document',
        icon:<Article/>,
        color:'#00AC68',
    },
    {
        name:'Audio',
        icon:<MusicNote/>,
        color:'#263F73',
    },
    {
        name:'Image',
        icon:<InsertPhoto/>,
        color:'#45408F',
    },
    {
        name:'Camera',
        icon:<Camera/>,
        color:'#FF8147',
    },
]
const cameraFunctions = [
    {
        name:'Close',
        icon:<Close/>,
        color:'#E94C89',
    },
    {
        name:'Record',
        icon:<Videocam/>,
        color:'#263F73',
    },
    {
        name:'Capture',
        icon:<Camera/>,
        color:'#FF8147',
    },
]
export default class ChatSend extends Component {
    constructor(props){
        super(props)
        this.state ={
        // recentlyUsedEmojis:['🕚','😀','❤️','😂'],
        recentlyUsedEmojis:['🕚',],
        activeEmojiHead:'smilyAndPeople',
        showEmojis:false,
        showAttachment:false,
        showCamera:false,
        fullVideo:false,
        inputValue:'',
        recording:false,
        finishedRecording:false,
        cameraReady:false,
        videoStream:false,
        streamingActive:false,
        }
        this.inputRef = React.createRef()
        this.videoRef = React.createRef()
        this.vidSave = React.createRef()
    }
    updateRecentlyUsed = (emoji) => {
        this.setState({recentlyUsedEmojis:[emoji, ...this.state.recentlyUsedEmojis]})
    }
    handleOnChange = (value) => {
        // this.setState({inputValue:value},console.log(this.state.inputValue))
    }
    updateRecent = (emoji) =>{
        let recents = this.state.recentlyUsedEmojis
        if(recents.includes(emoji)) return
        if(recents.length >= 60){
            recents.pop()
            this.setState({recentlyUsedEmojis:[emoji,...recents]})
            return
        }
        this.setState({recentlyUsedEmojis:[emoji,...recents]})
    }
    handleEmojiClick = (emoji) => {
        const inputNode = this.inputRef.current
        inputNode.value += emoji
        inputNode.focus()
        this.updateRecent(emoji)
    }
    sendMessage = () => {
        const inputNode = this.inputRef.current
        let message = inputNode.value
        inputNode.value = ""
        this.props.getInputValue(message)
        this.setState({showEmojis:false})
    }
    getEmojiHead = () => {
        const {recentlyUsedEmojis} = this.state
        let emojis = {recentlyUsedEmojis:recentlyUsedEmojis,...allEmojis}
        // emojis['recentlyUsedEmojis'] = recentlyUsedEmojis;
        let emojiHeadTitles = Object.keys(emojis)
        // emojiHeadTitles.push(recentlyUsedEmojis[0])
        return emojiHeadTitles.map((head,index) => {
            return <div style={{border:"5px solid black !important"}} onClick={() => {this.setState({activeEmojiHead:head})}} 
                        style={{display:"flex !important"}} 
                        className='width-100-cent hvr-underline-reveal d-flex  height-100-cent cursor-pointer all-center'>
                {emojis[head][0]}
            </div>
        })
    }
    handleEnterKey = (e) => {
        if(e.code.toLowerCase() === 'enter'){
            this.sendMessage()
        }
    }
    getEmojis = () => {
        const {recentlyUsedEmojis,activeEmojiHead} = this.state
        let emojis = {recentlyUsedEmojis:recentlyUsedEmojis,...allEmojis}
        return emojis[activeEmojiHead].map((emoji,index) => {
            return <div style={{fontSize:30}} onClick={() => {this.handleEmojiClick(emoji)}}  
                        className='width-30 min-width-35 height-35 min-height-30  margin-r-10 cursor-pointer all-center'>
                    {emoji}
                </div>
        })
    }
    emojiContainer = () => {
        return <div style={{top:"-310px"}} 
                    className='width-100-cent above-all nate-white-bg pop-up-rise left-0 j-start f-column  overflow-hidden curved-corners elevated-blend height-300 max-height-300 min-height-250   position-absolute'>
                <div style={{fontSize:20,backgroundColor:"#ECECEC"}} 
                     className='wdith-100-cent y-auto height-50 min-height-50 nate-grey-bg j-space-around a-center'>
                    {this.getEmojiHead()}
                </div>
                <div className='width-100-cent height-100-cent padding-20 grid-view '>
                    {this.getEmojis()}
                </div>
            </div>
    }
    stopRecording = () => {
        if(this.state.recording===true){
                mediaRecorder.stop()
        }
    }
    controlRecording = (action) => {
            mediaRecorder = new MediaRecorder(myStream)
            let chunks = []
            let vidSave = this.vidSave.current
             mediaRecorder.ondataavailable = (e) =>{
                chunks.push(e.data)
            }
            mediaRecorder.onstop= (e) =>{
                let blob = new Blob(chunks, {'type':'video/mp4;'}) 
                chunks = []
                let videoUrl = window.URL.createObjectURL(blob)
                vidSave.src = videoUrl
            }
        mediaRecord = mediaRecorder
        mediaRecorder.start()
        this.setState({recording:true})
        console.log(mediaRecorder)

    }
    handleFunction = (action) => {
        switch (action) {
            case 'Capture':
                break;
            case 'Record':
                this.controlRecording()
                break;
            case 'StopRecord':
                this.stopRecording()
                break;
            case 'ToggleFullVideo':
                this.setState({fullVideo:!this.state.fullVideo})
                break;
            case 'Close':
                this.toggleCameraContainer()
                break;
        
            default:
                break;
        }
    }
    videoPlayerContainer = () => {
        
    }
   
    cameraContainer = () => {
     let ejectFunctions = () => {
         const {recording} = this.state
            return cameraFunctions.map((item,index) =>{
                return <div  className='width-50 height-50 pointer-events-all margin-r-30 cursor-pointer all-center f-column'>
                            {item.name === 'Record' && recording === true
                            ?<div onClick = {() => {this.handleFunction('StopRecord')}} className='round-up padding-2 elevated-blend nate-white-bg'>
                                <div style={{backgroundColor:'red'}} className='width-50 height-50 padding-10 min-width-50 min-height-50 nate-blue-bg nate-white-text round-up all-center'>
                                    <Stop style={{color:"white"}}/>
                                </div>
                            </div>
                            :<div onClick = {() => {this.handleFunction(item.name)}} className='round-up padding-2 elevated-blend nate-white-bg'>
                                <div style={{backgroundColor:`${item.color}`}} className='width-50 height-50 padding-10 min-width-50 min-height-50 nate-blue-bg nate-white-text round-up all-center'>
                                    {item.icon}
                                </div>
                              </div>
                             }
                            
                            {/* <span className='all-center'>
                                {item.name}
                            </span> */}
                        </div>
            }) 
        }
        return this.state.finishedRecording
        ?<div  style={{bottom:"0px"}}  
                className='width-100-cent height-100-cent right-0  a-center j-center partial-black-bg  curved-corners position-fixed pointer-events-none  above-all   overflow-hidden'>
                <video controls  ref={this.vidSave} className=' curved-corners'>
                </video> 
                <div className='width-100-cent pointer-events-none height-200  padding-20 j-center a-center  position-absolute bottom-0'>
                        {ejectFunctions()}
                </div>
        </div>
        :<div   style={{bottom:"0px"}}  
                className='width-100-cent height-100-cent right-0  a-center j-center  partial-black-bg  curved-corners position-fixed pointer-events-none  above-all overflow-hidden'>
                    <video style={{objectFit:"contain"}} ref={this.videoRef} className='curved-corners'>
                    </video>
                    <div className='width-100-cent pointer-events-none height-200  padding-20 j-center a-center  position-absolute bottom-0'>
                        {ejectFunctions()}
                    </div>
            </div>
    }
    attachmentContainer = () => {
        let ejectAttachments = () => {
            return attachMents.map((item,index) =>{
                return <div className='width-50 height-50 cursor-pointer all-center f-column'>
                        <div className='round-up padding-2 elevated-blend nate-white-bg'>
                            <div style={{backgroundColor:`${item.color}`}} 
                                className='width-50 height-50 padding-10 min-width-50 min-height-50 nate-blue-bg nate-white-text round-up all-center'>
                                {item.icon}
                            </div>
                        </div>
                            {/* <span className='all-center'>
                                {item.name}
                            </span> */}
                        </div>
            }) 
        }
        return <div style={{top:"-90px"}} className='width-100-cent  above-all pop-up-rise left-0 j-center f-column   curved-corners  height-100    position-absolute'>
                <div style={{fontSize:20,backgroundColor:""}} className='wdith-100-cent  height-50 min-height-50  j-space-around a-center'>
                    {ejectAttachments()}
                </div>
                {/* <div className='width-100-cent height-100-cent padding-20 grid-view '>
                    {this.getEmojis()}
                </div> */}
            </div>
    }
   
    toggleEmojiContainer = () => {
        this.setState({showEmojis:!this.state.showEmojis,showAttachment:false,showCamera:false,})
    }
    toggleAttachmentContainer = () => {
        this.setState({showAttachment:!this.state.showAttachment,showCamera:false,showEmojis:false})
    }
    toggleCameraContainer = async () => {
        this.setState({showCamera:!this.state.showCamera,finishedRecording:false})
       let streamVideo = () => {
            let video = this.videoRef.current
            video.srcObject = myStream
            video.play()
       }
        if(this.state.streamingActive){
            stopAllTracks(myStream)
            this.setState({showCamera:false,streamingActive:false})
            return 0
        }
        try{
            myStream =  await navigator.mediaDevices.getUserMedia({ audio:true, video: true })
            this.setState({showCamera:true,streamingActive:true},
                streamVideo()    
            )
            console.log(myStream)
        }
        catch {

        }
    }
    componentDidMount () {
        
    }
    render() {
        const {showEmojis,showAttachment,showCamera} = this.state
        return (
           <div className='width-100-cent height-100  j-center a-center '>
            <div className='width-80-cent nate-white-bg margin-r-10 height-50  position-relative j-start padding-l-20 padding-r-20 a-center  curved-corners-more'>
                {   
                    showEmojis
                    ?this.emojiContainer()
                    :null
                }
                {   
                    showAttachment
                    ?this.attachmentContainer()
                    :null
                }
                {   
                    showCamera
                    ?this.cameraContainer()
                    :null
                }
                {
                    showEmojis
                    ?<Close onClick={() => this.toggleEmojiContainer()} className='nate-pink-text margin-r-10  cursor-pointer'/>
                    :<EmojiEmotions onClick={() => this.toggleEmojiContainer()} className='nate-pink-text nate-grey-text margin-r-10  cursor-pointer'/>
                }
                <input onKeyPress = {(e)=>{this.handleEnterKey(e)}} onChange={(e) => {this.handleOnChange(e.target.value)}} ref={this.inputRef} className='width-100-cent height-100-cent outline-none border-0'></input>
                {
                    showAttachment
                    ?<Close onClick={() => this.toggleAttachmentContainer()}  className='cursor-pointer margin-r-5 nate-pink-text'/>
                    :<AttachFile onClick={() => this.toggleAttachmentContainer()} style={{color:"grey"}} className='cursor-pointer margin-r-5'/>
                }
                {
                    showCamera
                    ?<Close onClick={() => this.toggleCameraContainer()}  className='cursor-pointer nate-pink-text'/>
                    :<Camera onClick={() => this.toggleCameraContainer()} style={{color:"#9E9E9E"}} className='cursor-pointer'/>
                }
            </div>
            <div className='width-50 height-50 cursor-pointer round-up nate-gold-bg all-center'>
                <Send onClick = {() => {this.sendMessage()}} style={{width:30, height:30,color:"white"}}/>
            </div>
        </div>
        )
    }
}
