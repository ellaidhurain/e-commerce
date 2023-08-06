document.addEventListener("DOMContentLoaded", function () {
  const itemDivs = document.querySelectorAll(".item");

  // parent container
  const dropdownContainerDiv = document.createElement("div");
  dropdownContainerDiv.classList.add("dropdown-container");

  // label container
  const dropdownLabelDiv = document.createElement("div");
  dropdownLabelDiv.classList.add("dropdown-label");

  const label_1 = document.createElement("small");
  label_1.innerText = "Size";

  const label_2 = document.createElement("small");
  label_2.innerText = "Colour";

  dropdownLabelDiv.append(label_1, label_2);

  // first drop down container
  const firstDropdownDiv = document.createElement("div");
  firstDropdownDiv.classList.add("dropdown");

  const select_1 = document.createElement("select");
  const option_size_1 = document.createElement("option");
  option_size_1.innerText = "S";
  select_1.appendChild(option_size_1);

  const select_2 = document.createElement("select");
  const option_color_1 = document.createElement("option");
  option_color_1.innerText = "Colour";
  select_2.appendChild(option_color_1);

  firstDropdownDiv.append(select_1, select_2);

  // second drop down container
  const secondDropdownDiv = document.createElement("div");
  secondDropdownDiv.classList.add("dropdown");

  const select_3 = document.createElement("select");
  const option_size_2 = document.createElement("option");
  option_size_2.innerText = "S";
  select_3.appendChild(option_size_2);

  const select_4 = document.createElement("select");
  const option_color_2 = document.createElement("option");
  option_color_2.innerText = "Colour";
  select_4.appendChild(option_color_2);

  secondDropdownDiv.append(select_3, select_4);

  // appending all child element to parent element
  dropdownContainerDiv.append(
    dropdownLabelDiv,
    firstDropdownDiv,
    secondDropdownDiv
  );

  function removeDropdownContainer() {
    itemDivs.forEach((itemDiv) => {
      itemDiv.classList.remove("selected");
      const dropdown = itemDiv.querySelector(".dropdown-container");
      if (dropdown) {
        dropdown.remove();
      }
    });
  }

  itemDivs.forEach((itemDiv) => {
    const radioInput = itemDiv.querySelector("input[type='radio']");

    radioInput.addEventListener("change", function () {
      removeDropdownContainer();
      if (radioInput.checked) {
        itemDiv.appendChild(dropdownContainerDiv);
        itemDiv.classList.add("selected");
      }
    });
  });
});
