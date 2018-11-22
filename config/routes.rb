Rails.application.routes.draw do
  root'email#index'
  devise_for :users
  root to: "home#index"
  resources :tasks, except: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
