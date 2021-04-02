json.extract! user, :username, :id
json.avatarUrl url_for(user.avatar) if user.avatar.attached?