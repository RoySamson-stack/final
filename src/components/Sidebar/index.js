import "./index.scss";
import {Link } from "react-router-dom"
import Me from "../img/me.JPG"


const Sidebar = () =>{ (
  <div className="nav-bar">
    <Link className="logo" to="/">
    <h1 className="name-title">RS</h1>   
   </Link>
  </div>
)
}
export default Sidebar