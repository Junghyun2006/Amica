class Server < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
end
