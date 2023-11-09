```ruby

class Student
 def initialize name, cohort
  @name = name
  @cohort = cohort
  end
end

Student.new('Jonathan', 'Hotel')
Student.new('Joseph', 'Hotel')
Student.new('Joseph', 'Hotel')
Student.new('Ron', 'Hotel')
Student.new('Megan', 'Echo')
Student.new('Megan', 'Echo')


```

# DATABASES

- stores data in organized way
- Postgresql - Relational Database. structured to recognize relationships among stored item

  - they consist of rows and columns
  - think giant Excel spreadsheet

  - we need the structure
  - create/add data

  First we define the Model. it's class. Table with columns - name and cohort

  add instance => { name: 'Jonathan', cohort: 'Hotel'}

  rows are unique instances

when table created, column is automatically added, this assigns primary_key - PK : Unique identifier.

# POSTGRESQL

- DSL
- it's open-source
- Object-Relational Database Mgmt System (ORDMS) RDMS
- it takes an OOP approach to programming
