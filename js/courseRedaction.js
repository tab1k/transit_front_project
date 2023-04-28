const expandableHeaders = document.querySelectorAll(".expandable-header");
const img = document.querySelectorAll('right-img')

expandableHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const expandable = header.parentNode;
    expandable.classList.toggle("open");
  });
});
