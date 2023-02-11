(function(){


    var panorama, streetViewPanorama, viewer, infospot;

    var cancello, logo, porta, ingresso;




    cancello = new PANOLENS.ImagePanorama( '/Media/VRimages/المملكه/mmlka2.jpg' );
    logo = new PANOLENS.ImagePanorama( '/Media/VRimages/المملكه/mmlka.jpg' );


    //panorama.add( infospot );

    viewer = new PANOLENS.Viewer({
    
    });
    //viewer.add( panorama );
    //viewer.add( streetViewPanorama );

    viewer.add(cancello);
    viewer.add(logo);



    // Linking between panoramas
    
    // Pair
    //panorama.link( streetViewPanorama, new THREE.Vector3( -3145.23, -2000.40, -2549.48 ) );
    //streetViewPanorama.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

    cancello.link(logo, new THREE.Vector3( 5000, -305.40, -5000.48 ));

    

}())


