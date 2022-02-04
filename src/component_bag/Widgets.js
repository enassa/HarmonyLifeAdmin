
export const IconHeader = (props) =>{
    const outerStyle= {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        ...props.outerStyles,
    }
    const iconStyles = {
        color:"#9b9b9b",
        marginRight:"20px",
        ...props.innerStyles,
    }
    const textStyles = {
        color:"#9b9b9b",
        ...props.textStyles,
    }
    return <div style={outerStyle} onClick={()=>{props.handleClick()}}>
        <span className={props.outerClasses}   style={iconStyles}>{props.icon}</span>
        <span  style={textStyles}>{props.text}</span>
    </div>
}

// Widgets boilerplate 
// export const IconHeader = (props) =>{
//     const outerStyle= {
//         ...props.outerStyles,
//     }
//     const iconStyles = {
//         ...props.innerStyles,
//     }
//     const textStyles = {
//         ...props.textStyles,
//     }
//     return <div style={outerStyle}>
//         <h2 style={textStyles}>{props.text}</h2>
//         <span style={iconStyles}>{props.icon}</span>
//     </div>
// }