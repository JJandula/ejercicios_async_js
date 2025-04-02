const GOTApi = async () => {
  try {
    const respuesta = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const datos = await respuesta.json();

    const select = document.querySelector("#character-list");
    const image = document.querySelector(".character-image");

    image.src =
      "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt27891233be6204a1/5df8926ebb5e6008b9decea0/file-logo-game-of-thrones-png-1500.png?imageManager=true&impolicy=resize&height=360";

    let selectOption = document.createElement("option");

    selectOption.textContent = "Select a Character";

    selectOption.value =
      "https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt27891233be6204a1/5df8926ebb5e6008b9decea0/file-logo-game-of-thrones-png-1500.png?imageManager=true&impolicy=resize&height=360";

    select.appendChild(selectOption);

    for (const character of datos) {

      //ADD OPTIONS NAMES

      let options = document.createElement("option");

      options.textContent = character.fullName;
      options.value = character.imageUrl;

      select.appendChild(options);
    }

    // CHANGE IMAGES

    select.addEventListener("change", (ev) => {
      textContent = ev.target.value;
      image.src = textContent;
      image.alt = "Imagen personaje";
    });

  } catch (error) {
    console.error("Fallo de conexion con la API... Try Again!");
  }
};

GOTApi();
