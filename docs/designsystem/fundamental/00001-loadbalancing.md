# Load Balancing

The main goal of load balancing is to ensure high availability, reliability, and performance by avoiding overloading a single server and avoiding downtime.

A load balancer reduces the load on individual servers and prevents any one server from becoming a **single point of failure**<sup>1</sup>, thus improving overall application availability and responsiveness.


It can be added at 3 places:

1. Client and server
2. server and server (depends on how many layers)
3. server and DB

### Uses Load Balancing

- Health Checks <br/>
If a server is not working at this moment, we should remove it from server list until it recoveries.
- Session Persistence <br/>
In most of using session case, we need to make sure requests from the same users will redirect to the same server.
- SSL/TLS Termination <br/>
We can put SL/TLS decryption in the load balancer layer, it can lower the burden of backend server.

<br/>

### Load Balancing Algorithm

1. Round Robin(loop)
2. Weighted Round Robin
3. Least Connection
4. Weighted Least Connection
5. Least Response Time
6. Random
7. IP Hash (maintain session)
8. Least Bandwidth
9. Least Packets
10. Chained Failover
11. Dynamic Weight Adjustment
12. Least Resource
13. Fastest Finger First

<br/>

### Load Balancing Type

1. Hardware load balancing
2. Software load balancing
3. Cloud-based load balancing
4. DNS load balancing
5. Layer 4 load balancing <br />
It distributes incoming traffic based on information from the TCP or UDP header, such as source and destination IP addresses and port numbers.
6. Layer 7 load balancing <br />
It takes into account application-specific information, such as HTTP headers, cookies, and URL paths, to make more informed decisions about how to distribute incoming traffic.

<br/>

### Layer4 vs Layer7

#### Layer 4

Pros

- Better performance
- Support variety of protocols
- simple and eazy to manage

Cons

- Lack of app info, limits its scenarios
- No consideration for server health, response time, or resource utilization
- Can't know about the session

#### Layer 7

Pros

- Considers application-level information
- Provide session or content-routing mechasism

Cons

- Slower and less efficient than layer4
- May required more specific settings, more complex

<br/>


### Challenges of Load Balancers

1. Become single point of failure
2. Configuration complexity
3. Scalability limitations
4. Add latency
5. sticky sessions problem
6. Cost
7. Healthy check and monitor

<br/><br/>

Ref.

<sub>1. Single point of failure: A single point of failure (SPOF) refers to a component, system, or element within a larger system that, if it were to fail, could cause the entire system to fail or significantly degrade in performance. </sub>
