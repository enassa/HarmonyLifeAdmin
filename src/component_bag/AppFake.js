// import logo from './logo.svg';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter , Route, Switch, withRouter } from "react-router-dom";
import '../../css/nathan.css'
import '../../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';


// export const UserContext = React.createContext();
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  componentDidMount(){
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      console.log(AppState);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
    }
  }
  render () {
    return (
        <BrowserRouter>
          <Switch>
            <Route  path="/" {...this.props} component={Main} />
            <Route  path="/*" {...this.props} component={Main} />
          </Switch>
         </BrowserRouter>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

