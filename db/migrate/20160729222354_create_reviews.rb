class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.text :name
    	t.text :comments
    	t.integer :rating, default: 3
    end
  end
end
