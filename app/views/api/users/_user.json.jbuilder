json.extract! user, :username, :id, :tag, :email

user.servers.each do |server|
    json.servers do
        json.set! server.id do
            json.extract! server, :id, :name, :host_id
            json.photoUrl url_for(server.photo)
            json.channels server.channels.map(&:id)
            json.subscriptions do 
                server.subscribers.each do |subscriber|
                    json.set! subscriber.id do 
                        json.partial! "api/users/userfriend", user: subscriber
                    end
                end
            end
        end  
    end
end

user.conversations.each do |conversation|
    json.conversations do
        json.set! conversation.id do
            json.extract! conversation, :id, :name
            json.subscriptions do 
                conversation.subscribers.each do |subscriber|
                    json.set! subscriber.id do 
                        json.partial! "api/users/userfriend", user: subscriber
                    end
                end
            end
        end  
    end
end

json.avatarUrl url_for(user.avatar) if user.avatar.attached?
