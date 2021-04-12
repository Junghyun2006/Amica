class Api::ConversationsController < ApplicationController
    def index
        @conversations = Conversation.all
        render :index
    end

    def create 
        @conversation = Conversation.new(conversation_params)

        if @conversation.save
            render :show
        else 
            render json ["- conversation creation error temporary"]
        end
    end

    def show 
        @conversation = Conversation.find(params[:id])
    end

    def destroy
        @conversation = Conversation.find_by(id: params[:id])

        if @conversation.destroy 
            render :show
        end
    end

    private

    def conversation_params
        params.require(:conversation).permit(:name)
    end

end
