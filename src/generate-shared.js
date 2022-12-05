const fs = require("fs");
const { exit } = require("process");

const build_dir = "./build";
const index_file = "./build/index.html";
const data_file = "./src/assets/data.json";

if (!fs.existsSync(build_dir)) {
  console.log("Build directory not found. run command 'npm run build' first.");
  exit();
}

if (!fs.existsSync(index_file)) {
  console.log(
    "Index file in build directory not found. run command 'npm run build' first."
  );
  exit();
}

if (!fs.existsSync(data_file)) {
  console.log("Data file not found.");
  exit();
}

const rawdata = fs.readFileSync(data_file);
const data = JSON.parse(rawdata);

const ogTitle = '<meta property="og:title" content="{content}" data-rh="true">';
const ogDescription =
  '<meta property="og:description" content="{content}" data-rh="true">';
const ogImage =
  '<meta property="og:image" content="https://holidayfind.de/urlaubstyp/images/metaShareImages/{content}" data-rh="true">';

data.result.forEach((element) => {
  fs.readFile(index_file, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    let replacement = "<head>";

    replacement += ogTitle.replace(
      /{content}/g,
      element.title
        .replace(/&/g, "&amp;")
        .replace(/>/g, "&gt;")
        .replace(/</g, "&lt;")
        .replace(/"/g, "&quot;")
    );

    replacement += ogDescription.replace(
      /{content}/g,
      element.text.substring(0, 600) +
        "..."
          .replace(/&/g, "&amp;")
          .replace(/>/g, "&gt;")
          .replace(/</g, "&lt;")
          .replace(/"/g, "&quot;")
    );

    replacement += ogImage
      .replace(
        /{content}/g,
        element.image.replace(/\/images\/result_images\//g, "")
      )
      .replace(/.svg/g, ".png");

    var result = data.replace(/<head>/g, replacement);

    fs.writeFile(
      build_dir + "/index." + element.id + ".html",
      result,
      "utf8",
      function (err) {
        if (err) return console.log(err);
      }
    );
  });
});

console.log("Done!");
