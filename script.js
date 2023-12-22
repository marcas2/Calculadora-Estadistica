function calcularProbabilidad() {
    const porcentajeWindows = parseFloat(document.getElementById("probabilidad-windows").value);
    const porcentajeLinux = parseFloat(document.getElementById("probabilidad-linux").value);
    const porcentajeMac = parseFloat(document.getElementById("probabilidad-mac").value);

    const porcentajeVulnerabilidadWindows = parseFloat(document.getElementById("vulnerabilidad-windows").value);
    const porcentajeVulnerabilidadLinux = parseFloat(document.getElementById("vulnerabilidad-linux").value);
    const porcentajeVulnerabilidadMac = parseFloat(document.getElementById("vulnerabilidad-mac").value);

    // Validamos que la suma de los porcentajes sea igual a 100
    if (porcentajeWindows + porcentajeLinux + porcentajeMac !== 100) {
      alert("La suma de los porcentajes debe ser igual a 100.");
      return;
    }

    const probabilidadWindows = (porcentajeWindows / 100) * (porcentajeVulnerabilidadWindows / 100);
    const probabilidadLinux = (porcentajeLinux / 100) * (porcentajeVulnerabilidadLinux / 100);
    const probabilidadMac = (porcentajeMac / 100) * (porcentajeVulnerabilidadMac / 100);

    const probabilidadTotal = probabilidadWindows + probabilidadLinux + probabilidadMac;

    document.getElementById("probabilidad-resultado").textContent = probabilidadTotal.toFixed(4);
  }