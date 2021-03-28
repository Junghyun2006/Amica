class RemoveMessageIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, name: "messabe_index"
  end
end
