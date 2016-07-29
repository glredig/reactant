class CreateExercise < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
    	t.text :category
    	t.text :name
    	t.text :description
    	t.float :rating, default: 3
    end
  end
end
