json.extract! user, :username, :id

user.servers.each do |server|
    json.servers do
        json.set! server.id do
            json.extract! server, :id, :name, :host_id
            json.photoUrl url_for(server.photo)
            json.channels server.channels.map(&:id)
        end  
    end
end

json.avatarUrl url_for(user.avatar) if user.avatar.attached?
