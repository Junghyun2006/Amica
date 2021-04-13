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
