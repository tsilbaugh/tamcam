/*
* Varaibles Declarations
*/

var pictureSource;
var destinationType;

/*
* Event handlers
*/

function onDeviceReady() {
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;
}

// Taking the photo
function onTakePhotoSuccess(imageData) {
var domImage = document.getElementById('takePhoto');
domImage.style.display = 'block';
domImage.src = 'data:image/jpg;base64,' + imageData;
}

// Choosing the photo
function onChoosePhotoSuccess(imageUri) {
var domImage = document.getElementById('choosePhoto');
domImage.style.display = 'block';
domImage.src = imageUri;
}

function onError(err) {
alert('Error: ' + err);
}

/*
* Camera related functions
*/

function takePhoto() {
console.log('taking photo...');
navigator.camera.getPicture(onTakePhotoSuccess, onError, {
quality: 100,
destinationType: destinationType.DATA_URL,
saveToPhotoAlbum: true 
});
}

function choosePhoto(source) {
console.log('choosing photo...');
navigator.camera.getPicture(onChoosePhotoSuccess, onError, {
quality: 50,
destinationType: destinationType.FILE_URI,
sourceType: source
});
}

/*
* Event Registrations
*/

document.addEventListener('deviceready', onDeviceReady, false);
