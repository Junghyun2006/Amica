class Server < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
    has_one_attached :photo
end
