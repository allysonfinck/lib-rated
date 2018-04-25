class User
  attr_reader :id, :username, :password

  DB = PG.connect(host: 'localhost', port: 5432, dbname: 'lib_rated')

  def initialize(opts = {})
    @id = opts['id'].to_i
    @username = opts['username']
    @password = opts['password']
  end

  def self.all
    results = DB.exec("SELECT * FROM users;")
    return results.map {|result| User.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM users WHERE id=#{id};")
    return User.new(results.first)
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
