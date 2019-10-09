import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class Maps extends React.Component {

    render() {
        const mapStyles = {

        };
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 50.7905, lng: 17.0396 }}>
                <Marker position={{ lat: 50.7905, lng: 17.0396 }} />
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2UGJY9Rr7OwV030tm6MgsnZHgEyp2E10'
})(Maps);