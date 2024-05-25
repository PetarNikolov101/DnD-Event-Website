export default function TopMenu(){
    return(
    <nav>
        <span id="nav_block"></span>
        <ul id="top_menu">
            
            <li id="logo">
                <span>
                <img alt="logo" id='logo_img' src="logo.png"></img>
                <h1 id="naslov">Dungeon Dive</h1>
                </span>
            </li>
            <li id="apply">
                <button className="lang">EN</button>
                <button className="lang">MK</button>
                <button id="application_button" className="btn btn-primary right_side_clickable">Apply Now!</button>            
            </li>
        </ul>
    </nav>
    )
}