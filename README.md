# Sockets

## connection types
- Http 
- Web sockets


## Polling
Polling: Calling the server many times to see if data has changed.

```
GET /users/count -> 3000
GET /users/count -> 3000
GET /users/count -> 3000
GET /users/count -> 3001
```

```
POST /messages/ -> { 
  user: 'tobi', 
  message: 'hi'
}

GET /messages/ -> [
  { user: 'tobi', message: 'hi',}
]

POST /messages/ -> {
  user: 'okikiola',
  message: 'good evening'
}

GET /messages/ -> [
  { user: 'tobi', message: 'hi' },
  { user: 'okikiola', message: 'good evening' }
]

```



Webhooks are not sockets.
Webhooks are basically links that are exposed to another system to call when an event occurs.

### KEY WORDS
CLIENT  
SERVER  
ROOM  
EVENTS - on('ping'), on('ade'), on('amaka'), on('connection')  
EMIT - sending a message  
BROADCAST - sending to many people.

