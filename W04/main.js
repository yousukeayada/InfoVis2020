function main()
{
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

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
        [ -1,  1, 1 ], // v0
        [ -1, -1, 1 ], // v1
        [  1, -1, 1 ],  // v2
        [  1, 1, 1 ],  // v3
        [  -1, 1, -1 ],  // v4
        [  -1, -1, -1 ],  // v5
        [  1, -1, -1 ],  // v6
        [  1, 1, -1 ],  // v7
    ];

    var faces = [
        [ 0, 1, 2 ], // f0
        [ 0, 2, 3 ], // f1
        [ 3, 2, 6 ], // f2
        [ 3, 6, 7 ], // f3
        [ 7, 6, 5 ], // f4
        [ 7, 5, 4 ], // f5
        [ 4, 5, 1 ], // f6
        [ 4, 1, 0 ], // f7
        [ 4, 0, 3 ], // f8
        [ 4, 3, 7 ], // f9
        [ 1, 5, 6 ], // f10
        [ 1, 6, 2 ], // f11
    ];

    var v = [];
    for(let i=0;i<8;i++){
        v.push(new THREE.Vector3().fromArray( vertices[i] ));
    }

    var f = [];
    for(let i=0;i<12;i++){
        f.push(new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ));
    }

    var geometry = new THREE.Geometry();
    for(let i=0;i<8;i++){
        geometry.vertices.push( v[i] );
    }
    for(let i=0;i<12;i++){
        geometry.faces.push( f[i] );
    }

    // var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;
    for(let i=0;i<12;i+=2){
        geometry.faces[i].color = new THREE.Color( 1, 0, 0 );
        geometry.faces[i+1].color = new THREE.Color( 0, 1, 0 );
    }
    // material.vertexColors = THREE.VertexColors;
    // geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    // geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    // geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    material.side = THREE.FrontSide;
    // material.side = THREE.DoubleSide;

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //ワイヤーフレームのメッシュ作成
    var wire = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    var wireMesh = new THREE.Mesh(geometry, wire);
    scene.add(wireMesh);

    // 自然光
	var ambientLight = new THREE.AmbientLight(0x999999);
	// スポットライト
	var directionalLight = new THREE.DirectionalLight(0xaaaaaa,0.8);
	directionalLight.position.set(1,1,1);
	scene.add( ambientLight, directionalLight);

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        wireMesh.rotation.x += 0.01;
        wireMesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}

function main2()
{
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

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
        [ -1,  1, 1 ], // v0
        [ -1, -1, 1 ], // v1
        [  1, -1, 1 ],  // v2
        [  1, 1, 1 ],  // v3
        [  -1, 1, -1 ],  // v4
        [  -1, -1, -1 ],  // v5
        [  1, -1, -1 ],  // v6
        [  1, 1, -1 ],  // v7
    ];

    var faces = [
        [ 0, 1, 2 ], // f0
        [ 0, 2, 3 ], // f1
        [ 3, 2, 6 ], // f2
        [ 3, 6, 7 ], // f3
        [ 7, 6, 5 ], // f4
        [ 7, 5, 4 ], // f5
        [ 4, 5, 1 ], // f6
        [ 4, 1, 0 ], // f7
        [ 4, 0, 3 ], // f8
        [ 4, 3, 7 ], // f9
        [ 1, 5, 6 ], // f10
        [ 1, 6, 2 ], // f11
    ];

    var v = [];
    for(let i=0;i<8;i++){
        v.push(new THREE.Vector3().fromArray( vertices[i] ));
    }

    var f = [];
    for(let i=0;i<12;i++){
        f.push(new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ));
    }

    var geometry = new THREE.Geometry();
    for(let i=0;i<8;i++){
        geometry.vertices.push( v[i] );
    }
    for(let i=0;i<12;i++){
        geometry.faces.push( f[i] );
    }

    // var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;
    for(let i=0;i<12;i+=2){
        geometry.faces[i].color = new THREE.Color( 1, 0, 0 );
        geometry.faces[i+1].color = new THREE.Color( 0, 1, 0 );
    }
    // material.vertexColors = THREE.VertexColors;
    // geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    // geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    // geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    material.side = THREE.FrontSide;
    // material.side = THREE.DoubleSide;

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    //ワイヤーフレームのメッシュ作成
    var wire = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    var wireMesh = new THREE.Mesh(geometry, wire);
    scene.add(wireMesh);

    // 自然光
	var ambientLight = new THREE.AmbientLight(0x999999);
	// スポットライト
	var directionalLight = new THREE.DirectionalLight(0xaaaaaa,0.8);
	directionalLight.position.set(1,1,1);
	scene.add( ambientLight, directionalLight);

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        wireMesh.rotation.x += 0.01;
        wireMesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    document.addEventListener("mousedown",mouse_down_event);
    function mouse_down_event(event){
        var x_win = event.clientX;
        var y_win = event.clientY;
        var vx = renderer.domElement.offsetLeft;
        var vy = renderer.domElement.offsetTop;
        var vw = renderer.domElement.width;
        var vh = renderer.domElement.height;
        var x_NDC = 2 * (x_win - vx) / vw - 1;
        var y_NDC = - (2 * (y_win - vy) / vh - 1);
        var p_NDC = new THREE.Vector3(x_NDC,y_NDC,1);
        console.log(p_NDC.getComponent(0));
        var p_wld = p_NDC.unproject(camera);

        var origin = camera.position;
        var direction = p_wld.sub(camera.position).normalize();
        var raycaster = new THREE.Raycaster(origin,direction);
        console.log(direction.getComponent(2));
        var intersects = raycaster.intersectObject(cube);
        if(intersects.length > 0){
            intersects[0].face.color.setRGB(0,0,1);
            intersects[0].object.geometry.colorsNeedUpdate = true;
        }
    }
}