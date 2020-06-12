

function main(){
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    var guiCtrl = function(){
        this.geo = 'Box';
        this.x = 1;
        this.y = 1;
        this.z = 1;
        this.Camera_x = 0;
        this.Camera_y = 0;
        this.Camera_z = 5;
    }

    var geolist = ['Box', 'torusknot', 'sphere'];
    var gui = new dat.GUI();
    var guiObj = new guiCtrl();
    var folder = gui.addFolder('BoxGeometry');
    folder.add(guiObj, 'geo', {Box: geolist[0], torusknot: geolist[1], sphere: geolist[2]}).onChange(setGeometry);
    folder.add(guiObj, 'x', 0, 10).onChange(setBoxScale);
    folder.add(guiObj, 'y', 0, 10).onChange(setBoxScale);
    folder.add(guiObj, 'z', 0, 10).onChange(setBoxScale);
    folder.add(guiObj, 'Camera_x', 0, 10).onChange(setCameraPosition);
    folder.add(guiObj, 'Camera_y', 0, 10).onChange(setCameraPosition);
    folder.add(guiObj, 'Camera_z', 0, 10).onChange(setCameraPosition);
    folder.open();

    function setGeometry(){
        mesh.geometry.dispose();
        if(guiObj.geo == 'Box') mesh.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        else if(guiObj.geo == 'torusknot') mesh.geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
        else if(guiObj.geo == 'sphere') mesh.geometry = new THREE.SphereGeometry( 1, 32, 32 );
    }
    function setBoxScale(){
        mesh.scale.set(guiObj.x, guiObj.y, guiObj.z);
    }
    function setCameraPosition(){
        camera.position.set(guiObj.Camera_x, guiObj.Camera_y, guiObj.Camera_z);
    }
}