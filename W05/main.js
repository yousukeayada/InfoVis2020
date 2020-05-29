function gouraud()
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

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
        uniforms: { //グローバル変数としてShaderで参照できる
            light_position: {type: "v3", value: light.position},
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}

function phong()
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

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong.frag').text,
        uniforms: {
            light_position: {type: "v3", value: light.position},
            // camera_position: {type: "v3", value: camera.position}
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}

function blinn_phong()
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

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('blinn_phong.vert').text,
        fragmentShader: document.getElementById('blinn_phong.frag').text,
        uniforms: {
            light_position: {type: "v3", value: light.position},
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}

function cook_torrance()
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

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('cook_torrance.vert').text,
        fragmentShader: document.getElementById('cook_torrance.frag').text,
        uniforms: {
            light_position: {type: "v3", value: light.position},
        }
    });

    var torus_knot = new THREE.Mesh( geometry, material );
    scene.add( torus_knot );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        torus_knot.rotation.x += 0.01;
        torus_knot.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
}


function toon1(){
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
    camera.position.set( 0, 0, 5 );
    camera.lookAt(scene.position);
    // scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    renderer.setClearColor(0xeeeeee);
    document.body.appendChild( renderer.domElement );


    var group = new THREE.Group();
    scene.add(group);

    var mesh, meshEdge;
    var image = "toon.png";
      loader = new THREE.TextureLoader();
      loader.load(image, function(texture) {
        createMesh(texture);
        loop();
      });

    function createMesh(texture) {
        var material = new THREE.ShaderMaterial( {
            vertexColors: THREE.VertexColors,
            vertexShader: document.getElementById('toon.vert').text,
            fragmentShader: document.getElementById('toon.frag').text,
            uniforms: {
                edgeColor: {type: 'v4',value: new THREE.Vector4(0, 0, 0, 1)},
                edge: {type: 'i',value: false},
                light_position: {type: "v3", value: light.position},
                texture: {type: 't',value: texture},
            }
        } );
        var material2 = new THREE.ShaderMaterial( {
            vertexColors: THREE.VertexColors,
            vertexShader: document.getElementById('toon.vert').text,
            fragmentShader: document.getElementById('toon.frag').text,
            uniforms: {
                edgeColor: {type: 'v4',value: new THREE.Vector4(0, 0, 0, 1)},
                edge: {type: 'i',value: true},
                light_position: {type: "v3", value: light.position},
                texture: {type: 't',value: texture},
            }
        } );
        mesh = new THREE.Mesh(
            new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 ),
            material
        );
        meshEdge = new THREE.Mesh(
            new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 ),
            material2
        );

        mesh.position.set(0, 0, 0);
        meshEdge.position.set(0, 0, 0);
        mesh.material.side = THREE.FrontSide;
        meshEdge.material.side = THREE.BackSide;

        group.add(meshEdge);
        group.add(mesh);
    };

    function loop()
    {
        group.rotation.x += 0.01;
        group.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame( loop );
    }
}

function toon2(){
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
    camera.position.set( 0, 0, 5 );
    camera.lookAt(scene.position);

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    renderer.setClearColor(0xeeeeee);
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.TorusKnotGeometry( 1, 0.3, 100, 20 );
    var material = new THREE.MeshToonMaterial({color: 0xff0000});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    mesh.material.side = THREE.FrontSide;
    scene.add(mesh);

    loop();

    function loop()
    {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);

        requestAnimationFrame( loop );
    }
}