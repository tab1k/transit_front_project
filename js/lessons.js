const expandableHeaders = document.querySelectorAll(".expandable-header");

expandableHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const expandable = header.parentNode;
    expandable.classList.toggle("open");
  });
});