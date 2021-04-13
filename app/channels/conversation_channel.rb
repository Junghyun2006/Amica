class ConversationChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    @conversation = Conversation.find_by(id: params[:id])
    
    stream_for @conversation
  end

  def receive(data)
    @message = Message.new(data)

    if @message.save
      ConversationChannel.broadcast_to(@conversation, message_json)
    end

  end

  def unsubscribed
    stop_all_streams
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
