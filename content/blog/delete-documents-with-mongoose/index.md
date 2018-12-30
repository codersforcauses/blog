---
title: How to Delete Documents with Mongoose
date: 2018-12-30
---


You have to add a callback to the statement e.g. 
`User.deleteOne({_id: req.params.userId}, err => console.log(err)); `

You can't do something like this
`User.deleteOne({_id: req.params.userId})`

If that doesn't work try this longer way

```js
  TodoList.findOne({ _id: req.params.todoListId}).then(result => {
    result.participants.push(req.user.id)
    result.save()
    res.json('worked')
  })
```