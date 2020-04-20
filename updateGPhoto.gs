function updateGPhoto() {

  try {

    var userEmail = 'mail@normandiewebschool.fr';
    var fileName  = userEmail + ".jpg";

    var blob = DriveApp.getFilesByName('nomdufichier.jpg').next().getBlob();
    var data = Utilities.base64EncodeWebSafe(blob.getBytes());

    AdminDirectory.Users.Photos.update({photoData: data}, userEmail);
    // Penser à activer adminDirectory !

  }

  catch (err) {
    Logger.log(err.toString());
  }

}
