class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString + Math.random().toString();
  }
}

/* define a model:
class NAMEOFMODEL {
  constructor(THINGS TO ACCEPT // DIF PARAMETERS) { INITIALIZE PROPERTIES }}
  */
