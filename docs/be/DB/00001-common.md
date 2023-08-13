

# Common

Database is quite a big topic. However, I just made brief snippets. It's not my expert domain.

### ACID

- Atomicity: Transactions are all or nothing. If something fails, the whole thing is undone.
- Consistency: Transactions bring the database from one good state to another, following rules.
- Isolation: Transactions happen independently, without interfering with each other.
- Durability: Once done, transactions are permanent, surviving crashes or failures.

### Normalization

Normalization is the process of organizing data to eliminate redundancy and improve data integrity in a relational database.


### Primary key and foreign key

A primary key uniquely identifies a record in a table, while a foreign key refers to the primary key of another table, establishing a relationship between the two.

Default primary key = clustered index


### Stored procedure

A stored procedure is a precompiled set of SQL statements that can be stored and executed on the database server to perform specific tasks.


### Clustered table and heap table

Clustered table = with clustered indexed. Heap table = without clustered indexed

Heap inserts faster cause it doesn't maintain the sequence.


### Lookup sequence

- Clustered Index
- NonClustered Index
- RID Lookup (Row Id) if not having clustered index
- Key Lookup if having clustered index

