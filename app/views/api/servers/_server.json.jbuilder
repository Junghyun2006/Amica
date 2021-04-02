json.extract! server, :id, :name, :host_id
json.photoUrl url_for(server.photo) if server.photo.attached?
json.channels server.channels.map(&:id)

json.subscriptions do 
    server.subscribers.each do |subscriber|
        json.set! subscriber.id do 
            json.partial! "api/users/userfriend", user: subscriber
        end
    end
end

