// Maintains detail's open/close state across page reloads
// Changing detail ID will break user's existing state for that element

// Initiate
window.addEventListener("load", (event) => {
  loadDetailState();
  // Trigger state save on details toggle
  const details = document.querySelectorAll("details");
  details.forEach(detail => {
    detail.addEventListener("toggle", saveDetailState);
  });
});
// Save details open/close state
function saveDetailState() {
  const details = document.querySelectorAll("details");
  details.forEach(detail => {
    let state = detail.open;
    localStorage.setItem(`${detail.id}State`, state);
  });
}
// Load details open/close state
function loadDetailState() {
  const details = document.querySelectorAll("details");
  details.forEach(detail => {
    let savedState = localStorage.getItem(`${detail.id}State`);
    if (savedState === null) {
      localStorage.setItem(`${detail.id}State`, detail.open);
    } else {
      detail.open = (savedState == "true");
    }
  });
}
