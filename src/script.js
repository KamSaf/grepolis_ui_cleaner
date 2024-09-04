function removeJunk() {
  const nodes = document.getElementsByClassName(
    "happening_large_icon_container"
  );
  if (nodes && nodes.length > 0) {
    nodes[0].innerHTML = "";
    console.log("Junk cleaned!");
  } else {
    console.log("Nothing to delete!");
  }
}

browser.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && "cleanerClicked" in changes) {
    removeJunk();
  }
});
