import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import App from "./app";
import Home from "./admin/home";
// import About from "./admin/about";
// import Rooms from "./admin/rooms";
// import FAQ from "./admin/faq";
// import GuestHome from "./client/guestHome";
// import GuestAbout from "./client/guestAbout";
// import GuestRooms from "./client/guestRoom";
// import GuestFAQ from "./client/guestFaq";



let router;

const store = createStore(reducer, applyMiddleware(reduxPromise));

const adminRouter = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      {/* <Route path="/about" component={About} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/faq" component={FAQ} /> */}
      <IndexRoute component={Home} /> 
    </Route>
  </Router>
</Provider>
);

// const guestRouter = (
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//     <Route path="/about" component={GuestAbout} />
//     <Route path="/rooms" component={GuestRoom} />
//     <Route path="/faq" component={GuestFAQ} />
//     <IndexRoute component={GuestHome} />
//   </Route>
// </Router>
// )

if (location.pathname == "/welcome") {
  router = notLoggedInRouter;
} else {
  router = adminRouter;
}

ReactDOM.render(router, document.querySelector("main"));
