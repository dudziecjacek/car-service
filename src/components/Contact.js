import React from 'react';
import './Contact.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
configureAnchors({ offset: -80, scrollDuration: 400 })
class Contact extends React.Component {

    render() {
        const mapStyles = {
            width: '80%',
            height: '100%',
            margin: '50px auto',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
        };
        return (
            <ScrollableAnchor id={'contactMe'}>
                <div className="contactMe">
                    <Map className="contactMe"
                        google={this.props.google}
                        zoom={12}
                        style={mapStyles}
                        initialCenter={{ lat: 50.7905, lng: 17.0396 }}>
                        <Marker position={{ lat: 50.7905, lng: 17.0396 }} />
                    </Map>
                </div>
            </ScrollableAnchor>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2UGJY9Rr7OwV030tm6MgsnZHgEyp2E10'
})(Contact);