
function createSceneTuto(engine)
{
	console.log("ENTER HERE");
    
    var gravity = -0.1;
	// create scene
	var scene = new BABYLON.Scene(engine);
	
	// create light
	var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(40, 500, 60), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    light.specular = new BABYLON.Color3(1, 1, 1);
    light.intensity = 0.5;
    
    var sun = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(60, 100, 10), scene);

    var light0 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(8, 10, -10), scene);
    // var light1 = new BABYLON.DirectionalLight("Dir1", new BABYLON.Vector3(100, 10, -5), scene); // right
    var light2 = new BABYLON.DirectionalLight("Dir2", new BABYLON.Vector3(-100, 10, 5), scene); // left
    var light3 = new BABYLON.DirectionalLight("Dir3", new BABYLON.Vector3(0, 10, -100), scene); // front
    var light4 = new BABYLON.DirectionalLight("Dir3", new BABYLON.Vector3(0, 10, 10), scene); // back

    light0.diffuse = new BABYLON.Color3(1, 1, 1);
    light0.specular = new BABYLON.Color3(1, 1, 1);
    // light1.diffuse = new BABYLON.Color3(1, 1, 1);
    // light1.specular = new BABYLON.Color3(1, 1, 1);
    light2.diffuse = new BABYLON.Color3(1, 1, 1);
    light2.specular = new BABYLON.Color3(1, 1, 1);
    light3.diffuse = new BABYLON.Color3(1, 1, 1);
    light3.specular = new BABYLON.Color3(1, 1, 1);  
    light4.diffuse = new BABYLON.Color3(1, 1, 1);
    light4.specular = new BABYLON.Color3(1, 1, 1);
    
    // var spot_light = new BABYLON.SpotLight("spot_light", new BABYLON.Vector3(20, 50, 20),  new BABYLON.Vector3(20, 0, 20), 0.8*Math.PI, 2,  scene);
    // spot_light.diffuse = new BABYLON.Color3(1, 1, 1);
    // spot_light.specular = new BABYLON.Color3(1, 1, 1);
	// var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(100, 100, 100), scene);

	// adding the arc rotate camera
	// var camera = new BABYLON.ArcRotateCamera("Camera", 30, -10, 40, new BABYLON.Vector3(0, 0, 0), scene);
	var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 0, -20), scene);
    camera.speed = 0.8;
    // camera.inertia = 1;

    
    /* sky box */
    // Skybox
    
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
     
    
    
	/* randomly generate box */
    /*
	for(var i = 0; i < 200; i++)
	{
		var t_box = BABYLON.Mesh.CreateBox("box_"+i, 3.0, scene);
		t_box.position = new BABYLON.Vector3(
			Math.random()*200 - 100,
			Math.random()*30,
			Math.random()*200 - 100
			);
		
		t_box.material = new BABYLON.StandardMaterial("texture_"+i, scene);
		t_box.material.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
		t_box.checkCollisions = true;
	} */
	
	// var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
	// sphere.applyGravity = true; 
    


	// enable gravity
	scene.gravity = new BABYLON.Vector3(0, gravity, 0);
	// Enable Collisions
	scene.collisionsEnabled = true;
	// scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
	// scene.fogDensity = 0.01;
    // scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);


	camera.checkCollisions = true;
	camera.applyGravity = true;
	//Set the ellipsoid around the camera (e.g. your player's size)
	camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);

	// ground.checkCollisions = true;
	setTimeout(function()
	{
		console.log("HI");
        // var generate_size = parseFloat(prompt("Decide generate size: "));
		world_generate(scene, camera, 300, 300, 0, 0);
	},1000);



    var jmp_speed = 3;
    
        // add keyboard event listener
    document.body.addEventListener("keydown", function(evt)
                            {
                                evt.preventDefault();
                                // console.log("Key Down");
                                var keycode = evt.which;
                                // console.log(keycode);
                                if(keycode == 32) // space
                                {
                                    camera.position.y += 3;
                                }
                            })
    document.body.addEventListener("keyup", function(evt)
                        {
                            evt.preventDefault();
                            // console.log("Key Up");
                        })
   

    
    
    var block = new Block("land");
    var mesh_block = createBlock("test_block", block.positions, block.normals, block.uvs, block.indices, scene);
    mesh_block.position = new BABYLON.Vector3(5, 0, -5);
    
    
    var chunk0 = generateChunk();
    var chunk1 = generateChunk();
    var chunk2 = generateChunk();
    chunk1.setPosition(-20, 0, 0);
    chunk2.setPosition(0, 20, 0);
    generateChunksMesh([chunk0, chunk1, chunk2], scene);
    
    var sphere_x = new BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
    sphere_x.position.x = 20;
    var sphere_y = new BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
    sphere_y.position.y = 20;
    var sphere_z = new BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
    sphere_z.position.z = 20;

    // var chunk = testGenerateMesh(scene);
    // chunk.position = new BABYLON.Vector3(0, 0, 5);
    // var plane = testGenerateMesh(scene);
    // plane.rotation.y += Math.PI;
	return scene;
}




