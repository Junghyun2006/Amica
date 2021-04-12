json.extract! conversation, :name

json.subscriptions do 
    conversation.subscribers.each do |subscriber|
        json.set! subscriber.id do 
            json.partial! "api/users/userfriend", user: subscriber
        end
    end
end
