json.extract! server, :id, :name, :host_id
if server.photo.attached?
    json.photoUrl url_for(server.photo) 
end
json.channels server.channels.map(&:id)

json.subscriptions do 
    server.subscribers.each do |subscriber|
        json.set! subscriber.id do 
            json.partial! "api/users/userfriend", user: subscriber
        end
    end
end

