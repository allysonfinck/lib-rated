class User
  attr_reader :id, :username, :password, :favorites

  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: 'localhost', port: 5432, dbname: 'lib_rated')
  end


  def initialize(opts = {})
    @id = opts['id'].to_i
    @username = opts['username']
    @password = opts['password']
    if opts["favorites"]
      @favorites = opts["favorites"]
    end
  end

  def self.all
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          favorites.book_id AS favorited_book_id,
          books.title AS favorited_book_title,
          books.author AS favorited_book_author,
          books.cover_art AS favorited_book_cover_art
        FROM users
        LEFT JOIN favorites
          ON favorites.user_id = users.id
        LEFT JOIN books
          ON favorites.book_id = books.id;
      SQL
    )
    users = []
    last_person_id = nil
    results.map do |result|
      if result["id"] != last_person_id
        new_user = User.new({
          "id" => result["id"],
          "username" => result["username"],
          "password" => result["password"],
          "favorites" => []
          })
        users.push(new_user)
        last_person_id = result["id"]
      end
      if result["favorited_book_id"]
        new_book = Book.new({
          "id" => result["favorited_book_id"],
          "title" => result["favorited_book_title"],
          "author" => result["favorited_book_author"],
          "cover_art" => result["favorited_book_cover_art"]
        })
        users.last.favorites.push(new_book)
      end
    end
    return users
  end

  def self.find(id)
    results = DB.exec(
      <<-SQL
        SELECT
          users.*,
          favorites.book_id AS favorited_book_id,
          books.title AS favorited_book_title
        FROM users
        LEFT JOIN favorites
          ON favorites.user_id = users.id
        LEFT JOIN books
          ON favorites.book_id = books.id
        WHERE users.id = #{id};
      SQL
    )
    result = results.first
    favorites = []
    results.map do |result|
      if result["favorited_book_id"]
        favorites.push(Book.new({
          "id" => result["favorited_book_id"],
          "title" => result["favorited_book_title"],
          "author" => result["favorited_book_author"],
          "cover_art" => result["favorited_book_cover_art"]
          }))
      end
    end
    user = User.new({
      "id" => result["id"],
      "username" => result["username"],
      "password" => result["password"],
      "favorites" => favorites
    })
    return user
  end

  def self.create(opts = {})
    results = DB.exec(
      <<-SQL
        INSERT INTO users (username, password)
        VALUES ('#{opts["username"]}', '#{opts["password"]}')
        RETURNING id, username, password;
      SQL
    )
    return User.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM users WHERE id=#{id};")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE users
        SET username='#{opts["username"]}', password='#{opts["password"]}'
        WHERE id=#{id}
        RETURNING id, username, password;
      SQL
    )
    return User.new(results.first)
  end
end
