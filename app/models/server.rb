class Server < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
    has_one_attached :photo

    has_many :channels,
        foreign_key: :server_id,
        class_name: :Channel
end
