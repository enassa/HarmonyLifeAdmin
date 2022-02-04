import React, { Component } from 'react';


class Header extends Component {
    render() {
        const styles = {
            outerStyles:{
            display:"flex", 
            flexFlow:"column", 
            justifyContent:"flex-start", 
            width:"100%", 
            height:"100px",
            ...this.props.style,
            },
            titleStyles:{
                color:"darkblue",
                ...this.props.titleStyles
            },
            subtitleStyles:{
                color:"grey",
                // marginTop:"8px",
                ...this.props.subtitleStyles
            }
        }
       
        return (          
        <div id="header-main-container" 
            style={styles.outerStyles}
        >
            <h3 style={styles.titleStyles}>{this.props.title?this.props.title:"Welcome😎😎, Isaac Newton"}</h3>
            {this.props.subtitle?<p style={styles.subtitleStyles}>{this.props.subtitle}</p>:null}
        </div>
        );
    }
}

export default Header;
