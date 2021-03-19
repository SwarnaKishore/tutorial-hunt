import React from 'react';

export const NavBar = () =>   {
    return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container"> 
                        <a className="brand-logo">Tutorial Hunt</a>
                    </div>
                
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {/* <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
    )
}


