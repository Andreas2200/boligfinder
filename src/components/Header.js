import "../styles/header.css"
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <div className="header">
            <Link to="/" className="link linkGrid">
                <p className="header-title">BoligFinder</p>
            </Link>
            <div className="pages">
                <Link to="/search" className="link">SearchPage</Link>
                <Link to="/apartment" className="link">ApartmentPage</Link>
                <Link to="/realtor" className="link">RealtorProfilePage</Link>
            </div>
        </div>
    )
}