// (function(){


//     var panorama, streetViewPanorama, viewer, infospot;

//     var cancello, logo, porta, ingresso;




//     cancello = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka2.jpg' );
//     logo = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka.jpg' );


//     //panorama.add( infospot );

//     viewer = new PANOLENS.Viewer({
    
//     });
//     //viewer.add( panorama );
//     //viewer.add( streetViewPanorama );

//     viewer.add(cancello);
//     viewer.add(logo);



//     // Linking between panoramas
    
//     // Pair
//     //panorama.link( streetViewPanorama, new THREE.Vector3( -3145.23, -2000.40, -2549.48 ) );
//     //streetViewPanorama.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

//     cancello.link(logo, new THREE.Vector3( 5000, -305.40, -5000.48 ));

    

// }())





(function() {

    // Define your panoramas
    var pano1 = new PANOLENS.ImagePanorama('../../Media/VRimages/المملكه/mmlka2.jpg' );
    var pano2 = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka.jpg'  );
    var pano3 = new PANOLENS.ImagePanorama( '../../Media/VRimages/المملكه/mmlka.jpg' );
  
    // Add the panoramas to the viewer
    var viewer = new PANOLENS.Viewer();
    viewer.add( pano1, pano2, pano3 );
  
    // Create info spots and link them to the next panorama
    var infospot1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospot1.position.set( -1500, -550, -2500 );
    infospot1.addHoverElement( document.getElementById( 'desc-container' ), 200 );
    infospot1.addEventListener( 'hoverenter', function() {
      this.hoverElement.classList.add( 'fade-in' );
    });
    infospot1.addEventListener( 'hoverleave', function() {
      this.hoverElement.classList.remove( 'fade-in' );
    });
    infospot1.addEventListener( 'click', function() {
      viewer.setPanorama( pano2 );
    });
    pano1.add( infospot1 );
  
    var infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
    infospot2.position.set( -1500, 550, -2500 );
    infospot2.addHoverElement( document.getElementById( 'desc-container' ), 200 );
    infospot2.addEventListener( 'hoverenter', function() {
      this.hoverElement.classList.add( 'fade-in' );
    });
    infospot2.addEventListener( 'hoverleave', function() {
      this.hoverElement.classList.remove( 'fade-in' );
    });
    infospot2.addEventListener( 'click', function() {
      viewer.setPanorama( pano3 );
    });
    pano1.add( infospot2 );
  
    // Add a loading progress bar
    var loadingBar = new PANOLENS.LoadingBar();
    viewer.add( loadingBar );
  
    // Add an event listener to start the loading progress bar
    viewer.addEventListener( 'panolens-viewer-handler-loaded', function() {
      loadingBar.hide();
    });
  }());
  