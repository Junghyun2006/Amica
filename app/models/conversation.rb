class Conversation < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
    has_many :messages, as: :messableable
end
