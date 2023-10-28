import airbnblogo from "./assets/airbnblogo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={airbnblogo} alt="air-bnb logo" className="nav--logo" />

        </nav>
    )
}