---
title: Little Trick with Axios
date: 2018-12-30
---

Without a doubt Axios is a great HTTP client library. It simplifies and improves http requests although the new es6 http calls are nice in there own right. Something I missed with jquery's ajax calls was the `.always` method that would always execute regardless of the success of the call. Axios doesn't have such a method but you can simulate it with this handy trick.

``` js
axios.post(endpoint, {
    data: data
}).then((response) => {
    // successful call
}).catch((error) => {
    // failed call
}).then(() => {
    // always executed
})
```