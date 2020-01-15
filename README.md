# 202001.express-typescript-build-with-webpack

## How to run

### Download cargo-make

Linux:

```shellsession
curl -sL https://github.com/sagiegurari/cargo-make/releases/download/0.26.0/cargo-make-v0.26.0-x86_64-unknown-linux-musl.zip | busybox unzip -p - cargo-make-v0.26.0-x86_64-unknown-linux-musl/cargo-make > bin/cargo-make && chmod a+x bin/cargo-make
```

macOS:

```shellsession
curl -LO https://github.com/sagiegurari/cargo-make/releases/download/0.26.0/cargo-make-v0.26.0-x86_64-apple-darwin.zip
unzip -p cargo-make-v0.26.0-x86_64-apple-darwin.zip cargo-make-v0.26.0-x86_64-apple-darwin/cargo-make > bin/cargo-make
chmod +x bin/cargo-make
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

## How to build

```shellsession
bin/cargo-make make --makefile tasks/build-production-images.toml
```