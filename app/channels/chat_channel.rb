class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams #check then maybe keep
    @channel = Channel.find_by(id: params[:channel_id])
    stream_for @channel 
  end

  def receive(data)
    # @user = User.find_by(id: data['senderId'])
    @message = Message.new(data)
    
    if @message.save 
      ChatChannel.broadcast_to(@channel, message_json)
    end
    # @channel.messages.create({sender_id: data['senderId'], message_body: data['message_body']});
    
  end

  def unsubscribed
    stop_all_streams #check then maybe keep
    # Any cleanup needed when channel is unsubscribed
  end

  private 

  def message_json
    json = ApplicationController.render(
      partial: "api/messages/message",
      locals: { message: @message})
    JSON.parse(json)
  end
end

#make it dynamic for both converstaion and channels
