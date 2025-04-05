# Server

### Quick start

#### Lauch dev container

Create and run container for Nodejs:

```sh
docker run --rm -p 8080:8080 -v $(PWD)/:/app -w /app -it node:22.14.0 /bin/bash
```