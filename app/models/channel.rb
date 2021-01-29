class Channel < ApplicationRecord
    has_many :subscriptions, as: :subscribeable

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server
end
