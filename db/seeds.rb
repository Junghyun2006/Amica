require 'open-uri'

User.delete_all
Server.delete_all
Subscription.delete_all
Channel.delete_all
Message.delete_all
Friendship.delete_all
Conversation.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('servers')
ActiveRecord::Base.connection.reset_pk_sequence!('subscriptions')
ActiveRecord::Base.connection.reset_pk_sequence!('channels')
ActiveRecord::Base.connection.reset_pk_sequence!('messages')
ActiveRecord::Base.connection.reset_pk_sequence!('friendships')
ActiveRecord::Base.connection.reset_pk_sequence!('conversations')


#users

demo = User.create!(
    username: 'DemoUser',
    password: 'password',
    email: 'demo@gmail.com',
    tag: '5162',
    dob: '2009-09-16'
)

file = open('https://app-amica-seeds.s3.amazonaws.com/poro_demo.jpeg')
demo.avatar.attach(io: file, filename: 'poro_demo.jpeg')

user_2 = User.create!(
    username: 'Irelia',
    password: 'password',
    email: 'testuser1@gmail.com',
    tag: '4152',
    dob: '2003-09-15'
)

file = open('https://app-amica-seeds.s3.amazonaws.com/irelia.jpeg')
user_2.avatar.attach(io: file, filename: 'irelia.jpeg')




user_3 = User.create!(
    username: 'OnlyYasuoJungle',
    password: 'password',
    email: 'testuser2@gmail.com',
    tag: '3562',
    dob: '1994-04-03'
)

file = open('https://app-amica-seeds.s3.amazonaws.com/yasuo.jpeg')
user_3.avatar.attach(io: file, filename: 'yasuo.jpeg')


# servers

server_1 = Server.create!(
    name: 'Red Car Fans',
    host_id: 1
)

file1 = open('https://app-amica-seeds.s3.amazonaws.com/red_car.jpg')
server_1.photo.attach(io: file1, filename: 'red_car.jpg')

server_2 = Server.create!(
    name: 'White Car Fans',
    host_id: 2
)

file2 = open('https://app-amica-seeds.s3.amazonaws.com/white_car.jpeg')
server_2.photo.attach(io: file2, filename: 'white_car.jpeg')

server_3 = Server.create!(
    name: 'Yellow Car Fans',
    host_id: 3
)

file3 = open('https://app-amica-seeds.s3.amazonaws.com/yellow_car.jpg')
server_3.photo.attach(io: file3, filename: 'yellow_car.jpg')

server_4 = Server.create!(
    name: 'Epic Seven',
    host_id: 1
)

file4 = open('https://app-amica-seeds.s3.amazonaws.com/cdomimg.png')
server_4.photo.attach(io: file4, filename: 'cdomimg.png')

server_5 = Server.create!(
    name: 'App Academy',
    host_id: 1
)

file5 = open('https://app-amica-seeds.s3.amazonaws.com/AAcademyimg.png')
server_5.photo.attach(io: file5, filename: 'AAcademyimg.png')

server_6 = Server.create!(
    name: 'Lost in Potato',
    host_id: 1
)

file6 = open('https://app-amica-seeds.s3.amazonaws.com/potatoimg.png')
server_6.photo.attach(io: file6, filename: 'potatoimg.png')

#subscriptions

subscription_1 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '1',
    user_id: 1
)

subscription_2 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '2',
    user_id: 1
)

subscription_3 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '3',
    user_id: 1
)

subscription_4 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '4',
    user_id: 1
)

subscription_5 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '4',
    user_id: 2
)

subscription_6 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '1',
    user_id: 3
)

subscription_7 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '5',
    user_id: 1
)

subscription_8 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '6',
    user_id: 1
)

# channels

channel_1 = Channel.create!(
    name: 'general-chat',
    server_id: 1
)

channel_2 = Channel.create!(
    name: 'vacation-planning',
    server_id: 1
)
channel_3 = Channel.create!(
    name: 'study-help',
    server_id: 1
)
channel_4 = Channel.create!(
    name: 'game-chat',
    server_id: 1
)
channel_5 = Channel.create!(
    name: '-random',
    server_id: 1
)

channel_6 = Channel.create!(
    name: 'vacation-planning',
    server_id: 2
)
channel_7 = Channel.create!(
    name: 'study-help',
    server_id: 2
)
channel_8 = Channel.create!(
    name: 'game-chat',
    server_id: 2
)
channel_9 = Channel.create!(
    name: '-random',
    server_id: 3
)

channel_10 = Channel.create!(
    name: 'general-chat',
    server_id: 2
)

channel_11 = Channel.create!(
    name: 'general-chat',
    server_id: 3
)

channel_12 = Channel.create!(
    name: 'general-chat',
    server_id: 4
)

channel_13 = Channel.create!(
    name: 'general-chat',
    server_id: 5
)

channel_14 = Channel.create!(
    name: 'general-chat',
    server_id: 6
)

channel_15 = Channel.create!(
    name: 'guidance-grounds',
    server_id: 4
)

channel_16 = Channel.create!(
    name: 'grade-my-hero',
    server_id: 4
)

channel_17 = Channel.create!(
    name: 'fan-art-board',
    server_id: 4
)

channel_18 = Channel.create!(
    name: 'off-topic',
    server_id: 4
)

channel_19 = Channel.create!(
    name: 'coding',
    server_id: 5
)

channel_20 = Channel.create!(
    name: 'homework-spoilers',
    server_id: 5
)

channel_21 = Channel.create!(
    name: 'learning-resources',
    server_id: 5
)

channel_21 = Channel.create!(
    name: 'chit-chat',
    server_id: 6
)

channel_22 = Channel.create!(
    name: 'rules',
    server_id: 6
)

channel_23 = Channel.create!(
    name: 'emoji-list',
    server_id: 6
)

# messages

message_1 = Message.create!(
    messageable_type: 'Channel',
    messageable_id: '12',
    sender_id: '1',
    message_body: 'Epic Seven is so much fun!',
    created_at: '2021-03-03T17:40:38.800Z'
)

message_2 = Message.create!(
    messageable_type: 'Channel',
    messageable_id: '12',
    sender_id: '2',
    message_body: 'I know right, I shouldve downloaded it earlier.',
    created_at: '2021-03-31T17:40:38.800Z'
)

message_3 = Message.create!(
    messageable_type: 'Channel',
    messageable_id: '12',
    sender_id: '1',
    message_body: 'better now than later'
)

message_4 = Message.create!(
    messageable_type: 'Channel',
    messageable_id: '12',
    sender_id: '1',
    message_body: 'updates coming soon'
)

# friends

demo.friend_request(user_2)
user_2.accept_request(demo)
demo.friend_request(user_3)
user_3.accept_request(demo)
user_2.friend_request(user_3)
user_3.accept_request(user_2)

# conversations

conversation_1 = Conversation.create!(
    name: 'DemoUser, Yasuo, Irelia'
)

conversation_2 = Conversation.create!(
    name: 'DemoUser, Yasuo'
)

conversation_3 = Conversation.create!(
    name: 'DemoUser, Irelia'
)

subscription_9 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '1',
    user_id: 1
)

subscription_10 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '1',
    user_id: 2
)

subscription_11 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '1',
    user_id: 3
)

subscription_12 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '2',
    user_id: 1
)

subscription_13 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '2',
    user_id: 3
)

subscription_14 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '3',
    user_id: 1
)

subscription_15 = Subscription.create!(
    subscribeable_type: 'Conversation',
    subscribeable_id: '3',
    user_id: 2
)


