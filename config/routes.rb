Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :posts do 
    resources :comments, shallow: true 
    resources :likes, shallow: true
  end  


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
