class Favorite
  attr_reader :id, :book_id, :user_id

  DB = PG.connect(host: 'localhost', port: 5432, dbname: 'lib_rated')

  def initialize(opts = {})
    @id = opts["id"].to_i
    @book_id = opts["book_id"].to_i
    @user_id = opts["user_id"].to_i
  end

  def self.all
    results = DB.exec("SELECT * FROM favorites;")
    return results.map {|result| Favorite.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM favorites WHERE id=#{id};")
    return Favorite.new(results.first)
  end

  def self.create(opts = {})
    results = DB.exec(
      <<-SQL
        INSERT INTO favorites (book_id, user_id)
        VALUES (#{opts["book_id"]}, #{opts["user_id"]})
        RETURNING id, book_id, user_id;
      SQL
    )
    return Favorite.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM favorites WHERE id=#{id};")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE favorites
        SET book_id=#{opts["book_id"]}, user_id=#{opts["user_id"]}
        WHERE id=#{id}
        RETURNING id, book_id, user_id;
      SQL
    )
    return Favorite.new(results.first)
  end
end
