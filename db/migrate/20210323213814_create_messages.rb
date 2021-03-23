class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.text :message_body, null: false
      t.references :messageable, polymorphic: true
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false

      t.timestamps
    end

    add_index :messages, :sender_id
    add_index :messages, [:messageable_type, :messageable_id, :sender_id], unique: true, name: 'messabe_index'
  end
end
