require 'rspec'
require_relative 'book.rb'
require_relative 'library.rb'


describe 'Book' do
  it 'should exist' do
    # using {} because outcome is a behavior
    expect{ Book.new }.to_not raise_error
  end

  it 'has a title' do
    # Arrange - creating test book
    my_book = Book.new
    # Act
    my_book.title = 'Brave New World'
    # Assert
    expect(my_book.title).to be_a String
    expect(my_book.title).to eq 'Brave New World'
  end

  it 'has an author' do 
    my_book = Book.new
    #set default value if no author provided
    expect(my_book.author).to eq 'anonymous'
    expect(my_book.author).to be_a String
    # set the author before expect
    my_book.author = 'Aldous Huxley'
    expect(my_book.author).to eq 'Aldous Huxley'
  end

  it 'starts on page 1' do
    my_book = Book.new
    expect(my_book.page).to eq 1
    expect(my_book.page).to be_a Integer
  end

  it 'can read pages' do
    my_book = Book.new
    # expect { Counter.increment }.to change { Counter.count }.from(0).to(1)
    expect{my_book.read 10}.to change{my_book.page}.from(1).to(11)
  end
end

describe 'Library' do
  it 'should exist' do
    expect{ Library.new }.to_not raise_error
  end

  # step one - check for existance of array
  # it 'has an array of books' do
  #   my_library = Library.new
  #   expect(my_library.book_collection).to be_a Array
  # end

  it 'has an array of books' do
    my_library = Library.new
    brave = Book.new
    razor = Book.new
    my_library.add_books brave
    my_library.add_books razor
    expect(my_library.book_collection).not_to be_empty
    expect(my_library.book_collection).to contain_exactly(brave, razor)
    expect(my_library.book_collection).to be_a Array
  end

end