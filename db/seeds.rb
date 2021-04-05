# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Like.destroy_all
Comment.destroy_all

@admin = User.create(username: 'admin', email: 'amar@amar.com', name: "Amar", password: "woofwoof1")
puts "#{User.count} users created"

@sandiego = Post.create(img_url: "https://lp-cms-production.imgix.net/2019-06/GettyImages-516657083_super.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312&q=75&dpr=1", location: "San Diego, CA", description: "SUPER SUNNY AND AWESOME!", user_id: @admin.id)
puts "#{Post.count} posts created"

@testcomment = Comment.create(content: 'THIS PLACE IS AWESOME!', user_id: @admin.id, post_id: @sandiego.id )
puts "#{Comment.count} comments created"

@testlike = Like.create(user_id: @admin.id, post_id: @sandiego.id)
puts "#{Like.count} likes created"