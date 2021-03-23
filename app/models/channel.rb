class Channel < ApplicationRecord
    has_many :subscriptions, as: :subscribeable

    has_many :messages, as: :messableable

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server
end
