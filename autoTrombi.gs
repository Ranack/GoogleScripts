var NAME = "Trombi A3 Dev";
var deck = SlidesApp.create(NAME);
var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);

function addImageSlide(link,index) {

  var image = slide.insertImage(link, position, size.width, size.height); 
  var position = {left: 0, top: 0};
  var size = {width: 300, height: 100};
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
