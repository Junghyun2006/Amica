class Api::SubscriptionsController < ApplicationController
    def index
        @server = Server.find_by(id: params[:server_id])
        # @subscriptions = Subscription.where(subscribeable_id: subscription_params[:subscribeable_id], subscribeable_type: subscription_params[:subscribeable_type])
        @subscriptions = @server.subscriptions
        # render :index
    end

    def create
        @server = (subscription_params[:subscribeable_id] != '0') ? (Server.includes(:subscriptions).find_by(id: subscription_params[:subscribeable_id])) : (Server.includes(:subscriptions).last)
        if @server
            if current_user.subscribed?(@server)
                render "api/servers/show"
            else
                @subscription = Subscription.new(user_id: current_user.id, subscribeable: @server)
                if @subscription.save
                    @server = Server.includes(:subscriptions).find(@server.id) #
                    #need to broadcast to servers
                else
                    render json: @subscription.errors.full_messages, status: 422
                end
            end
        else
            render json: ["The Server does not exist"], status: 404 # temp place holder
        end
    end

    def destroy
        @subscription.find_by(subscribeable_id: params[:subscribeable_id], subscribeable_type: params[:subscribeable_type])

        if @subscription.destroy
            render "api/servers/show"
        end
    end

    private

    def subscription_params
        params.require(:subscription).permit(:subscribeable_id, :subscribeable_type)
    end
end                                           