// function to change bgcolor and border color based on selected item
document.addEventListener("DOMContentLoaded", function () {
  const itemDivs = document.querySelectorAll(".item");

  function removeBackgroundColor() {
    itemDivs.forEach((itemDiv) => {
      itemDiv.classList.remove("selected");
    });
  }

  itemDivs.forEach((itemDiv) => {
    const radioInput = itemDiv.querySelector("input[type='radio']");

    radioInput.addEventListener("change", function () {
      removeBackgroundColor();
      if (radioInput.checked) {
        itemDiv.classList.add("selected");
      }
    });
  });
});
