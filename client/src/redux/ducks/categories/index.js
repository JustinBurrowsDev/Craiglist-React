// 1. imports
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

// 2. action definitions
const GET = "cats/GET"

// 3. initial state
const initialState = {
  cats: []
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET:
      //payload is what is bundled in your actions
      return { ...state, cats: action.payload }
    default:
      return state
  }
}

// 5. action creators
//Function to pass in the current slug
function getCurrent(slug) {
  return dispatch => {
    axios.get("api/category").then(resp => {
      dispatch({
        type: GET,
        payload: resp.data
      })
    })
  }
}

//Function that is going to get the cartegories
function getCategories() {
  return dispatch => {
    axios.get("/api/categories").then(resp => {
      console.log(resp.data)
      dispatch({
        type: GET,
        payload: resp.data
      })
    })
  }
}

// 6. custom hook
export function useCats() {
  const dispatch = useDispatch()
  const cats = useSelector(appState => appState.catState.cats)
  const get = () => dispatch(getCategories())
  //hook to get the current slug
  const getCurrent = slug => dispatch(getCurrent(slug))

  useEffect(() => {
    get()
  }, [])

  return { cats, get, getCurrent }
}
