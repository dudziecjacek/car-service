import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import marker from '../img/marker.png'

const AnyReactComponent = () => {
    const styles = {
        color: 'green',
        backgroundImage: `url(${marker})`,
        backgroundSize: 'contain',
        width: '60px',
        height: '60px',
        transform: 'translate(-30px, -60px)'
    }
    return (
        <div style={styles}>
        </div>)
};

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 50.7905,
            lng: 17.0396
        },
        zoom: 12
    };

    render() {
        const styles = {
            // height: '350px',
            // flexBasis: '45%'
        }
        return (
            // Important! Always set the container height explicitly
            <div style={styles} className="contactMe__map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB2UGJY9Rr7OwV030tm6MgsnZHgEyp2E10" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={50.7905}
                        lng={17.0396}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;