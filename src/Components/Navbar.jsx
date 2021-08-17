import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

const Navbar = () => {
    const { spotifyID } = useContext(DataContext);

    return (
        <header>
            <nav>
                <p>aChord</p>
                
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/composers'>Composers</Link>
                    </li>
                </ul>
            </nav>
            
            <iframe src={`https://open.spotify.com/embed/track/${spotifyID}`} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify Player"></iframe>
        </header>
    )
}

export default Navbar
