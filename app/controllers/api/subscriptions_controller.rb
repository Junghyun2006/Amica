class Api::SubscriptionsController < ApplicationController
    def index
        @subscriptions = Subscription.where(subscribeable_id: params[:subscribeable_id] && subscribeable_type: params[:subscribeable_type])
        render :index
    end

    def show
        @subscription = Subscription.find(params[:id])
    end

    def create
        @subscription = Subscription.new(subscription_params)
        @subscription[:user_id] = current_user.id

        if @subscription.save
            render "api/servers/show"
        else
            render json: ['subscription controller create error']
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