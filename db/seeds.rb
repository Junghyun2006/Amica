require 'open-uri'

User.delete_all
Server.delete_all
Subscription.delete_all
Channel.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('servers')
ActiveRecord::Base.connection.reset_pk_sequence!('subscriptions')
ActiveRecord::Base.connection.reset_pk_sequence!('channels')

demo = User.create!(
    username: 'Demouser',
    password: 'password',
    email: 'demo@gmail.com',
    tag: '0000',
    dob: '2009-09-16'
)

file = open('https://app-amica-seeds.s3.amazonaws.com/demouser_avatar.jpg')
demo.avatar.attach(io: file, filename: 'demouser_avatar.jpg')

user_2 = User.create!(
    username: 'testuser1',
    password: 'password',
    email: 'testuser1@gmail.com',
    tag: '0001',
    dob: '2003-09-15'
)

user_3 = User.create!(
    username: 'testuser2',
    password: 'password',
    email: 'testuser2@gmail.com',
    tag: '0002',
    dob: '1994-04-03'
)

server_1 = Server.create!(
    name: 'testserver1',
    host_id: 1
)

file1 = open('https://app-amica-seeds.s3.amazonaws.com/red_car.jpg')
server_1.photo.attach(io: file1, filename: 'red_car.jpg')

server_2 = Server.create!(
    name: 'testserver2',
    host_id: 2
)

file2 = open('https://app-amica-seeds.s3.amazonaws.com/white_car.jpeg')
server_2.photo.attach(io: file2, filename: 'white_car.jpeg')

server_3 = Server.create!(
    name: 'testserver3',
    host_id: 3
)

file3 = open('https://app-amica-seeds.s3.amazonaws.com/yellow_car.jpg')
server_3.photo.attach(io: file3, filename: 'yellow_car.jpg')

server_4 = Server.create!(
    name: 'testserver4',
    host_id: 4
)

file4 = open('https://app-amica-seeds.s3.amazonaws.com/blue_car.jpeg')
server_4.photo.attach(io: file4, filename: 'blue_car.jpeg')

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
    subscribeable_id: '1',
    user_id: 2
)

subscription_6 = Subscription.create!(
    subscribeable_type: 'Server',
    subscribeable_id: '1',
    user_id: 3
)

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


