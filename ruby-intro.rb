# # INTRO TO RUBY NOTES 10/31/23

# Matz - Ruby creator,  MINASWAN

# # - dynamic - what is stored in a variable can be any data type
# # - interpreted 
# # - Scripting language - executed at runtime
# # - Open-source - you can contribute!
# # - Object-Oriented - everything is an object, everything is an instance of a class

# Object-Oriented Programming, OOP 

# irb - interactive ruby console

# DATA TYPES

# # Integer - whole numbers
# # Floats - fractions, decimals
# # Strings - single quotes, unless there are quotes/apostrophe in the string
# # Booleans
# #  - Equality operator
#   == 
#   # only evaluates same data type --- no type coercion
#   # - relational => > < <= =>
#   # - negation ! bang operator
#   !=
#   # logical - && ||
# # nil - equal to nothing else (like null in JS)
# # symbol  - unique identifiers of key-value pairs

# # VARIABLES
# - no variable declaration
# - casing: snake_case
#  - string interpolation: must use double quotes! #{variable}

#  BUILT-IN METHODS
#  # all methods are accessors
# #   can be made mutators using the bang operator, ie. my_name.upcase!

# ARRAYS
# -zero-indexed
# loads of methods


# :048 > jonathan_dog = 'Moose'
# => "Moose" 
# :049 > jonathan_dog.upcase
# => "MOOSE" 
# :050 > jonathan_dog
# => "Moose" 
# :051 > jonathan_dog.upcase!
# => "MOOSE" 
# :052 > jonathan_dog
# => "MOOSE" 
# :053 > jonathan_dog.capitalize!
# => "Moose" 
# :054 > jonathan_dog.reverse
# => "esooM" 
# :055 > my_cat.delete('o')
# => "Geppett" 
# :056 > my_cat
# => "Geppetto" 
# :057 > my_cat.delete('t')
# => "Geppeo" 
# :058 > my_cat.delete(2)
# (irb):58:in `delete': no implicit conversion of Integer into String (TypeError)
#  from (irb):58:in `<main>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/gems/irb-1.8.1/exe/irb:9:in `<top (required)>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# :059 > my_cat('t','e')
# (irb):59:in `<main>': undefined method `my_cat' for main:Object (NoMethodError)
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/gems/irb-1.8.1/exe/irb:9:in `<top (required)>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# :060 > my_cat.delete('t', 'e')
# => "Geppetto" 
# :061 > my_name.include?('s')
# => false 
# :062 > my_name
# => "TRISH" 
# :063 > my_name.include?('S')
# => true 
# :064 > my_name.include?('s') || my_name.include?('S')
# => true 
# :065 > my_name.include?('s' || 'S')
# => false 
# :066 > my_array = [ 1, 2,3 , 4, 5]
# => [1, 2, 3, 4, 5] 
# :067 > my_array[0]
# => 1 
# :068 > my_array.first
# => 1 
# :069 > my_array.second
# (irb):69:in `<main>': undefined method `second' for [1, 2, 3, 4, 5]:Array (NoMethodError)
# Did you mean?  send
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/gems/irb-1.8.1/exe/irb:9:in `<top (required)>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
#  from /Users/triciasykes/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
# :070 > my_array.last
# => 5 
# :071 > my_array.reverse
# => [5, 4, 3, 2, 1] 
# :072 > my_array[3] = 10
# => 10 
# :073 > my_array
# => [1, 2, 3, 10, 5] 
# :074 > my_name.reverse
# => "HSIRT" 
# :075 > my_array << 15
# => [1, 2, 3, 10, 5, 15] 
# # :076 > my_array << 15 -- shovel operator is like .push in JS

# greeter = 'Hello Hotel!'
# puts greeter
# # Hello Hotel!
# #  puts stringifies your output - just shows the content

# p greeter
# "Hello Hotel!"
#  p show raw output help you know what data type you have; line breaks etc.

p  'sss\nsss'
puts 'sss\nsss'