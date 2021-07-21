class Rewrites < ActiveRecord::Migration[6.1]
  def change
    create_table :rewrites do |t|
      t.string :title
      t.string :rewritten_lyrics
      t.integer :song_id
      t.integer :user_id

      t.timestamps
    end
  end
end