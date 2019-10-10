import React from 'react';

function FacebookReview(props) {
    const styles = {
        width: (window.innerWidth < 400 ? 300 : 400),
        color: 'red'
    }

    return (
        <iframe src={props.src} title="review1" width={styles.width} height={props.height} style={{ overflow: 'hidden', margin: '20px', border: '1px solid #3b5998', borderRadius: '5px', paddingBottom: '10px', backgroundColor: 'white' }} scrolling="no" frameBorder="0" allow="encrypted-media"></iframe>
    )
}

export default FacebookReview