// comentario

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Hola Mundo")
  .pauseFor(300)
  .deleteChars(5)
  .typeString("<strong>Techolochicas</strong> ")
  .typeString(
    '<strong><span style="color: red;">Saludos</span> Cordiales!</strong>'
  )
  .pauseFor(1000)
  .start();
