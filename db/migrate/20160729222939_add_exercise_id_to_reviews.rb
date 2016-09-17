class AddExerciseIdToReviews < ActiveRecord::Migration
  def change
  	add_column :reviews, :exercise_id, :integer
  end
end
