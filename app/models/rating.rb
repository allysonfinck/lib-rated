class Rating
  attr_reader :id, :book_id, :user_id, :rating

  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: 'localhost', port: 5432, dbname: 'lib_rated')
  end

  def initialize(opts = {})
    @id = opts["id"].to_i
    @book_id = opts["book_id"].to_i
    @user_id = opts["user_id"].to_i
    if opts["rating"]
      @rating = opts["rating"]
    end
  end

  def self.all
    results = DB.exec("SELECT * FROM ratings;")
    return results.map {|result| Rating.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM ratings WHERE id=#{id};")
    return Rating.new(results.first)
  end

  def self.create(opts = {})
    results = DB.exec(
      <<-SQL
        INSERT INTO ratings (book_id, user_id, rating)
        VALUES (#{opts["book_id"]}, #{opts["user_id"]}, #{opts["rating"]})
        RETURNING id, book_id, user_id, rating;
      SQL
    )
    return Rating.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM ratings WHERE id=#{id};")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE ratings
        SET book_id=#{opts["book_id"]}, user_id=#{opts["user_id"]}, rating=#{opts["rating"]}
        WHERE id=#{id}
        RETURNING id, book_id, user_id, rating;
      SQL
    )
    return Rating.new(results.first)
  end
end
