document.addEventListener("DOMContentLoaded", function () {
  const parentItemContainer = document.querySelectorAll(".item");

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

  const text1 = document.createElement("span");
  text1.classList.add("text");
  text1.innerText = "#1";
  const first_size_drop_down = document.createElement("select");
  const size_option_1 = document.createElement("option");
  const size_option_2 = document.createElement("option");
  size_option_1.innerText = "S";
  size_option_2.innerText = "10";

  first_size_drop_down.append(size_option_1, size_option_2);

  const first_color_drop_down = document.createElement("select");
  const option_color_1 = document.createElement("option");
  const option_color_2 = document.createElement("option");
  option_color_1.innerText = "Colour";
  option_color_2.innerText = "Red";
  first_color_drop_down.append(option_color_1, option_color_2);

  firstDropdownDiv.append(text1, first_size_drop_down, first_color_drop_down);

  // second drop down container
  const secondDropdownDiv = document.createElement("div");
  secondDropdownDiv.classList.add("dropdown");

  const text2 = document.createElement("span");
  text2.classList.add("text");
  text2.innerText = "#2";
  const second_size_drop_down = document.createElement("select");
  const option_size_1 = document.createElement("option");
  const option_size_2 = document.createElement("option");
  option_size_1.innerText = "S";
  option_size_2.innerText = "20";
  second_size_drop_down.append(option_size_1, option_size_2);

  const second_color_drop_down = document.createElement("select");
  const color_option_1 = document.createElement("option");
  const color_option_2 = document.createElement("option");
  color_option_1.innerText = "Colour";
  color_option_2.innerText = "Blue";
  second_color_drop_down.append(color_option_1, color_option_2);

  secondDropdownDiv.append(
    text2,
    second_size_drop_down,
    second_color_drop_down
  );

  // appending all child element to parent element
  dropdownContainerDiv.append(
    dropdownLabelDiv,
    firstDropdownDiv,
    secondDropdownDiv
  );

  // function to dynamically add dropdown.

  parentItemContainer.forEach((itemDiv) => {
    const radioInput = itemDiv.querySelector("input[type='radio']");

    const totalEle = document.querySelector("#total");  
    const priceElement = itemDiv.querySelector(".price-text");
    
    itemDiv.addEventListener("click", function () {
      radioInput.checked = true;
      removeDropdownContainer();
      if (radioInput.checked) {
        itemDiv.appendChild(dropdownContainerDiv);
        itemDiv.classList.add("selected");
        totalEle.textContent = priceElement.textContent;
      }
    });
  });

  function removeDropdownContainer() {
    parentItemContainer.forEach((itemDiv) => {
      itemDiv.classList.remove("selected");
      const dropdown = itemDiv.querySelector(".dropdown-container");
      if (dropdown) {
        dropdown.remove();
      }
    });
  }
});
