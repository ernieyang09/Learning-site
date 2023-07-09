---
sidebar_position: 2
---

# Http Cache


## Expires

old one, check the client time. So if user modify client-side time, it would be invalid.

## Cache-control

common pattern E.g max-age:86400

#### no-store

Not store any cache data in browser

#### max-age

Refetch data after XX second

#### no-cache(max-age=0)

Have cache in client, but still ask server every time


<br />


### Last-Modified, If-Modified-Since

Use for server for identifying the data is changed or not by modified time

### Etag, If-None-Match

Common pattern, use for server for identifying the data is changed or not by hash code (like md5)

<br />

### How to force update cache

1. Use hashcode in filename. E.g **webpack.common.1eg3pa.js**
2. Add extra params in request's url E.g  **xxxx.jpg?120394**





