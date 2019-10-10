import React from 'react';
import '../styles/Reviews.css'
import FacebookReview from './FacebookReview'
import ScrollableAnchor from 'react-scrollable-anchor'

class Reviews extends React.Component {

    render() {
        return (
            <ScrollableAnchor id={"reviews"}>
                <section className="reviews">
                    <div className="reviews__wrapper">
                        <FacebookReview className="reviews__frame" height="200" src={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkamil.astapionok%2Fposts%2F2074304842618915&width=400"} />
                        <FacebookReview className="reviews__frame" height="200" src={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmichal.hutnik.714%2Fposts%2F1879714208793805&width=400"} />
                        <FacebookReview className="reviews__frame" height="100" src={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fela.kosniezewska%2Fposts%2F2009932449086332&width=400"} />
                        <FacebookReview className="reviews__frame" height="100" src={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmagdalena.wojdyn%2Fposts%2F2502195943145535&width=400"} />
                        <FacebookReview className="reviews__frame" height="80" src={"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpatryk.litke%2Fposts%2F1974458635977754&width=400"} />
                    </div>

                </section>
            </ScrollableAnchor>
        )
    }

}

export default Reviews;