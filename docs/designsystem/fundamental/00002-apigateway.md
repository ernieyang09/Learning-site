# API Gateway



An API Gateway is a vital component in modern software architectures, acting as a centralized entry point for managing and routing requests between clients (such as mobile apps, web browsers, or other services) and a collection of backend services or APIs.

API Gateways are especially valuable in microservices architectures, where applications are composed of many loosely coupled services. They simplify the interaction between clients and these services, abstracting away the complexities of individual service communication and providing a single entry point that can be managed, monitored, and secured effectively.



### Difference between an API gateway and a load balancer

An API gateway is focused on routing requests to the appropriate microservice, while a load balancer is focused on distributing requests evenly across a group of backend servers.

They can have some intersections but they are not exact same. Usually, they can use together.


### Usage of API gateway

1. Routing
2. Rate limiting and throttling
3. Caching
4. Authentication and Authorization
5. Load balancing
6. Monitoring
7. Transformation(data)
8. Request and response validation
9. Circuit breaker
10. Service discovery
11. API Versioning
12. Error Handling
13. Service Aggregation
14. Web Application Firewall (WAF)
15. API Documentation

Even though we list lots of function here, but we seldom use some of them(like waf)

<br/>

### Service discovery

The Service Discovery mechanism helps us know where each instance is located. In this way, a Service Discovery component acts as a registry in which the addresses of all instances are tracked. 

#### Client-Side Service Discovery

The client (requesting service) is responsible for discovering and selecting an appropriate service instance from the registry.

It will bind the registry client with service(coupled)

#### Server-Side Service Discovery

The alternate approach to Service Discovery is the Server-Side Discovery model, which uses an intermediary that acts as a Load Balancer. The idea is to extract registry service on each client into another layer of load balancer.
