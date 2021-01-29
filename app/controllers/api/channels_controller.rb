class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.where(server_id: params[:server_id])
        render :index
    end

    def create
        @channel = Channel.new(channel_params)
        @channel[:host_id] = current_user.id
            
        if @channel.save
            render "api/channels/show"
        else
            render json: ["- Must be between 2 and 100 in length."], status: 422
        end
    end
    
    def show
        @channel = Channel.find(params[:id])
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel.update(channel_params)
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])

        if @channel.destroy
            render "api/channels/show"
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name)
    end

end