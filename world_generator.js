// create 20 * 20 
var terrains = [];
var block_width = 2;

var mergeMeshes = function (meshName, arrayObj, scene) {
    var arrayPos = [];
    var arrayNormal = [];
    var arrayUv = [];
    var arrayUv2 = [];
    var arrayColor = [];
    var arrayMatricesIndices = [];
    var arrayMatricesWeights = [];
    var arrayIndice = [];
    var savedPosition = [];
    var savedNormal = [];
    var newMesh = new BABYLON.Mesh(meshName, scene);
    var UVKind = true;
    var UV2Kind = true;
    var ColorKind = true;
    var MatricesIndicesKind = true;
    var MatricesWeightsKind = true;

    for (i = 0; i != arrayObj.length ; i++) {
        if (!arrayObj[i].mesh.isVerticesDataPresent([BABYLON.VertexBuffer.UVKind]))
            UVKind = false;
        if (!arrayObj[i].mesh.isVerticesDataPresent([BABYLON.VertexBuffer.UV2Kind]))
            UV2Kind = false;
        if (!arrayObj[i].mesh.isVerticesDataPresent([BABYLON.VertexBuffer.ColorKind]))
            ColorKind = false;
        if (!arrayObj[i].mesh.isVerticesDataPresent([BABYLON.VertexBuffer.MatricesIndicesKind]))
            MatricesIndicesKind = false;
        if (!arrayObj[i].mesh.isVerticesDataPresent([BABYLON.VertexBuffer.MatricesWeightsKind]))
            MatricesWeightsKind = false;
    }

    for (i = 0; i != arrayObj.length ; i++) {
        var ite = 0;
        var iter = 0;
        arrayPos[i] = arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        arrayNormal[i] = arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
        if (UVKind)
            arrayUv = arrayUv.concat(arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.UVKind));
        if (UV2Kind)
            arrayUv2 = arrayUv2.concat(arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.UV2Kind));
        if (ColorKind)
            arrayColor = arrayColor.concat(arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.ColorKind));
        if (MatricesIndicesKind)
            arrayMatricesIndices = arrayMatricesIndices.concat(arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind));
        if (MatricesWeightsKind)
            arrayMatricesWeights = arrayMatricesWeights.concat(arrayObj[i].mesh.getVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind));

        var maxValue = savedPosition.length / 3;
        var worldMatrix = arrayObj[i].mesh.getWorldMatrix();

        while (ite < arrayPos[i].length) {
            var vertex = new BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(arrayPos[i][ite], arrayPos[i][ite + 1], arrayPos[i][ite + 2]), worldMatrix);
            savedPosition.push(vertex.x);
            savedPosition.push(vertex.y);
            savedPosition.push(vertex.z);
            ite = ite + 3;
        }
        while (iter < arrayNormal[i].length) {
            var vertex = new BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(arrayNormal[i][iter], arrayNormal[i][iter + 1], arrayNormal[i][iter + 2]), worldMatrix);
            savedNormal.push(vertex.x);
            savedNormal.push(vertex.y);
            savedNormal.push(vertex.z);
            iter = iter + 3;
        }
        if (i > 0) {
            var tmp = arrayObj[i].mesh.getIndices();
            for (it = 0 ; it != tmp.length; it++) {
                tmp[it] = tmp[it] + maxValue;
            }
            arrayIndice = arrayIndice.concat(tmp);
        }
        else {
            arrayIndice = arrayObj[i].mesh.getIndices();
        }

        arrayObj[i].mesh.dispose(false);
    }

    newMesh.setVerticesData(savedPosition, BABYLON.VertexBuffer.PositionKind, false);
    newMesh.setVerticesData(savedNormal, BABYLON.VertexBuffer.NormalKind, false);
    if (arrayUv.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.UVKind, false);
    if (arrayUv2.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.UV2Kind, false);
    if (arrayColor.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.ColorKind, false);
    if (arrayMatricesIndices.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.MatricesIndicesKind, false);
    if (arrayMatricesWeights.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.MatricesWeightsKind, false);

    newMesh.setIndices(arrayIndice);
    return newMesh;
};



var mergeMeshes2 = function (meshName, arrayObj, scene) {
    var arrayPos = [];
    var arrayNormal = [];
    var arrayUv = [];
    var arrayUv2 = [];
    var arrayColor = [];
    var arrayMatricesIndices = [];
    var arrayMatricesWeights = [];
    var arrayIndice = [];
    var savedPosition = [];
    var savedNormal = [];
    var newMesh = new BABYLON.Mesh(meshName, scene);
    var UVKind = true;
    var UV2Kind = true;
    var ColorKind = true;
    var MatricesIndicesKind = true;
    var MatricesWeightsKind = true;

    for (i = 0; i != arrayObj.length ; i++) {
        if (!arrayObj[i].isVerticesDataPresent([BABYLON.VertexBuffer.UVKind]))
            UVKind = false;
        if (!arrayObj[i].isVerticesDataPresent([BABYLON.VertexBuffer.UV2Kind]))
            UV2Kind = false;
        if (!arrayObj[i].isVerticesDataPresent([BABYLON.VertexBuffer.ColorKind]))
            ColorKind = false;
        if (!arrayObj[i].isVerticesDataPresent([BABYLON.VertexBuffer.MatricesIndicesKind]))
            MatricesIndicesKind = false;
        if (!arrayObj[i].isVerticesDataPresent([BABYLON.VertexBuffer.MatricesWeightsKind]))
            MatricesWeightsKind = false;
    }

    for (i = 0; i != arrayObj.length ; i++) {
        var ite = 0;
        var iter = 0;
        arrayPos[i] = arrayObj[i].getVerticesData(BABYLON.VertexBuffer.PositionKind);
        arrayNormal[i] = arrayObj[i].getVerticesData(BABYLON.VertexBuffer.NormalKind);
        if (UVKind)
            arrayUv = arrayUv.concat(arrayObj[i].getVerticesData(BABYLON.VertexBuffer.UVKind));
        if (UV2Kind)
            arrayUv2 = arrayUv2.concat(arrayObj[i].getVerticesData(BABYLON.VertexBuffer.UV2Kind));
        if (ColorKind)
            arrayColor = arrayColor.concat(arrayObj[i].getVerticesData(BABYLON.VertexBuffer.ColorKind));
        if (MatricesIndicesKind)
            arrayMatricesIndices = arrayMatricesIndices.concat(arrayObj[i].getVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind));
        if (MatricesWeightsKind)
            arrayMatricesWeights = arrayMatricesWeights.concat(arrayObj[i].getVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind));

        var maxValue = savedPosition.length / 3;
        var worldMatrix = arrayObj[i].getWorldMatrix();

        while (ite < arrayPos[i].length) {
            var vertex = new BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(arrayPos[i][ite], arrayPos[i][ite + 1], arrayPos[i][ite + 2]), worldMatrix);
            savedPosition.push(vertex.x);
            savedPosition.push(vertex.y);
            savedPosition.push(vertex.z);
            ite = ite + 3;
        }
        while (iter < arrayNormal[i].length) {
            var vertex = new BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(arrayNormal[i][iter], arrayNormal[i][iter + 1], arrayNormal[i][iter + 2]), worldMatrix);
            savedNormal.push(vertex.x);
            savedNormal.push(vertex.y);
            savedNormal.push(vertex.z);
            iter = iter + 3;
        }
        if (i > 0) {
            var tmp = arrayObj[i].getIndices();
            for (it = 0 ; it != tmp.length; it++) {
                tmp[it] = tmp[it] + maxValue;
            }
            arrayIndice = arrayIndice.concat(tmp);
        }
        else {
            arrayIndice = arrayObj[i].getIndices();
        }

        arrayObj[i].dispose(false);
    }

    newMesh.setVerticesData(savedPosition, BABYLON.VertexBuffer.PositionKind, false);
    newMesh.setVerticesData(savedNormal, BABYLON.VertexBuffer.NormalKind, false);
    if (arrayUv.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.UVKind, false);
    if (arrayUv2.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.UV2Kind, false);
    if (arrayColor.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.ColorKind, false);
    if (arrayMatricesIndices.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.MatricesIndicesKind, false);
    if (arrayMatricesWeights.length > 0)
        newMesh.setVerticesData(arrayUv, BABYLON.VertexBuffer.MatricesWeightsKind, false);

    newMesh.setIndices(arrayIndice);
    return newMesh;
};
 
 

/* only generate land */
function generateBlock(scene)
{
    var material = new BABYLON.StandardMaterial("mat", scene, true, true);
    material.diffuseTexture = new BABYLON.Texture("./media/land.png", scene);
    material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    material.specularColor = new BABYLON.Color3(0, 0, 0);
    material.emissiveColor = new BABYLON.Color3(0, 0, 0);
    
    var plane1 = new BABYLON.Mesh.CreatePlane("plane", block_width, scene);
    plane1.material = material;
    
    var plane2 = new BABYLON.Mesh.CreatePlane("plane", block_width, scene);
    plane2.material = material;

    var plane3 = new BABYLON.Mesh.CreatePlane("plane", block_width, scene);
    plane3.material = material;
    
    var plane4 = new BABYLON.Mesh.CreatePlane("plane", block_width, scene);
    plane4.material = material;
    
    var plane5 = new BABYLON.Mesh.CreatePlane("plane", block_width, scene);
    plane5.material = new BABYLON.StandardMaterial("mat", scene, true, true);
    plane5.material.diffuseTexture = new BABYLON.Texture("./media/top.png", scene);
    plane5.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    plane5.material.specularColor = new BABYLON.Color3(0, 0, 0);
    plane5.material.emissiveColor = new BABYLON.Color3(0, 0, 0);

    
    plane1.rotation.y = Math.PI;
    plane1.position.z = block_width;
    // plane1.parent = plane2;
    
    plane3.rotation.y = -Math.PI/2;
    plane3.position.x = block_width/2;
    plane3.position.z = block_width/2;
    // plane3.parent = plane2;
    
    plane4.rotation.y = Math.PI/2;
    plane4.position.x = -block_width/2;
    plane4.position.z = block_width/2;
    // plane4.parent = plane2;
    
    plane5.rotation.x = Math.PI/2;
    plane5.position.y = block_width/2;
    plane5.position.z = block_width/2;
    // plane5.parent = plane2;
    
    plane1.checkCollisions = true;
    plane2.checkCollisions = true;
    plane3.checkCollisions = true;
    plane4.checkCollisions = true;
    plane5.checkCollisions = true;
    
    return mergeMeshes("chuck", [plane1, plane2, plane3, plane4, plane5], scene);
    
    // var chunk = [plane1, plane2, plane3, plane4, plane5];
    // return mergeMeshes("chunk", chunk, scene);
    // return plane2;
}

function world_generate(scene, camera, width, height, x, z)
{
	//Height multiplies the final noise output
	// var Height = 10;
    // var p;
    // var chunks = [];
    /*
    var positions = [];
    var uvs = [];
    var normals = [];
    var indices = [];
    */
    var count = 0;
    var chunks = [];
        
    noise.seed(Math.random());
	/* noise */
	for(var i = 0; i < width; i++)
	{
		for(var j = 0; j < height; j++)
		{           
                var block_x = i/2;
                var block_z = j/2;
                // var block_y = Math.floor(perlin2d(i, j)*30);
                var block_y = Math.floor(noise.simplex2(i, j)*30);

                // generate chunk and set its position
                var chunk = generateChunk();
                chunk.setPosition(block_x * 2 * block_width, block_y * block_width, block_z * 2 * block_width);
                // save to array
                chunks.push(chunk);
                
                 // update count
                count++;            
                if(count == 256)
                {
                    generateChunksMesh(chunks, scene);
                    chunks = [];
                    count = 0;
                }   
		}
	}
    alert("Finish generating terrain");
    console.log("FINISH");
}


