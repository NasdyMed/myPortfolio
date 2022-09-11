import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Nasdy</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+33 7 53 91 96 05</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>mohamednasdy.99@gmail.com</span>
                </div>
            </div>            
            <div className="right"></div>
        </div>
    </div>
  )
}
