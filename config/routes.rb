Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :tasks, only: %w[index create], defaults: { format: 'json' }
  root to: 'site#index'
end
