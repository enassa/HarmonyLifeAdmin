// import React from 'react';
import React, { Component } from "react";
import "../../css/scroll-component.css";
import Loader from "./../../reusable-components/Loader";
import Explorer, {
  POST,
} from "./../../machinery/objects/InternetExplorer";
import PropTypes from "prop-types";
/**
 *
 * This component is basically a wrapper.
 * It is used to wrap items that are expected to change and reload overtime with the addition of new content
 * Check the bottom of this file to see a detailed summary of how it works, and whats needed to make it work
 * @prop {func} onReceiveContent
 * @prop {string} URL
 * @prop {object} urlPostData | form data to be passed when hitting the URL
 */
class ScrollComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      prevScrollPosition: 0,
    };
  }

  handleObserver(entities, observer) {
    try {
      const currentScrollPosition = entities[0].boundingClientRect.y;
      if (this.state.prevScrollPosition > currentScrollPosition) {
        this.getContent();
      }
      this.setState({ prevScrollPosition: currentScrollPosition });
    } catch (ex) {
      console.log("SCROLL COMPONENT: ", ex.toString());
    } 
  }
  getContent() {
    const { URL, onReceiveContent, urlPostData } = this.props;
    // if(!URL) { console.log("NOT THIND HERE HBOR",URL); return;};
    this.setState({ loading: true });
    
    Explorer.roamAndFind(URL, POST, urlPostData)
      .then((response) => {
        if (!onReceiveContent) return;
        onReceiveContent(response);
        this.setState({ loading: false });
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }
  componentDidMount() {
    this.getContent();
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.observerDiv);
  }
  render() {
    const loaderState = { display: this.state.loading ? "block" : "none" };
    return (
      // All you need to do is to
      <div className="main-scroll-container">
        <div className="sub-scroll-container">
          <div className="scroll-items-wrapper">
            {/* Items to be scrolled goes here  */}
            {this.props.children}
            <center>
              <div style={{ ...loaderState, marginTop: 10 }}>
                <Loader type="secondary" height={30} width={30} />
              </div>
            </center>
          </div>
          {/* When this div is scrolled into view, a functiion is fired to request more items */}
          <div
            style={{ height: 70 }}
            className="observed-div"
            ref={(observerDiv) => (this.observerDiv = observerDiv)}
          ></div>
        </div>
      </div>
    );
  }
}
ScrollComponent.propTypes = {
  onReceiveContent: PropTypes.func.isRequired,
  URL: PropTypes.string.isRequired,
  urlPostData: PropTypes.object,
};
ScrollComponent.defaultProps = {
  onReceiveContent: () => {},
  URL: "",
  urlPostData: {},
};
export default ScrollComponent;
/**
 *
 * HOW THIS COMPONENT WORKS
 * Its simple, a div that is always located at the bottom of the page is being observed EVERYTIME(see div with className="observed-div").
 * Everytime that div comes into full view, it triggers a function.
 * Monitoring the div coming into full view, is done by using the normal JS entity observer, and constantly logging the scroll position to the state.
 * Check handleObserver() to see how the observed div in full view is triggered
 * Moving on,
 * When the observed div is in full view, it fires a function that always fetches data.
 * To fetch data, the function needs a URL. This custom URL is always passed via props to the component.
 * When the URL is hit, and data is returned, all the data that is collected from the URL, is passed into the onReceiveContent
 * function, that is also a function that is passed as props from outside the component to receive whatever this component retrieves
 * from the URL provided.
 * --------------------------------------------------------------
 * NOW, PLEASE TAKE NOTE
 * --------------------------------------------------------------
 * 1. This component is not responsible for rendering any of the items it retrieves from the URL it is given
 * It is up to you to create your render function that will react to the data that this component provides
 * to just spit out the JSX elements, as children.
 * 2. This component is not responsible for reconfiguring URLS it is given. It will only run whatever URL you will give it.
 * So, if you need your URL to change based on the data that is retrieved,you would have to manage and configure the new URL yourself outside of
 * this component and just update the props value of the URL
 *
 */
