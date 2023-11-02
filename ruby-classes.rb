# Ruby Classes and Objects 11/2/2023

# class Netflix
# end

# instantiating many objects from one class
# p Netflix.new
# p Netflix.new
# p Netflix.new
# p Netflix.new
# one_piece = Netflix.new
# p one_piece


# setters
# instance variable - available to the class, denoted by @
# class Netflix
#   def set_show_title(title)
#     @title = title
#   end
# end

# one_piece = Netflix.new
# p one_piece
# #<Netflix:0x0000000102847850>
# p one_piece.set_show_title('One Piece')
# # --> "One Piece"
# p one_piece
# #<Netflix:0x00000001047e76b0 @title="One Piece">

# lupin = Netflix.new
# lupin.set_show_title('Lupin')
# p lupin
#<Netflix:0x0000000104296fa8 @title="Lupin">

# class Netflix
#   def set_show_info(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
# end

# one_piece = Netflix.new
# one_piece.set_show_info('One Piece', '24 min')
# p one_piece
# #<Netflix:0x0000000100667028 @title="One Piece", @run_time="24 min">

# lupin = Netflix.new
# lupin.set_show_info('Lupin', '50 min')
# p lupin
#<Netflix:0x0000000100666d30 @title="Lupin", @run_time="50 min">

# 37:in `set_show_info': wrong number of arguments (given 1, expected 2) (ArgumentError)

# getter method
# class Netflix
#   def set_show_info(title, run_time)
#     @title = title
#     @run_time = run_time
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
# end

# one_piece = Netflix.new
# p one_piece.set_show_info('One Piece', '24 min')
# --> "24 min"
# p one_piece.title
# --> undefined method `title' 
# p one_piece.get_title
# --> "One Piece"
# p one_piece.get_run_time
# --> "24 min"

# lupin = Netflix.new
# p lupin.set_show_info('Lupin', '50 min')
# "50 min"
# p lupin


# initialize method is a specific type of setter method
# class Netflix
#   # setter method
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   # getter method
#   def get_title
#     @title
#   end
#   # getter method
#   def get_run_time
#     @run_time
#   end
#   # setter method
#   def watched_show
#     @watched = true
#   end
# end

# one_piece = Netflix.new --> 87:in `initialize': wrong number of arguments (given 0, expected 2)
# one_piece = Netflix.new('One Piece', 24)
# p one_piece
#<Netflix:0x00000001007068d0 @title="One Piece", @run_time=24, @watched=false>
# one_piece.watched_show
# p one_piece
#<Netflix:0x00000001007068d0 @title="One Piece", @run_time=24, @watched=true>
# lupin = Netflix.new('Lupin', 50)
# p lupin


# class Netflix
#   def initialize(title, run_time)
#     @title = title
#     @run_time = run_time
#     @watched = false
#   end
#   def get_title
#     @title
#   end
#   def get_run_time
#     @run_time
#   end
#   def watched_show
#     @watched = true
#   end
#   def get_show_data
#     if @watched
#       "You have watched the show #{@title} which is #{@run_time} minutes long."
#     else
#       "You have not watched the show #{@title} which is #{@run_time} minutes long. Wanna start?"
#     end
#   end
# end

# one_piece = Netflix.new('One Piece', 24)
# p one_piece.get_show_data
# --> "You have not watched the show One Piece which is 24 minutes long. Wanna start?"
# one_piece.watched_show
# p one_piece.get_show_data
# --> "You have watched the show One Piece which is 24 minutes long."
# lupin = Netflix.new('Lupin', 50)

# helper methods - make more methods
# symbol - "the thing that is called....."
class Netflix
  attr_accessor :title, :run_time, :watched

  def initialize(title, run_time)
    @title = title
    @run_time = run_time
    @watched = false
  end
  def get_show_data
    if @watched
      "You have watched the show #{@title} which is #{@run_time} minutes long."
    else
      "You have not watched the show #{@title} which is #{@run_time} minutes long. Wanna start?"
    end
  end
end

one_piece = Netflix.new('One Piece', 24)
p one_piece.get_show_data
# --> before attr_accessor: undefined method `title'
p one_piece.title
# --> "One Piece"
one_piece.title = 'One Piece!'
p one_piece.title
# --> "One Piece!"
p one_piece.run_time
p one_piece.watched
one_piece.watched = true
p one_piece.watched