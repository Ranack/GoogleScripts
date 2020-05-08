
// Période Cible
let debut = new Date('05/01/2020'); //Format de date US : MM/DD/YYYY
let fin = new Date('05/31/2020');


// Script A3 Dev
function myFunctionA3dev() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    '',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  

  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(0);
  
  var feuille = classeur.getSheets()[0];
  var listArray = [];
  feuille.setName('A3 Dev');
  listArray.push(['Titre', 'Description', 'Lieu', 'Début', 'Fin', 'Couleur']);
  
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 2).setValue(calendrier.getName());
    evenements[i].getGuestList().forEach((e) => {
      Logger.log(e.getEmail());
      feuille.getRange(i+2, 4).setValue(e.getEmail())
    });
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}
// Script A3 MKT
// Script A3 Design
// Script A2 Dev
function myFunctionA2dev() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    '',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(5);
  
  var feuille = classeur.getSheets()[5];
  var listArray = [];
  feuille.setName('A2 Dev');
  listArray.push(['Titre', 'Description', 'Lieu', 'Début', 'Fin', 'Couleur']);

  
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 2).setValue(calendrier.getName());
    evenements[i].getGuestList().forEach((e) => {
      Logger.log(e.getEmail());
      feuille.getRange(i+2, 4).setValue(e.getEmail())
    });
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}
// Script A2 Mkt
function myFunctionA2Mkt() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    '',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  

  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(4);
  
  var feuille = classeur.getSheets()[4];
  var listArray = [];
  feuille.setName('A2 Marketing');
  listArray.push(['Titre', 'Description', 'Lieu', 'Début', 'Fin', 'Couleur']);
  
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 2).setValue(calendrier.getName());
    evenements[i].getGuestList().forEach((e) => {
      Logger.log(e.getEmail());
      feuille.getRange(i+2, 4).setValue(e.getEmail())
    });
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}

// Script A2 Design
function myFunctionA2Dsg() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    '',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  

  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(6);
  
  var feuille = classeur.getSheets()[6];
  var listArray = [];
  feuille.setName('A2 Design');
  listArray.push(['Titre', 'Description', 'Lieu', 'Début', 'Fin', 'Couleur']);
  
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 2).setValue(calendrier.getName());
    evenements[i].getGuestList().forEach((e) => {
      Logger.log(e.getEmail());
      feuille.getRange(i+2, 4).setValue(e.getEmail())
    });
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}
// Script A1
function myFunctionA1() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    '',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  

  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(7);
  
  var feuille = classeur.getSheets()[7];
  var listArray = [];
  feuille.setName('A1');
  listArray.push(['Titre', 'Description', 'Lieu', 'Début', 'Fin', 'Couleur']);
  
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 2).setValue(calendrier.getName());
    evenements[i].getGuestList().forEach((e) => {
      Logger.log(e.getEmail());
      feuille.getRange(i+2, 4).setValue(e.getEmail())
    });
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}

// Lancement des scripts
function go(){
  myFunctionA3dev();
  myFunctionA2dev();
  myFunctionA2Dsg();
  myFunctionA2Mkt();
  myFunctionA1();
}

function onOpen(e)  {
  if (e && e.authMode == ScriptApp.AuthMode.LIMITED) {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Générer')
    .addItem('Parcourir Agenda', 'go')
    .addToUi();
  }
}
function onInstall(e) {
  onOpen(e);
}