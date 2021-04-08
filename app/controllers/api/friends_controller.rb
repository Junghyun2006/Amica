class Api::FriendsController < ApplicationController
    before_action :require_signed_in!

     def index
        @user = current_user
        @friends = @user.friends
        
        render 'api/friends/index'

    end
    

end