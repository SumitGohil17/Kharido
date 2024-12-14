import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { Textarea } from './ui/textarea';
function Reviews({ product_id, onReviewCount }) {

    const [reviews, setReviews] = useState([]);
    const [isLogg, setIsLogg] = useState(Cookies.get('token'));
    const [newReview, setNewReview] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // Fetch reviews for the product
        const fetchReviews = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/review/getReview/${product_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${isLogg}`
                    }
                });
                const data = await response.json();
                setReviews(data.reviews);
                onReviewCount(data.reviews.length)
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [product_id]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/review/addReview`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${isLogg}`
                },
                body: JSON.stringify({
                    product_id: product_id,
                    message: newReview
                })
            });

            if (response.ok) {
                // const data = await response.json();
                // setReviews([...reviews, data]);
                alert(response.message)
                setNewReview('');
                window.location.reload();
            }
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewReview(prev => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // };


    return (
        <div className="max-w-5xl">

            {isLogg ? (
                <form onSubmit={handleSubmitReview} className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-600">Your Review</label>
                        <Textarea
                            name="message"
                            value={newReview}
                            onChange={(e) => setNewReview(e.target.value)}
                            className="w-full min-h-[120px] resize-none focus:ring-[#c8a165]"
                            placeholder="Share your thoughts about this product..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#c8a165] text-white px-8 py-3 rounded-md hover:bg-[#b38c4d] transition duration-200 ease-in-out shadow-sm"
                    >
                        Submit Review
                    </button>
                </form>
            ) : (
                <div className="mb-8 p-6 bg-gray-50 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">Please log in to write a review</p>
                </div>
            )}

            <div className="space-y-2">
                {reviews && reviews.length > 0 ? (
                    reviews.slice(0, showAll ? reviews.length : 4).map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-10 w-10 rounded-full bg-[#c8a165] flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            {review.userName.username.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-800">{review.userName.username}</span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(review.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{review.message}</p>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No reviews yet. Be the first to review this product!
                    </div>
                )}

                {reviews && reviews.length > 4 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="w-full text-center py-3 text-[#c8a165] hover:text-[#b38c4d] font-medium transition duration-200"
                    >
                        {showAll ? '← Show Less Reviews' : 'Show All Reviews →'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Reviews