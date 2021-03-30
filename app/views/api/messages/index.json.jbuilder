@messages.each do |message|
    json.set! message.id do 
        json.partial! "api/messages/indexmessage", message: message
        # json.partial! "api/users/usermessage", user: message.sender
    end
    # json.user do 
    #     json.partial! "api/users/usermessage", user: message.sender
    # end
end
