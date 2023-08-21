# Cheatsheet

### Hashing function

md5 128 bit -> 32 nibble(hexdecimal) = 16 bytes (2 nibble = 1 byte) <br/>
sha1 160 bit -> 40 nibble(hexdecimal) = 20 bytes (2 nibble = 1 byte)

E.g slice(0, 6) as hash key -> 6 bytes (regular single-byte character)


How to make sure they are fairly distrubuted to storage -> using consistent hashing


### Store file

- Might have a isolated service
- DB store metadata, object storage(like s3) store the real file
- Need key - value mapping(metadata -> file)
- If large files, can chunk
- Use md5 to reduce duplicated copy, use consistent hashing to evenly store files


### Reliability and Redundancy

- Backup
- Replica
- Multi instance


### KGS (Key generate service)

If system is big then use it(pregenerate)

prevent single point of failure

1. HA
2. having multiple KGS(like machine 1 for odd key, machine 2 for even key)


Sometimes we can make timestamp + KGS as primary key, it will help for search


### Ranking feed

**Instant calculate**

Get all data from source(e.g 10 posts from all followees), then choose top X from ranking mechasism.

**Pregenerate**

Put the ranking data in temp table or redis

pull -> user get from temp table or redis might not be newest data

push -> long pulling to get lastest data after ranking job is done

