class Api::MessagesController < ApplicationController
    def index 
        @messages = Message
            .includes(:sender)
            .where(
                "messageable_type= :type AND messageable_id= :id",
                {type: 'Channel',
                 id: '12'})
            .limit(25)
        render :index
    end

    private
    
    def message_params
        params.require(:message).permit(:message_body, :messageable_type, :messageable_id)
    end
    
    
end
