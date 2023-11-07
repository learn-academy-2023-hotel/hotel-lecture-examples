class Book
  #gives us getter/setter methods
  attr_accessor :title, :author, :page

  # set default value of author on initialize
  def initialize author='anonymous'
    #include the variables we want
    @title = title
    @author = author
    @page = 1
  end

  def read pages_read
    @page += pages_read
  end
end

