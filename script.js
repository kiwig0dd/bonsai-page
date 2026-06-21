const textarea = document.getElementById("opinion-usuario");
const contador = document.getElementById("contador");

textarea.addEventListener("input", () => {
  const actuales = textarea.value.length;
  const restantes = 800 - actuales;
  contador.textContent = restantes;
});

const acordeonCont = document.querySelectorAll(".consejo-top");

acordeonCont.forEach((acordeon) => {
  acordeon.addEventListener("click", () => {
    const id = acordeon.dataset.id;
    const parrafo = document.getElementById(`para-bene${id}`);

    if (acordeon.dataset.estado === "cerrado") {
      parrafo.style.display = "flex";
      acordeon.style.backgroundColor = "#372a1e";
      return (acordeon.dataset.estado = "abierto");
    }
    parrafo.style.display = "none";
    acordeon.style.backgroundColor = "var(--marron)";
    return (acordeon.dataset.estado = "cerrado");
  });
});

const btnDesplegable = document.getElementById("dropdown-btn");
const desplegable = document.getElementById("dropdown-elementos");

btnDesplegable.addEventListener("click", () => {
  if (btnDesplegable.dataset.estado === "off") {
    btnDesplegable.dataset.estado = "on";
    return (desplegable.style.display = "flex");
  }
  btnDesplegable.dataset.estado = "off";
  return (desplegable.style.display = "none");
});

const carruselContenedorUbicacion = document.getElementById("carrusel-1");
const carruselTituloUbicacion = document.getElementById("titulo-carrusel-1");
const carruselParrafoUbicacion = document.getElementById("parrafo-carrusel-1");
const carruselImagenUbicacion = document.getElementById("imagen-tipos-1");

const botones1 = document.querySelectorAll("#carrusel-boton-1");

botones1.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (carruselContenedorUbicacion.dataset.id == 1) {
      carruselTituloUbicacion.textContent = "Bonsáis de Exterior";
      carruselParrafoUbicacion.textContent =
        "Se identifican principalmente por ser especies adaptadas a climas templados que requieren imperativamente la exposición directa a los ciclos estacionales, incluyendo un periodo de reposo invernal con temperaturas frescas para regular su metabolismo; se reconocen por presentar un follaje que suele caducar o cambiar de color según la estación, una corteza rugosa y madura que refleja el paso del tiempo, y una estructura adaptada a la plena radiación solar y a la ventilación constante, lo que los hace biológicamente incompatibles con el entorno doméstico, ya que en un interior cerrarían su ciclo vital prematuramente al carecer de los cambios de luz y temperatura necesarios para su supervivencia a largo plazo.";
      carruselImagenUbicacion.src = "media/exterior.jpg";
      return (carruselContenedorUbicacion.dataset.id = 2);
    }
    carruselTituloUbicacion.textContent = "Bonsáis de Interior";
    carruselParrafoUbicacion.textContent =
      "Se identifican principalmente por ser especies de origen tropical o subtropical que, al no requerir un periodo de reposo invernal marcado por bajas temperaturas, mantienen su follaje perenne durante todo el año; para reconocerlos, busca ejemplares con hojas brillantes o texturizadas adaptadas a entornos de sombra parcial, una estructura de crecimiento rápido y vigoroso que tolera la luz tamizada de las viviendas, y la capacidad de prosperar en condiciones de humedad y temperatura estables, diferenciándose así de los árboles de exterior que, en lugar de adaptarse al ambiente doméstico, entrarían en un declive crítico al verse privados de los ciclos estacionales naturales.";
    carruselImagenUbicacion.src = "media/interior.jpg";
    return (carruselContenedorUbicacion.dataset.id = 1);
  });
});

const carruselContenedorForma = document.getElementById("carrusel-2");
const carruselTituloForma = document.getElementById("titulo-carrusel-2");
const carruselParrafoForma = document.getElementById("parrafo-carrusel-2");
const carruselImagenForma = document.getElementById("imagen-tipos-2");

const botones2 = document.querySelectorAll("#carrusel-boton-2");

const carruselObjetos2 = [
  {
    titulo: "Moyogi",
    parrafo:
      "Se identifica visualmente por un tronco que, en lugar de crecer recto, presenta una serie de curvas pronunciadas y sinuosas que se desplazan de izquierda a derecha a lo largo de su altura, manteniendo siempre el ápice o punta del árbol alineado verticalmente sobre el centro de la base; este diseño busca emular el aspecto de un árbol que ha crecido libremente en la naturaleza enfrentando obstáculos, destacando por una distribución equilibrada de las ramas que nacen desde el exterior de cada curva, lo que genera una apariencia natural, dinámica y elegante que lo convierte en uno de los estilos más icónicos y armoniosos en el arte del bonsái.",
    imagen: "media/moyogi.jpeg",
  },
  {
    titulo: "Chokkan",
    parrafo:
      "Se identifica por un tronco perfectamente recto y vertical que disminuye gradualmente su grosor desde una base ancha y poderosa hacia el ápice, proyectando una imagen de gran dignidad, estabilidad y calma; su diseño se caracteriza por una disposición simétrica y ordenada de las ramas, las cuales se distribuyen de forma alterna y bien espaciada comenzando desde el tercio inferior del tronco, creando una silueta cónica equilibrada que emula a un árbol que ha crecido en un entorno ideal, libre de competencia o adversidades ambientales, convirtiéndolo en la máxima expresión de elegancia clásica y rigor técnico dentro del arte del bonsái.",
    imagen: "media/chokkan.png",
  },
  {
    titulo: "Kengai",
    parrafo:
      "Se identifica por un tronco que se inclina decididamente hacia abajo, superando el borde de la maceta y descendiendo por debajo de la base del contenedor, emulando la figura de un árbol que crece en una ladera escarpada o colgado de un acantilado bajo la influencia constante de elementos como la gravedad, el viento o la nieve; este diseño destaca por una estructura donde la rama principal se proyecta con fuerza hacia el vacío mientras el ápice busca corregirse hacia arriba para mantener la vitalidad y el equilibrio visual, creando una composición dramática y contundente que representa la lucha por la supervivencia en entornos naturales extremadamente hostiles.",
    imagen: "media/kengai.jpg",
  },
];

let indiceActual = 0;
botones2.forEach((boton) => {
  boton.addEventListener("click", () => {
    const direccion = boton.dataset.valor;
    if (direccion === "der") {
      indiceActual = (indiceActual + 1) % carruselObjetos2.length;
    } else {
      indiceActual =
        (indiceActual - 1 + carruselObjetos2.length) % carruselObjetos2.length;
    }
    actualizarCarrusel();
  });
});

const actualizarCarrusel = () => {
  const info = carruselObjetos2[indiceActual];
  carruselTituloForma.textContent = info.titulo;
  carruselParrafoForma.textContent = info.parrafo;
  carruselImagenForma.src = info.imagen;
}
