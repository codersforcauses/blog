---
title: Export MongoDB
date: 2018-12-30
---

`./mongodump --uri <db_uri>`

`./mongorestore --uri <db_uri> <path_to_exported_db>`

This technique doesn't work too well with mongo atlas. Instead mongoDB compass can be used to import and export the data. There you will have to export each collection one by one. and import it one by one.