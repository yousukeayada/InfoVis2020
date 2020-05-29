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

function toon()
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
        vertexShader: document.getElementById('toon.vert').text,
        fragmentShader: document.getElementById('toon.frag').text,
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

function test(){
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();
    var sceneEdge = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );
    sceneEdge.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );
    sceneEdge.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );


    var mesh, meshEdge;
    // 画像を読み込む
    var loader = new THREE.TextureLoader();
    loader.load('toon.png', function(texture) {
        var material = new THREE.ShaderMaterial( {
            uniforms: {
                vertexColors: THREE.VertexColors,
                vertexShader: document.getElementById('toon.vert').text,
                fragmentShader: document.getElementById('toon.frag').text,
                edgeColor: {type: 'v4',value: new THREE.Vector4(0, 0, 0, 0)},
                edge: {type: 'i',value: true},
                light_position: {type: "v3", value: light.position},
                texture: {type: 't',value: texture},
            }
        } );
        // var geometry = new THREE.TorusGeometry(1, 0.5, 8, 16);
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        mesh = new THREE.Mesh(geometry, material);
        meshEdge = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        sceneEdge.add(meshEdge);

        //render front face.
        meshEdge.material.side = THREE.FrontSide;
        mesh.material.uniforms.edgeColor.value = new THREE.Vector4(0, 0, 0, 0);
        mesh.material.uniforms.edge.value = false;
        mesh.rotation.x += 1;
        mesh.rotation.y += 1;
        renderer.render(scene, camera);

        //render back face as edge.
        meshEdge.material.side = THREE.BackSide;
        meshEdge.material.uniforms.edgeColor.value = new THREE.Vector4(0, 0, 0, 1);
        meshEdge.material.uniforms.edge.value = true;
        renderer.render(sceneEdge, camera);
            
        // loop();
    });
    
    

    function loop()
    {
        requestAnimationFrame( loop );
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    
}