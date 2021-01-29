class ChannelUpdate < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, :server_id
    add_index :channels, :server_id
  end
end
