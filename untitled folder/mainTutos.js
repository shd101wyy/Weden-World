window.onload = function()
{
	var canvas = document.getElementById("renderCanvas");

	// check support
	
	if(!BABYLON.Engine.isSupported())
	{
		alert("babylon engine is not supported... try use chrome");
	}
	else
	{
		// alert("Yoooo");
		// Babylon
		var engine = new BABYLON.Engine(canvas, true);

		// create scene in scene_tuto.js
		var scene = createSceneTuto(engine);

		scene.activeCamera.attachControl(canvas);

		// Once the scene is loaded, just register a render loop to render it 
		engine.runRenderLoop(function()
		{
            // engine.beginFrame();
			scene.render();
            // engine.endFrame();
            window.document.title = BABYLON.Tools.GetFps().toFixed() + " fps";
		})

		// Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });
	}
}