import { useEffect, useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../store/review';
import { deleteReview } from '../../store/review';

const SpotReviews = ({spotId}) => {
    const history = useHistory();
    const reviews = useSelector((state) => state.reviews.spot);
    const sessionUser = useSelector((state) => state.session.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews(spotId))
    }, [dispatch, spotId]);


    const deleteReviewHandler = (review) => async (e) => {
        e.preventDefault();
        await dispatch(deleteReview(review));
        alert('Review deleted.')
        history.push(`/`)

    }

    if (!reviews[0]) return console.log('waiting on reviews');

    return (
        <div id="inside-spot-reviews">
            <h1 id="reviews-header">Reviews</h1>
            <div id="reviews-grid">
                { Object.values(reviews).map((review, i) => (

                    <div key={i} id="review-card">
                        <div id="user-real-name">{review?.user?.firstName} {review?.user?.lastName}
                        {sessionUser && sessionUser.id === review.userId && (
                        <div id="del-edit-review-container">
                            <div onClick={deleteReviewHandler(review?.id)} className="delete-review-button">Delete</div>
                            <div id="space" />
                        </div>
                        )}
                        </div>
                        <div id="time-posted">{review?.updatedAt.slice(0, 10)}</div>
                        <div className="stars-card-reviews">★ {review.stars}</div>
                        <div>{review?.review}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SpotReviews;