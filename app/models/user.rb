class User < ActiveRecord::Base
  validates_presence_of :username, :password_digest, :session_token
  validates :password, length: {minimum: 6, allow_nil: true}
  validates_uniqueness_of :username

  after_initialize :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password;
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= session_token_gen
  end

  def session_token_gen
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = session_token_gen
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user.is_password?(password)
      return user
    end

    return nil
  end
end
