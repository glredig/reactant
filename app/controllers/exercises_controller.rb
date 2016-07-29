class ExercisesController < ApplicationController
	def index
		@exercises = Exercise.all
	end

	def new
		@exercise = Exercise.new()
	end

	def create
		@exercise = Exercise.create(exercise_params)
		if @exercise.save
			redirect_to exercises_path
		else
			flash[:alert] = "Exercise not saved"
			redirect_to new_exercise_path
		end
	end

	def edit
		@exercise = Exercise.find(params[:id])
	end

	def update
		@exercise.update_attributes(exercise_params)
		if @exercise.save
			redirect_to exercise_path(@exercise)
		end
	end

	def destroy
		@exercise = Exercise.find(params[:id])
		@exercise.destroy
		redirect_to exercises_path
	end

	private

	def exercise_params 
		params.require(:exercise).permit(:category, :name, :description, :rating)
	end
end