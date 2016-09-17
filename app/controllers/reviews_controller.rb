class ReviewsController < ApplicationController
	def new
		@exercise = Exercise.find(params[:exercise_id])
		@review = Review.new
	end

	def create
		@review = Review.create(review_params)
		if @review.save
			redirect_to exercises_path
		else
			flash[:alert] = "Review couldn't be saved"
		end
	end

	private

	def review_params
		params.require(:review).permit(:name, :comments, :rating, :exercise_id)
	end
end