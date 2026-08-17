# oshinoko-puzzle
A fan project replica for https://www.oshinoko-puzzle-global.com/

![screenshot](screenshot.png)

```
# build the container (change USER uid if needed)

docker build -f Dockerfile.init . -t devcontainer:init

# setup the dev container

./devcontainer.sh

# start next.js

cd oshinoko-puzzle

npm run dev
```