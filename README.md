#### SAFE Web starter pack

Use this starter to begin developer SAFE network web sites

**New to SAFE network?**: 
https://www.youtube.com/watch?v=U1ffmf6z50E

###### SETUP

- clone this repository and `cd` into the respective directory
- Run `yarn`
- Run `yarn gulp` to start server
- Visit `localhost://p:3004` in your SAFE browser to see page or `localhost:3004` in Peruse

To upload this site to the network:
 - Run `npm run gulp` and observe the `build` directory that's created
 - Using [web_hosting_manager](https://github.com/maidsafe/safe_examples/tree/master/web_hosting_manager), simply upload the `build` directory
 - To drastically reduce the size of the build directory when uploading to SAFE network, remove all the font files that are not needed

See docs for more detail of expected return values and other information:
http://docs.maidsafe.net/beaker-plugin-safe-app/
