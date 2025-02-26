import React from 'react';
import '../../assets/style/global.css'
import '../../assets/style/footer.css'
import { ReactComponent as Facebook } from '../../assets/icon/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/icon/twitter.svg';
import { ReactComponent as Instagram } from '../../assets/icon/instagram.svg';

function AppFooter() {

    return(
        <div className="footer">
            <div/>
            <p>&copy; 2025 StoryBook. All rights reserved.</p>
            <a href="https://www.facebook.com/pg/facebook" target="_blank" rel="noreferrer">Contacts</a>
            <a href="https://www.facebook.com/pg/facebook" target="_blank" rel="noreferrer">Directions</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                <Facebook className="icon facebook"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                <Twitter className="icon twitter"/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                <Instagram className="icon instagram"/>
            </a>
            <div/>
        </div>
    );

}

export default AppFooter