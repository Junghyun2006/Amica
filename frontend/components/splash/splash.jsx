import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="content-container-col">
                        <div className="navbar-container">
                            navbar
                        </div>
                        <div className="info-container-1">
                            info-container
                        </div>
                    </div>
                </div>

                <div className="info-container-2">
                    <div className="content-container-row">
                        <div className="content-image-1">
                            content image 1
                        </div>
                        <div className="content-blurb-1">
                            content blurb 1
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;