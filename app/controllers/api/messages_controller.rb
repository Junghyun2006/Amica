class Api::MessagesController < ApplicationController

    private
    
    def message_params
        params.require(:message).permit(:message_body)
    end
    
    
end
