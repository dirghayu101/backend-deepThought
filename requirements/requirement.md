1. These are the required end points:

   a> /api/v3/app/event?id=event_id (GET) -> Get an event by its unique ID.

   b> /api/v3/app/events?type=latest&limit=5&page=1 (GET) -> Gets an event by its recency & paginate results by page number and limit of events per page

   c> /api/v3/app/events (POST) -> Creates an event and returns the Id of the event i.e. created

   d> /api/v3/app/events/:id (PUT)

   e> /api/v3/app/events/:id (DELETE) -> Deletes an event based on its Unique Id

2. Payload for POST and PUT: name, files[image], tagline, schedule, description, moderator, category, sub_category and rigor_rank

3. Object data model of an event:
   type:"event"
   uid:18 (user id)
   name: Name of the event
   tagline: A proper tag-line for the event
   schedule: (Date + time) Timestamp
   description: String
   files[image]: Image file (File upload)
   moderator: A user who is going to host
   category: Category of the event
   sub_category: Sub category
   rigor_rank: Integer value
   attendees: Array of user Id's who is attending the event

4. You are not allowed to use Mongoose library. Only Mongodb library.

5. Do not write any schema for storing and querying data.

6. The goal is to follow a data model consistency while avoiding a fixed schema.

7. The reasons for no schema and mongodb package are:
   a> Queries based on any search parameter.
   b> Add or remove new fields freely.
