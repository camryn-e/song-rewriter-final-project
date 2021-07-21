class Songs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :original_lyrics
      
      t.timestamps
    end
  end
end
