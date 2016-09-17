Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'site#index'

  namespace :api do
  	namespace :v1 do
    	resources :exercises
    	resources :reviews, only: [:new, :create]
    end
  end
end
