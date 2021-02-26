class Api::ServersController < ApplicationController
    def index 
        @servers = Server.all
        render :index
    end

    def create
        @server = Server.new(server_params)
        @server[:host_id] = current_user.id
            
        if @server.save 
            render "api/servers/show"
        else
            render json: ["- Must be between 2 and 100 in length."], status: 422
        end

        

    end

    def show
        @server = Server.find(params[:id])
    end

    def update
        @server = Server.find_by(id: params[:id])
        if @server.update(server_params)
            render "api/servers/show"
        else
            render json: @server.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @server = Server.find_by(id: params[:id])

        if @server.destroy
            render "api/servers/show"
        end
    end

    private

    def server_params
        params.require(:server).permit(:name)
    end


end

