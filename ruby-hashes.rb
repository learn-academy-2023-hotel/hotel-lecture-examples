# RUBY HASHES 11/1/23

#  data structure holds unique key-value pairs.   Access values by the keys
# key is symbol; value is any data type recognized by Ruby

# Creating a hash

#  1. key-value pairs inside {}, generic syntax {key:val}
#   k-v pairs separated by commas within the hash
  # assign hash to variable 


person = {first_name: "Buffy", last_name: "Summers", title: "Vampire Slayer"} 
# p person
# output: {:first_name=>"Buffy", :last_name=>"Summers", :title=>"Vampire Slayer"}

people = Hash.new
# p people

# output: {}

# C - Create
# R - Read
# U - Update
# D - Delete

# CRUD - 4 basic actions you want to perform on data.

# READ - return data
#  - all the data 
# p person  #{:first_name=>"Buffy", :last_name=>"Summers", :title=>"Vampire Slayer"}

# return one piece of hash, reference the symbol/key
# p person[:first_name]# "Buffy"

# Add content to hash

person[:mother] = "Joyce"
# p person

# output {:first_name=>"Buffy", :last_name=>"Summers", :title=>"Vampire Slayer", :mother=>"Joyce"}

# Add multiple values: 
person[:love_interests] = ['Angel', 'Spike']
# p person
{:first_name=>"Buffy", :last_name=>"Summers", :title=>"Vampire Slayer", :mother=>"Joyce", :love_interests=>["Angel", "Spike"]}

# Update current content
# hashname - key we want to change value of, reassign value
person[:title] = "The Chosen One"

#  Delete
 person.delete(:last_name)
# p person
{:first_name=>"Buffy", :title=>"The Chosen One", :mother=>"Joyce", :love_interests=>["Angel", "Spike"]}

person[:mom] = person.delete(:mother)
{:first_name=>"Buffy", :title=>"The Chosen One", :love_interests=>["Angel", "Spike"], :mom=>"Joyce"}

# update value in array

person[:love_interests][0] = "Riley"
# p person
# {:first_name=>"Buffy", :title=>"The Chosen One", :love_interests=>["Riley", "Spike"], :mom=>"Joyce"}

# ENUMERABLES AND DUCK TYPING

#  modules - group of data types/structures with similar properties

# enumerables are group of things that are iterable
 # arrays, ranges, hashes

#  Duck Typing - ruby looks at behavior rather than data type it works on to group these methods

# we can use .each/.map on a hash 

characters = { slayer:'Buffy', witch: 'Willow', vampire: 'Spike' }

characters.each do |key, value|
  # printout value role is key
#  p  "#{value}'s role is #{key}"
end
# output: 
# "Buffy's role is slayer"
# "Willow's role is witch"
# "Spike's role is vampire"

def buffy_roles hash
  hash.map do |key, value|
    "#{value}'s role is #{key}"
  end
end

p buffy_roles characters