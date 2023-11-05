# LangsCardsGame-JS

### Build docker container and run it

```
docker build -t langcardgame-image .
```

```
docker run --name dev_langcardgame -p 3000:3000 -d langcardgame-image
```

### Stop and clean container

```
docker kill dev_langcardgame && docker rm dev_langcardgame
```

this repository is bind by github webhook with jenkins pipeline
