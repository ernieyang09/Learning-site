
# RDBMS vs NoSQL

### RDBMS

Pros:

- Data integrity and consistency.
- Well-suited for structured data and complex relationships.
- Mature technology with standardized querying (SQL).

Cons:

- Limited scalability for very large or high-velocity data.
- Schema changes can be rigid and complex.
- Not ideal for rapidly changing or unstructured data.

### NoSQL

Pros:

- Horizontal scalability for high-volume data.
- Flexible schema for unstructured or semi-structured data.
- High performance and variety of database models.

Cons:

- Lack of unified query language.
- Limited ACID transactions in some cases.
- Learning curve for new database models.
- Data integrity challenges based on model and configuration.


NoSQL stores, in general, always maintain a certain number of replicas to offer reliability. Also, in such data stores, deletes don't get applied instantly; data is retained for certain days (to support undeleting) before getting removed from the system permanently.