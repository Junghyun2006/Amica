json.set! message.id do 
    json.message do
        json.set! message.id do 
            json.extract! message, :id, :sender_id, :message_body, :messageable_id, :messageable_type
        end
    end

    json.user do 
        json.partial! "api/users/usermessage", user: message.sender
    end
end

