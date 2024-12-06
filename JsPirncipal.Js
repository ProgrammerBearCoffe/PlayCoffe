function handleKeyDown(event) {
  // Verifica si la tecla presionada es Enter
  if (event.key === "Enter") {
    const searchText = document.getElementById('search-bar').value.trim().toLowerCase();

    // Define un objeto con las palabras clave y las rutas correspondientes
    const searchMap = {
      "ori and the blind forest": "Doc_Ori.html",
      "undertale": "Doc_Un.html",
      "cuphead": "Doc_Cuphead.html",
      "celeste": "Doc_Celeste.html"
    };

    // Crea un arreglo con las claves del objeto
    const keys = Object.keys(searchMap);
    let index = 0;

    // Usa un bucle while para buscar una coincidencia
    while (index < keys.length) {
      if (searchText === keys[index]) {
        // Redirige a la página correspondiente si hay coincidencia
        window.location.href = searchMap[keys[index]];
        return;
      }
      index++;
    }

    // Si no se encontró ninguna coincidencia
    alert("No se encontraron resultados para '" + searchText + "'. Intenta con otro término.");
  }
}

function goToPage(page) {
  window.location.href = page;
}