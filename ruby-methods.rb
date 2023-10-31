# Ruby Conditionals and Methods 10/31/2023

# p 'hello'
# --> "hello"
# puts 'hello' # put string
# --> hello

# puts 'Enter your name'
# name = gets
# p name
# --> "sarah\n"


# puts 'Enter your name'
# name = gets.chomp
# p name
# --> "sarah"

# if name == 'sarah'
#   puts 'Hello Sarah'
# else 
#   puts 'Hello World!'
# end

# only one if, only one else, as many elsif as you want/need

# if name.downcase == 'sarah'
#   puts 'Hello Sarah'
# elsif name.downcase == 'hotel'
#   puts 'Hello Hotel'
# else 
#   puts 'Hello World!'
# end

# puts 'Enter a number'
# my_num = gets.chomp.to_i
# p my_num
# --> "4"

# if my_num > 10
#   puts 'the num is greater than 10'
# else
#   puts 'number is less than 10'
# end

# --> ruby-methods.rb:40:in `>': comparison of String with 10 failed 



# puts 'Enter a number'
# my_num = gets.chomp.to_i
# p my_num

# this code didn't work:
# def number_eval
#   if my_num > 10
#     'the num is greater than 10'
#   else
#     'number is less than 10'
#   end
# end

# puts number_eval

# implicit return - return is a valid keyword but it is not needed

# in `number_eval': undefined local variable or method `my_num' for main:Object (NameError)


# implicit return
puts 'Enter a number'
my_num = gets.chomp.to_i
p my_num

def number_eval(number)
  if number > 10
    'the num is greater than 10'
  else
    'number is less than 10'
  end
end

puts number_eval(my_num)
# --> number is less than 10

# using the keyword return, both work, both are valid
puts 'Enter a number'
my_num = gets.chomp.to_i
p my_num

def number_eval(number)
  if number > 10
    return 'the num is greater than 10'
  else
    return 'number is less than 10'
  end
end

puts number_eval(my_num)