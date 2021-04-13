json.extract! user, :id, :username, :tag
json.avatarUrl url_for(user.avatar)
