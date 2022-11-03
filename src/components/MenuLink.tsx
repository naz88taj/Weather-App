import { Link } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink(){
    return(
        <div className="menu-bar-container">
            <div className="menu-bar">
                <nav>
                    <ul style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        listStyleType: "none",
                    }}>
                        <li>
                            <Link to="/weather">Detroit MI Weather</Link>
                        </li>
                        {/* <li>
                            <Link to="/lat">Detroit MI Weather</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}