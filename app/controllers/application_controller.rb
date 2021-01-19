class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :logged_in?, :current_user

    private

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
    
    def log_in!(user)
        @current_user = user
        session[:session_token] =  user.reset_session_token!
    end

    def log_out!
        session[:session_token] = nil
        @current_user.reset_session_token!  
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in!
        redirect_to new_session_url unless logged_in?
    end
end
