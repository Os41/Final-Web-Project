(function(){


    var panorama, streetViewPanorama, viewer, infospot;

    var cancello, logo, porta, ingresso;




    cancello = new PANOLENS.ImagePanorama( '/Media/VRimages/شرما/Street View 360.jpg' );
    logo = new PANOLENS.ImagePanorama( '/Media/VRimages/شرما/Street View 3601.jpg' );
    porta = new PANOLENS.ImagePanorama( '/Media/VRimages/شرما/Street View 3602.jpg' );
    ingresso = new PANOLENS.ImagePanorama( '/Media/VRimages/شرما/Street View 3604.jpg' );

    //panorama.add( infospot );

    viewer = new PANOLENS.Viewer({
    
    });
    //viewer.add( panorama );
    //viewer.add( streetViewPanorama );

    viewer.add(cancello);
    viewer.add(logo);
    viewer.add(porta);
    viewer.add(ingresso);


    // Linking between panoramas
    
    // Pair
    //panorama.link( streetViewPanorama, new THREE.Vector3( -3145.23, -2000.40, -2549.48 ) );
    //streetViewPanorama.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

    cancello.link(logo, new THREE.Vector3( 5000, -305.40, -5000.48 ));
    logo.link(porta, new THREE.Vector3( 100, -305.40, -5000.48 ));
    porta.link(ingresso, new THREE.Vector3( -3145.23, -2000.40, -2549.48));

    

}())


