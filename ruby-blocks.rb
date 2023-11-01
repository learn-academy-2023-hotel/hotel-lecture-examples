# RUBY BLOCKS AND ITERABLES 11/1/2023

# Iteration - repeating an action until condition is met

# Iterable Methods

# While
#   needs a starting point, and end point, condition that starts as true, will become false eventually

# num = 1

# while num <= 10
#   p num
#   # num = num + 1
#   num += 1
# end

# if don't have incrementation will get infinite loop 
# use CTRL + c to exit 

# Methods can take an anonymous function --> BLOCK
# can be defined in 2 ways:
#   keywords DO and END  - use when more than one line in block
#   { code goes here }  -- use for one-liners 

# TIMES
  # - executes block certain number of times 

  # 8.times do
  #  p 'hello hotel'
  # end

  # # is the same as

  # 8.times { p 'hello hotel'}

  # num = 10

  # num.times do
  #   p 'happy wednesday!'
  # end

  # EACH
  #  - works on list of items, aka array.

  # nums = [3, 4, 5, 6, 7]
  # nums.each do |value|
  #   p value * 5
  # end
# output : 
# 15
# 20
# 25
# 30
# 35

# RANGES
# list of values => start and end points separated by TWO dots.

# p 1..10

range = 1..10
# p range 
range.each do |value|
  # p value 
end

# 1..1000

# letters = 'a'..'g'
# letters.each do |value|
#   p value
# end

# # output: "a"
# # "b"
# # "c"
# # "d"
# # "e"
# # "f"
# # "g"

# p letters.to_a  # to an array
# output: ["a", "b", "c", "d", "e", "f", "g"]

# MAP
# iterator that returns array of same length of the thing you're acting on

# nums = 1..5

# mapped = nums.map do |value|
#  value * 3
# end

# p mapped  #[3, 6, 9, 12, 15]

# nums = 1..20
# mapped = nums.map do |value|
#   if value % 2 == 0
#     'even'
#   else
#     'odd'
#   end
# end

# p mapped  #["odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even", "odd", "even"]
nums = 1..20
# mapped = nums.map do |value|
#   if value.even?
#     'even'
#   else
#     'odd'
#   end
# end

# p mapped

def even_or_odd (array)
  array.map do |value|
    if  value.even?
      'even'
    else
      value
    end
  end
end

# p even_or_odd nums  #[1, "even", 3, "even", 5, "even", 7, "even", 9, "even", 11, "even", 13, "even", 15, "even", 17, "even", 19, "even"]

# SELECT  ruby's version of filter
#  - iterator, has built in if statement, returns subset 


def only_evens(array)
  array.select do |value|
    value.even?
  end
end

# p only_evens nums  #[2, 4, 6, 8, 10, 12, 14, 16, 18, 20] / /

#one liner
p evens = nums.select  { |value| value.even? }