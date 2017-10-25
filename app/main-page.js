var index = 0;

function loaded(args) {
  const webview = args.object;
  if (index == 0) {
    webview.src = "https://nativescript.org";
  }
  index += 1;
}

exports.loaded = loaded;
