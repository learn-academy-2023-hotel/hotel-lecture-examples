# ACTIVE RECORD MIGRATIONS

1. rails new hotel_band -d postgresql -T
2. cd hotel_band
3. rails db:create
4. rails g model BandMember name:string instrument:string
   5 rails db:migrate

<!-- When switching drivers!!!!!!!!! -->

<!-- after you pull/fetch -->

bundle
rails db:create
rails db:migrate
add data in rails c

<!-- add new column using migration -->

in terminal:

`rails g migration AddRateColumnToBandMembers`

in migration file:

```ruby
class AddRateColumnToBandMember < ActiveRecord::Migration[7.0]
  def change
    add_column :band_members, :rate, :integer
  end
end
```

`$ rails db:migrate`

<!-- change column name using migration -->

`rails g migration change_name_of_rate_column`

in new migration file:

```ruby
class ChangeNameOfRateColumn < ActiveRecord::Migration[7.0]
  def change
#add using rails helper method rename_column   :table_name, :current_column_name, :new_column_name
    rename_column :band_members, :rate, :hourly_rate
  end
end
```

`$ rails db:migrate`

<!-- change column data type -->

`$ rails g migration ChangeDataTypeForRate`

in new migration file:

```ruby
class ChangeDataTypeOfPayColumn < ActiveRecord::Migration[7.0]
  def change
  #add using rails helper method change_column   :table_name, :column_name, :new_data_type
    change_column :band_members, :hourly_rate, :float
  end
end
```

`$ rails db:migrate`

REMEMBER!

- any change to the database structure must be done using migrations
- do not manually delete any file from the migration folder (there is a Rails way to do this)
