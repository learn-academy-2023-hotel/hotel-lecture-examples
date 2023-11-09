# INTRO TO ACTIVE RECORD

- Active Record is a gem
- ORM - Object relational mapping
- Translator - translating Ruby and SQL

- Database - collection of tables

  - columns describe structure
  - rows instances of the class (objects)

  - access row(value) by column name(key)

create new rails app:

1. rails new active-record-intro -d postresql -T
2. cd active-record-intro
3. rails db:create

Created database 'active_record_intro_development'
Created database 'active_record_intro_test'

Model is the M in MVC

- works with database
- defines the structure of db
- lets us store data in a table

````bash
 active-record-intro git:(main) ✗ rails generate model Song name:string artist:string
      invoke  active_record
      create    db/migrate/20231109172538_create_songs.rb
      create    app/models/song.rb


➜  active-record-intro git:(main) ✗ rails db:migrate
== 20231109172538 CreateSongs: migrating ======================================
-- create_table(:songs)
   -> 0.0266s
== 20231109172538 CreateSongs: migrated (0.0267s) =============================```
````

RAILS CONSOLE - access with `rails c`

CRUD - CREATE, READ, UPDATE, DELETE

Create:

```bash
3.2.0 :002 > Song.create(name:'Horse with No Name', artist:'Neil Young')
  TRANSACTION (0.1ms)  BEGIN
  Song Create (1.8ms)  INSERT INTO "songs" ("name", "artist", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["name", "Horse with No Name"], ["artist", "Neil Young"], ["created_at", "2023-11-09 17:40:54.885775"], ["updated_at", "2023-11-09 17:40:54.885775"]]
  TRANSACTION (0.4ms)  COMMIT
 =>
#<Song:0x0000000106392950
 id: 1,
 name: "Horse with No Name",
 artist: "Neil Young",
 created_at: Thu, 09 Nov 2023 17:40:54.885775000 UTC +00:00,
 updated_at: Thu, 09 Nov 2023 17:40:54.885775000 UTC +00:00>

 #<Song:0x0000000107cbeb18
 id: 2,
 name: "Custer",
 artist: "Slipknot",
 created_at: Thu, 09 Nov 2023 17:44:06.345590000 UTC +00:00,
 updated_at: Thu, 09 Nov 2023 17:44:06.345590000 UTC +00:00>
3.2.0 :004 >
```

Read:
Song.all
Song.first
Song.last
Song.find(1)  
Song.where(name:"Custer")

Update:

> song = Song.last (isolating the object you want to update)
> song.update(name:'Friday')
> song (returns modified instance)

````bash
3.2.0 :009 > song = Song.last
  Song Load (0.4ms)  SELECT "songs".* FROM "songs" ORDER BY "songs"."id" DESC LIMIT $1  [["LIMIT", 1]]
 =>
#<Song:0x00000001104bac88
...
3.2.0 :010 > song
 =>
#<Song:0x00000001104bac88
 id: 2,
 name: "Custer",
 artist: "Slipknot",
 created_at: Thu, 09 Nov 2023 17:44:06.345590000 UTC +00:00,
 updated_at: Thu, 09 Nov 2023 17:44:06.345590000 UTC +00:00>
3.2.0 :011 > song.update(name:'Friday')
  TRANSACTION (0.2ms)  BEGIN
  Song Update (2.4ms)  UPDATE "songs" SET "name" = $1, "updated_at" = $2 WHERE "songs"."id" = $3  [["name", "Friday"], ["updated_at", "2023-11-09 17:53:55.343701"], ["id", 2]]
  TRANSACTION (0.6ms)  COMMIT
 => true
3.2.0 :012 > song
 =>
#<Song:0x00000001104bac88
 id: 2,
 name: "Friday",
 artist: "Slipknot",
 created_at: Thu, 09 Nov 2023 17:44:06.345590000 UTC +00:00,
 updated_at: Thu, 09 Nov 2023 17:53:55.343701000 UTC +00:00> ```
````

DELETE
