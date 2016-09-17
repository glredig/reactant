class Exercise < ActiveRecord::Base
	has_many :reviews, dependent: :destroy

	CATEGORIES = ['weights', 'cardio', 'flexibility', 'coordination', 'bodyweight']
end