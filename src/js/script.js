import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"


import Layout from "./pages/Layout"
import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Layout}></Route>
  <IndexRoute component={Layout}></IndexRoute>
  <Route path="/packets" component={PageOne}></Route>
  <Route path="/offers" component={PageTwo}></Route>
  <Route path="/stores" component={PageTwo}></Route>
  <Route path="/faq" component={PageTwo}></Route>
  </Router>,
  document.getElementById('app')
  );