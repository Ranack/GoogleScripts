var NAME = "Trombi A3 Dev";
var deck = SlidesApp.create(NAME);
var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);

function addImageSlide(link, index) {
  var padding = 20;
  var size = { width: 100, height: 200 }
  var column = index % 4;
  var line = Math.floor(index / 4);
  var position = { left: column * (size.width + padding), top: line * (size.height + padding) }
  Logger.log(position.left);
  Logger.log(position.top);
  slide.insertImage(link, position.left, position.top, size.width, size.height);
}

function myFunction() {
  var images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg",
  ];
  var [title, subtitle] = deck.getSlides()[0].getPageElements();
  title.asShape().getText().setText(NAME);
  subtitle.asShape().getText().setText("A3 Développement Elon");
  images.forEach(addImageSlide);
   
}
