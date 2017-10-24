var siteIndex = 0;

var sites = [
  "https://nativescript.org",
  "https://google.com"
]

function loaded(args) {
  const webview = args.object;
  console.log("webview.src:", webview.src);
  console.log("siteIndex:", siteIndex);
  if (siteIndex < 2) {
    webview.src = sites[siteIndex++];
  }
}

exports.loaded = loaded;
