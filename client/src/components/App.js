import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import Category from "./Category"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/:slug" component={Category} />
      </div>
    </Router>
  )
}
