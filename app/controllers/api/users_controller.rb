require 'open-uri'

class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render "api/users/index"
    end

    def create
        @user = User.new(user_params)
        @user[:tag] = rand(1..9999) # make sure the tag isnt already used with  the same username, user Activerecord query.
        if @user.save
            file = open('https://app-amica-seeds.s3.amazonaws.com/default_avatar.jpg')
            @user.avatar.attach(io: file, filename: 'default_avatar.jpg')
            sign_in!(@user)
            render "api/users/show"
        else
            render json: ["- Password is too weak or common to use"], status: 422
            #@user.errors.full_messages
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render "api/users/show"
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :dob)
    end

end
