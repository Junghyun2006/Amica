class Conversation < ApplicationRecord
    has_many :subscriptions, as: :subscribeable
    has_many :subscribers, through: :subscriptions, source: :user
    has_many :messages, as: :messageable

    def subscribe(user_ids, conv_id)
        user_ids.each do |user_id| 
            Subscription.create(
                subscribeable_type: 'Conversation',
                subscribeable_id: conv_id,
                user_id: user_id
            )
        end
    end
end
