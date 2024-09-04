document.getElementById("btn").addEventListener("click", async (e) => {
  try {
    await browser.storage.local.set({ cleanerClicked: true });
  } catch (e) {
    console.log(e);
  }
  console.log("Cleaner clicked!");
});
