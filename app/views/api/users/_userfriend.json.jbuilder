json.extract! user, :username, :id, :tag
json.avatarUrl url_for(user.avatar) if user.avatar.attached?