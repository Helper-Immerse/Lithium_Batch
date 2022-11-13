# Lithium

Assigment : https://docs.google.com/document/d/1J9bLPYBb_wJ3McS5VnHhUgwFwDEg6zzOiGjxHKjjcrI/edit?usp=sharing

1. We need to create 3 models of NewBook, NewPublisher, NewAuthor
2. Firstly We Shall edit NewAuthor & NewPublisher where we shall connect mongoose and then we shall create schema and then we shall create model using mongoose database
==> Timestamp values are accepted in the format 'yyyy‑MM‑dd HH:mm:ss. SSSSSS' , and can consist of just the date, or just the time, with or without the fractional second portion. For example, you can specify TIMESTAMP values such as '1966‑07‑30' , '08:30:00' , or '1985‑09‑25 17:45:30.005'

3.  then we shall create NewBookSchema where we shall connect mongoose then const ObjectId = mongoose.Schema.Types.ObjectId because we want to take all data's from author and publisher in book schema 

4. Now into the NewBookSchema we shall use ref there we shall put up that model that we have create using mongoose

5. We shall create first NewAuthorcontroller and NewPublisherController where for crete we shall use create function and for get data we shall use find function on model

6. Now into the NewBookcontroller we shall apply populate with find function
7. at the last we shall link all in route file and then run code

8. We shall put logic if author id absent not present then take arror

