# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all
Subscription.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('servers')
ActiveRecord::Base.connection.reset_pk_sequence!('subscriptions')

demo = User.create!(
    username: 'Demouser',
    password: 'password',
    email: 'demo@gmail.com',
    tag: '0000',
    dob: '2009-09-16'
)

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


server_2 = Server.create!(
    name: 'testserver2',
    host_id: 2
)

server_3 = Server.create!(
    name: 'testserver3',
    host_id: 3
)

server_4 = Server.create!(
    name: 'testserver4',
    host_id: 4
)

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



