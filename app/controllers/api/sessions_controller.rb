class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password])

        if @user
            sign_in!(@user)
            render 'api/users/show';
        else
            render json: ["-Login or password is invalid."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            sign_out!
            render "api/users/show"
        else
            render json: ["No user is currently signed in"], status: 404
        end
    end
end