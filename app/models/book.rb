class Book
  attr_reader :id, :title, :author, :date_published, :genre, :description, :cover_art, :rating

  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: 'localhost', port: 5432, dbname: 'lib_rated')
  end

  def initialize(opts = {})
    @id = opts['id'].to_i
    @title = opts['title']
    @author = opts['author']
    if opts["date_published"]
      @date_published = opts['date_published']
    end
    if opts["genre"]
      @genre = opts['genre']
    end
    if opts["description"]
      @description = opts['description']
    end
    @cover_art = opts['cover_art']
    if opts['rating']
      @rating = opts['rating'].to_i
    end
  end

  def self.all
    results = DB.exec("SELECT * FROM books;")
    return results.map {|result| Book.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM books WHERE id=#{id};")
    return Book.new(results.first)
  end

  def self.create(opts = {})
    results = DB.exec(
      <<-SQL
        INSERT INTO books (title, author, date_published, genre, description, cover_art, rating)
        VALUES ('#{opts["title"]}', '#{opts["author"]}', '#{opts["date_published"]}', '#{opts["genre"]}', '#{opts["description"]}', '#{opts["cover_art"]}', #{opts["rating"]})
        RETURNING id, title, author, date_published, genre, description, cover_art, rating;
      SQL
    )
    return Book.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM books WHERE id=#{id};")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE books
        SET title='#{opts["title"]}', author='#{opts["author"]}', date_published='#{opts["date_published"]}', genre='#{opts["genre"]}', description='#{opts["description"]}', cover_art='#{opts["cover_art"]}', rating=#{opts["rating"]}
        WHERE id=#{id}
        RETURNING id, title, author, date_published, genre, description, cover_art, rating;
      SQL
    )
    return Book.new(results.first)
  end
end
