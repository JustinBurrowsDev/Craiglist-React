const express = require("express")
const router = express.Router()
//connection to the database file
const connection = require("../db")

//go get all of the categories
router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM ryanslist.categories;`

  // err - errors connecting to the database
  // results- results that your asking for
  // fields - are all the fields that your looking for

  connection.query(sql, (err, results, fields) => {
    //go get me the parent categories
    const categories = results
      .filter(c => c.parent_id == null)
      //naw go get me all the sub categories and place
      //them with their respective parent catergory based of the parent id
      // and place that info into an array
      .map(p => ({
        ...p,
        sub: results.filter(c => c.parent_id == p.id)
      }))

    console.log(err)
    res.json(categories)
  })
})
//created the slug
router.get("/categories/:slug", (req, res, next) => {
  const slug = req.params.slug

  const sql = "SELECT * FROM * categories"
})

module.exports = router
