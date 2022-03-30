import "./index.scss";
import {Link } from "react-router-dom"
import Me from "../img/me.JPG"


const Sidebar = () =>{ (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Me} className="" />
    </Link>
  </div>
)
}
export default Sidebar