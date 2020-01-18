# 202001.express-typescript-build-with-webpack

## How to run

### Download cargo-make

Linux:

```shellsession
curl -sL https://github.com/sagiegurari/cargo-make/releases/download/0.26.0/cargo-make-v0.26.0-x86_64-unknown-linux-musl.zip \
| busybox unzip -p - cargo-make-v0.26.0-x86_64-unknown-linux-musl/cargo-make > bin/cargo-make && chmod a+x bin/cargo-make
```

macOS:

```shellsession
curl -sL https://github.com/sagiegurari/cargo-make/releases/download/0.26.0/cargo-make-v0.26.0-x86_64-apple-darwin.zip \
| bsdtar --strip-components 1 -C bin/ -xvf - cargo-make-v0.26.0-x86_64-apple-darwin/cargo-make
```

### Set up the project via cargo-make

```shellsession
bin/cargo-make make --makefile tasks/setup-project.toml
```

### Update the .env file with your UID/GID and IP addresses

Like below:

```
UID=1000
GID=100
BIND_IP_ADDR=192.168.0.1
PUBLIC_IP_ADDR=192.168.0.1
```

```
UID=1000
GID=100
BIND_IP_ADDR=192.168.0.1
PUBLIC_IP_ADDR=203.0.113.1
```

### Run via Docker Compose

```shellsession
docker-compose up
```

## How to build

```shellsession
bin/cargo-make make --makefile tasks/build-production-images.toml
```
