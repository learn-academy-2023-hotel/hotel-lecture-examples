# RUBY INHERITANCE NOTES 11/2/2023


# initialize  - takes as many params as needed and use as we want

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

netflix = Netflix.new('Buffy', '45min')
# p netflix.get_show_data


# streaming music - Apple Music, Spotify, others
# youTube  - streaming internet
# streaiming books/podcast
# streaming video

# title, runtime, consumed

# Inheritance allows classes to have relationships with each other. can share behaviors; makes code more efficient
# Superclass - common behaviors into a shared class
  #  - attributes common to all possible subclasses
  # Subclass has attributes specific to that subclass and not to the other subclasses of the Superclass

  # Super class passes info to the subclass

  class StreamingApp 
    attr_accessor :title, :run_time, :consumed
    def initialize(title, run_time)
      @title = title
      @run_time = run_time
      @consumed = false
    end
    def show_data 
     if @consumed
      "Do you want to consume #{@title} again?"
     else
      "Why haven't you consumed #{@title} yet? It's only #{@run_time}"
     end
    end
  end



  class AppleMusic < StreamingApp
    def initialize(title, run_time, artist)
      super(title, run_time)
        @artist = artist
    end
  end

  move = AppleMusic.new("Move", "3:00", "Ludacris")

  # p move
  
  #<AppleMusic:0x00000001003668b0 @title="Move", @run_time="3:00", @consumed=false, @artist="Ludacris">
"Why haven't you watched Move yet? It's only 3:00"

#<AppleMusic:0x00000001050d6690 @title="Move", @run_time="3:00", @consumed=false, @artist="Ludacris">
"Why haven't you consume Move yet? It's only 3:00"

class Audible < StreamingApp
  attr_accessor :author, :liked
  def initialize(title, run_time, author)
    super(title, run_time)
      @author = author
      @liked = false

  end
end

book = Audible.new('Twilight', "12 hrs", "Stephanie Meyers")

"Why haven't you consumed Twilight yet? It's only 12 hrs"

book.consumed = true
# p book.show_data

"Do you want to consume Twilight again?"
# :liked has to be added to attr_accessor for the getter/setter method to work on object
book.liked = true
p book
#<Audible:0x0000000100a85830 @title="Twilight", @run_time="12 hrs", @consumed=true, @author="Stephanie Meyers", @liked=true>

book.title = 'New Moon'
p book

#<Audible:0x0000000100a85830 @title="New Moon", @run_time="12 hrs", @consumed=true, @author="Stephanie Meyers", @liked=true>