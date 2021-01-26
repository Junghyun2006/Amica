class Subscription < ApplicationRecord
  belongs_to :subscribeable, polymorphic: true
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
