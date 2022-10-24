import React from "react";
import './Menu.css'
const Menu = props => {
    //Pode se usar o link importando e trocar o pelo link (import link from react-dom-routers alguma coisa assim)
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/Param/123">Param#01</a>
                    </li>
                    <li>
                        <a href="/Param/legal">Param#02</a>
                    </li>
                    <li>
                        <a href="/NotExites">Nao Existe</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu