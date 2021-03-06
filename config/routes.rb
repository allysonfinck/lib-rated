Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'

  get '/books', to: 'books#index'
  get '/books/:id', to: 'books#show'
  post '/books', to: 'books#create'
  delete '/books/:id', to: 'books#delete'
  put '/books/:id', to: 'books#update'

  get '/favorites', to: 'favorites#index'
  get '/favorites/:id', to: 'favorites#show'
  post '/favorites', to: 'favorites#create'
  delete '/favorites/:id', to: 'favorites#delete'
  put '/favorites/:id', to: 'favorites#update'

  get '/ratings', to: 'ratings#index'
  get '/ratings/:id', to: 'ratings#show'
  post '/ratings', to: 'ratings#create'
  delete '/ratings/:id', to: 'ratings#delete'
  put '/ratings/:id', to: 'ratings#update'
end
