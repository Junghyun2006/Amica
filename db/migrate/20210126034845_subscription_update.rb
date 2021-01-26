class SubscriptionUpdate < ActiveRecord::Migration[5.2]
  def change
    add_index :subscriptions, [:subscribeable_type, :subscribeable_id, :user_id], unique: true, name: 'subscription_index'
  end
end
