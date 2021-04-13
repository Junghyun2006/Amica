class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render :index
    end

    def create 
        @conversation = Conversation.new(name: conversation_params[:name])

        if @conversation.save
            @conversation.subscribe(conversation_params[:users], @conversation.id)
            render :show
        else 
            render json ["- conversation creation error temporary"]
        end
    end

    def show 
        
        @conversation = Conversation.includes(:subscribers).find(params[:id])
        render "api/conversations/show"
    end

    def destroy
        @conversation = Conversation.find_by(id: params[:id])

        if @conversation.destroy 
            render :show
        end
    end

    private

    def conversation_params
        params.require(:conversation).permit(:name, users: [])
    end

end
