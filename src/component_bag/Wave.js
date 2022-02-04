import React from 'react';
import  "../css/waveanimation.css"
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Wave extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className={"waveWrapper waveAnimation"}>
        <div className={"waveWrapperInner bgTop"}>
          <div className={"wave waveTop"} style={{backgroundImage: "url('../resources/images/wave-top.png)"}}></div>
        </div>
        <div className={"waveWrapperInner bgMiddle"}>
          <div className={"wave waveMiddle"} style={{backgroundImage: "url('../resources/images/ave-mid.png')"}}></div>
        </div>
        <div className={"waveWrapperInner bgBottom"}>
          <div className={"wave waveBottom"} style={{backgroundImage: "url('../resources/images/wave-bot.png')"}}></div>
        </div>
      </div>
    }
}

Wave.propTypes = propTypes;
Wave.defaultProps = defaultProps;
// #endregion

export default Wave;