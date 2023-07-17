# HTTP request and header

HTTP requests are messages sent by the client to initiate an action on the server. Their start-line contain three elements:

1. HTTP method
2. The request target, usually a URL
3. The HTTP version

HTTP headers from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (':') and a value whose structure depends upon the header. The whole header, including the value, consists of one single line, which can be quite long.
Many different headers can appear in requests. They can be divided in several groups:

- General headers
- Response headers
- Representation headers

A blank line after the header

Body
