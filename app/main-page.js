var index = 0;

function loaded(args) {
  const webview = args.object;
  console.log("webview.src:", webview.src);
  console.log("index:", index);
  if (index == 0) {
    webview.src = "https://nativescript.org";
  }
}

exports.loaded = loaded;
