class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user[:tag] = rand(1..9999) # make sure the tag isnt already used with  the same username, user Activerecord query.
        if @user.save
            sign_in!(@user)
            render "api/users/show"
        else
            render json: ["-Password is too weak or common to use"], status: 422
            #@user.errors.full_messages
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :dob)
    end

end
