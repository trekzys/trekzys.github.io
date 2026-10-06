const text = document.querySelector(".status");
const pbar = document.querySelector(".progress-bar__count");

var totalFiles = 1;
var needed = 1;

function SetFilesTotal(total) {
  totalFiles = total;
}
function SetStatusChanged(status) {
  if (text == undefined || text == null) return;

  text.innerHTML = status;
}
function SetFilesNeeded(needed) {
  const downloaded = totalFiles - needed;
  const percent = Math.max(0, Math.min(100, ((totalFiles - needed) / totalFiles) * 100));

  pbar.style.width = `${percent}%`;
}
