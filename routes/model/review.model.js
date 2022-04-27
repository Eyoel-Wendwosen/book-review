const mongoose = require('mongoose');

const ReviewSchema = require('../schema/review.schema');

const ReviewModel = mongoose.model("review", ReviewSchema);

function createReview(review) {
    return ReviewModel.create(review);
}

function getReviewsByUsername() {
    // return ReviewModel.find({
        
    // }).exec();
}

function getAllReviews() {
    return ReviewModel.find().exec();
}

function getReviewById(id) {
    return ReviewModel.findById(id).exec();
}

module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    getReviewsByUsername,
}