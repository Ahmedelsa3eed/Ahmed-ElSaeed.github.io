const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/Ahmedelsa3eed/Ahmedelsa3eed.github.io.git";

ghpages.publish(
    pathname,
    {
        branch: "gh-pages",
        repo: repoURL,
    },
    (err) => {
        if (err) console.log("ERROR: ", err);
        else console.log("PUBLISHED");
    }
);
