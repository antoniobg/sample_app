FactoryGirl.define do 
  factory :user do 
    name      "John Doe"
    email     "user@example.com" 
    password  "foobar"
    password_confirmation "foobar"
  end
end