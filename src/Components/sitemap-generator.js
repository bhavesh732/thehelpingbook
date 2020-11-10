require('babel-register')({
  presets: ["es2015", "react"]
});;
 
const firbase = require("firebase");
const API = firebase.API;
const config = require("../../firebase.json").default;

API.configure({
  API: {
    endpoints: [
      {
        name: "posts",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
});

async function generateSitemap() {
  try {
    const posts = await API.get("posts", "/posts");
    let idMap = [];

    for(var i = 0; i < posts.length; i++) {
      idMap.push({ id: posts[i].postId });
    }

    const paramsConfig = {
      "/:blog/:id": idMap
    };

    return (
      new Sitemap(router)
          .applyParams(paramsConfig)
          .build("https://thehelpingbook.com")
          .save("../sitemap.xml")
    );
  } catch(e) {
    console.log(e);
  } 
}

generateSitemap();