
var panorama, panorama2, panorama3, viewer, progress, progressElement;

progressElement = document.getElementById( 'progress' );

function onEnter ( event ) {

  progressElement.style.width = 0;
  progressElement.classList.remove( 'finish' );

}

function onProgress ( event ) {

  progress = event.progress.loaded / event.progress.total * 100;
  progressElement.style.width = progress + '%';
  if ( progress === 100 ) {
    progressElement.classList.add( 'finish' );
  }

}

// First panorama
panorama = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka.jpg' );
panorama.addEventListener( 'progress', onProgress );
panorama.addEventListener( 'enter', onEnter );

// Second panorama
panorama2 = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka2.jpg' );
panorama2.addEventListener( 'progress', onProgress );
panorama2.addEventListener( 'enter', onEnter );

// Third panorama
panorama3 = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka.jpg' );
panorama3.addEventListener( 'progress', onProgress );
panorama3.addEventListener( 'enter', onEnter );

// Linking panoramas
panorama.link( panorama2, new THREE.Vector3( -2302.98, 358.27, -4414.74 ) );
panorama2.link( panorama, new THREE.Vector3( 4954.53, 319.21, -556.71 ) );

panorama.link( panorama3, new THREE.Vector3( 4954.53, 319.21, -556.71 ) );
panorama3.link( panorama, new THREE.Vector3( -3399.16, 1015.42, -5000.00 ) );

viewer = new PANOLENS.Viewer();
viewer.add( panorama, panorama2, panorama3 );