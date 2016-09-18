class Api::V1::ExercisesController < Api::V1::BaseController
	def index
		respond_with Exercise.all
	end

	def create
		respond_with :api, :v1, Exercise.create(exercise_params)
	end

	def update
		exercise = Exercise.find(params[:id])
		exercise.update_attributes(exercise_params)
		respond_with exercise, json: exercise
	end

	def destroy
		respond_with Exercise.destroy(params[:id])
	end

	private

	def exercise_params 
		params.require(:exercise).permit(:category, :name, :description, :rating)
	end
end