(function(){


    var panorama, streetViewPanorama, viewer, infospot;

    var cancello, logo, porta, ingresso, fifth, sixth,seventh,eighth,nineth,tenth;


    //panorama = new PANOLENS.ImagePanorama( 'img/salotto.png' );
    //streetViewPanorama = new PANOLENS.GoogleStreetviewPanorama( 'y0rbkep4RBcAAAQqZe0GiQ' );

    cancello = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place1.jpg' );
    logo = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place2.jpg' );
    porta = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place3.jpg' );
    ingresso = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place5.jpg' );
    fifth = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place6.jpg' );
    sixth = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place7.jpg' );
    seventh = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place8.jpg' );
    eighth = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place9.jpg' );
    nineth = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place10.jpg' );
    tenth = new PANOLENS.ImagePanorama( '../../Media/VRimages/JEDDAH/place11.jpg' );



    //panorama.add( infospot );

    viewer = new PANOLENS.Viewer({

        

    });
    //viewer.add( panorama );
    //viewer.add( streetViewPanorama );

    viewer.add(cancello);
    viewer.add(logo);
    viewer.add(porta);
    viewer.add(ingresso);
    viewer.add(fifth);
    viewer.add(sixth);
    viewer.add(seventh);
    viewer.add(eighth);
    viewer.add(nineth);
    viewer.add(tenth);



    // Linking between panoramas
    
    // Pair
    //panorama.link( streetViewPanorama, new THREE.Vector3( -3145.23, -2000.40, -2549.48 ) );
    //streetViewPanorama.link( panorama, new THREE.Vector3( -3429.01, 1205.85, -3421.88 ) );

    cancello.link(logo, new THREE.Vector3( 5000, -2000, -0.48 ));
    logo.link(porta, new THREE.Vector3( 5000, -2000, -0.48  ));
    porta.link(ingresso, new THREE.Vector3(5000, -2000, -0.48));
    ingresso.link(fifth, new THREE.Vector3(5000, -2000, -0.48));
    fifth.link(sixth, new THREE.Vector3(5000, -2000, -0.48));
    sixth.link(seventh, new THREE.Vector3(5000, -2000, -0.48));
    seventh.link(eighth, new THREE.Vector3(5000, -2000, -0.48));
    eighth.link(nineth, new THREE.Vector3(5000, -2000, -0.48));
    nineth.link(tenth, new THREE.Vector3(5000, -2000, -0.48));



    

}())


