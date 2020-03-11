import React, { useEffect } from "react"
import { useCats } from "../hooks"
import { Link } from "react-router-dom"
import { Calendar } from "react-calendar"
import "../styles/main.css"

export default props => {
  const { cats, get } = useCats()

  return (
    <div className="container">
      <aside className="grey">
        <h2>RYANS LIST</h2>

        <a>Create a posting</a>
        <a>My account</a>

        <div className="links">
          <a>event calender</a>
          <Calendar />
          <a href="#">help,faq, abuse, legal</a>
          <a href="#">avoid scams & fraud</a>
          <a href="#">personal safety tips</a>
          <a href="#">terms of usenew</a>
          <a href="#">privacy policy</a>
          <a href="#">system status</a>
          <a href="#">craigslist is hiring in sf</a>
          <a href="#">about craigslist</a>
          <a href="#">craigslist open source</a>
          <a href="#">cbest-of-craigslist</a>
          <a href="#">best-of-craigslist</a>
          <a href="#">craigslist TV</a>
          <a href="#">about craigslist</a>
          <a href="#">craigslist open source</a>
          <a href="#">cbest-of-craigslist</a>
          <a href="#">craigslist joe</a>
          <a href="#">craig newmark philanthropies</a>
        </div>
      </aside>

      <main>
        <h2>Las Vegas</h2>

        <div className="categories">
          {cats.map(parent => (
            <div>
              {/* Catergories */}
              <h4>
                <Link to={"/" + parent.slug}>{parent.name}</Link>
              </h4>

              <div className="sub">
                {/* Sub Categories */}
                {parent.sub.map(child => (
                  <Link to={"/" + child.slug}>{child.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
