class Conversation < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
    has_many :subscribers, through: :subscriptions, source: :user
    has_many :messages, as: :messageable
end
