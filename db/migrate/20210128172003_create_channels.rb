class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null:false
      t.integer :server_id, null:false
      t.datetime :created_at, null:false
      t.datetime :updated_at, null:false

      t.timestamps
    end

    add_index :channels, :server_id, unique: true
  end
end
