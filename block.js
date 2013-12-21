
// Chunk
function Block(type, size)
{   
    if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    /*
       _____________ 
      /|           | 
     / |          /|
3   /__|________2/ |
    |  |        |  |
    |  |        |  |
    |  |________|__| 
    | /         | /  
    |/__________|/
    0            1
    
    */
   
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    // front
    // 0
    positions.push(0, 0, 0);
    normals.push(0, 0, -1);
    uvs.push(0, 0);
    
    // 1 
    positions.push(this.size, 0, 0);
    normals.push(0, 0, -1);
    uvs.push(1, 0);
    
    // 2
    positions.push(this.size, this.size, 0);
    normals.push(0, 0, -1);
    uvs.push(1, 1);
    
    // 3
    positions.push(0, this.size, 0);
    normals.push(0, 0, -1);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    
    // back
    //    7    6
    //
    //    4    5
    //
    // 4
    positions.push(0, 0, this.size);
    normals.push(0, 0, 1);
    uvs.push(1, 0);
    
    // 5
    positions.push(this.size, 0, this.size);
    normals.push(0, 0, 1);
    uvs.push(0, 0);
    
    // 6
    positions.push(this.size, this.size, this.size);
    normals.push(0, 0, 1);
    uvs.push(0, 1);
    
    // 7
    positions.push(0, this.size, this.size);
    normals.push(0, 0, 1);
    uvs.push(1, 1);
    
    indices.push(7, 6, 5);
    indices.push(4, 7, 5);
    
    
    // left 
    //
    //    8   9  front
    //    
    //    11   10
    //
    // 8
    positions.push(0, this.size, this.size);
    normals.push(-1, 0, 0);
    uvs.push(0, 1);
    // 9
    positions.push(0, this.size, 0);
    normals.push(-1, 0, 0);
    uvs.push(1, 1);
    // 10
    positions.push(0, 0, 0);
    normals.push(-1, 0, 0);
    uvs.push(1, 0);
    // 11
    positions.push(0, 0, this.size);
    normals.push(-1, 0, 0);
    uvs.push(0, 0);
    
    indices.push(11, 10, 8);
    indices.push(8, 10, 9);
    
    
    //  right
    //
    //    12 13   front
    //    14 15
    //
    // 12
    positions.push(this.size, this.size, this.size);
    normals.push(1, 0, 0);
    uvs.push(1, 1);
    // 13
    positions.push(this.size, this.size, 0);
    normals.push(1, 0, 0);
    uvs.push(0, 1);
    // 14
    positions.push(this.size, 0, this.size);
    normals.push(1, 0, 0);
    uvs.push(1, 0);
    // 15
    positions.push(this.size, 0, 0);
    normals.push(1, 0, 0);
    uvs.push(0, 0);
    
    indices.push(12, 13, 15);
    indices.push(12, 15, 14);
    
    
        // top
    //
    //    16   17
    //        
    //   19   18
    //      
    //     front
    //
    // 16
    
    positions.push(0, this.size, this.size);
    normals.push(0, 1, 0);
    uvs.push(0, 1);
    
    // 17
    positions.push(this.size, this.size, this.size);
    normals.push(0, 1, 0);
    uvs.push(1, 1);
    
    // 18
    positions.push(this.size, this.size, 0);
    normals.push(0, 1, 0);
    uvs.push(1, 0);
    
    // 19
    positions.push(0, this.size, 0);
    normals.push(0, 1, 0);
    uvs.push(0, 0);
    
    indices.push(17, 16, 19);
    indices.push(17, 19, 18);
    
    // bottom
    //
    //      front
    //    20  21
    //    
    //    22  23
    //
    // 20
    positions.push(0, 0, this.size);
    normals.push(0, -1, 0);
    uvs.push(0, 1);
    // 21
    positions.push(this.size, 0, this.size);
    normals.push(0, -1, 0);
    uvs.push(1, 1);
    // 22
    positions.push(0, 0, 0);
    normals.push(0, -1, 0);
    uvs.push(0, 0);
    // 23
    positions.push(this.size, 0, 0);
    normals.push(0, -1, 0);
    uvs.push(1, 0);
    
    indices.push(20, 21, 23);
    indices.push(20, 23, 22);
    
    // set positions normals uvs indices
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;
    
    this.position = [0, 0, 0];
    
    // translate block
    this.setPosition = function(x, y, z)
    {
        var dx = x - this.position[0];
        var dy = y - this.position[1];
        var dz = z - this.position[2];
        
        this.position[0] = x; this.position[1] = y; this.position[2] = z;   
    
        // update location
        for(var i = 0; i < positions.length; i = i + 3)
        {
            positions[i]+=dx;
            positions[i+1]+=dy;
            positions[i+2]+=dz;
        }
    }
    // translate block
    this.translate = function(dx, dy, dz)
    {
         // update location
        for(var i = 0; i < positions.length; i = i + 3)
        {
            positions[i]+=dx;
            positions[i+1]+=dy;
            positions[i+2]+=dz;
        }
    }
    
}

/*
    create chunk mesh
*/
function createBlock(name, positions, normals, uvs, indices, scene)
{
    // create block
    var block = new BABYLON.Mesh(name, scene);
    
    // set block data
    block.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind, true);
    block.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind, true);
    block.setVerticesData(uvs, BABYLON.VertexBuffer.UVKind, true);
    block.setIndices(indices);
    
    // var block = new BABYLON.Mesh.CreateBox("test", 1.5, scene);
    
    // block.material = new BABYLON.StandardMaterial("hi", scene);
    // block.material.diffuseColor = new BABYLON.Color3(50/255, 193/255, 176/255); 
    
    var material0 = new BABYLON.StandardMaterial("material0", scene);
    material0.diffuseTexture = new BABYLON.Texture("./textures/land.png", scene);
    // material0.bumpTexture = new BABYLON.Texture("./textures/grass_dirt.png", scene);
    material0.diffuseColor = new BABYLON.Color3(1, 1, 1);
    
    var material1 = new BABYLON.StandardMaterial("material1", scene);
    material1.diffuseTexture = new BABYLON.Texture("./textures/land_top.png", scene);
    // material1.bumpTexture = new BABYLON.Texture("./textures/grass.png", scene);
    material1.diffuseColor = new BABYLON.Color3(1, 1, 1);
    
    var material2 = new BABYLON.StandardMaterial("material2", scene);
    material2.diffuseColor = new BABYLON.Color3(1, 0, 0);

    // create multi texture
    var multi_texture = new BABYLON.MultiMaterial("multi_texture", scene);
    multi_texture.subMaterials.push(material0);
    multi_texture.subMaterials.push(material1);
    // multi_texture.subMaterials.push(material2);
  
    block.material = material1;
    return block;
    // set material
    block.material = multi_texture;
    
    block.subMeshes = [];
    var verticesCount = block.getTotalVertices();
    console.log(verticesCount);
    for(var i = 0; i < verticesCount/24; i=i+1)
    {
        // front back left right
        block.subMeshes.push(new BABYLON.SubMesh( 0, 24*i, 16, i*36, 24, block));
        // top bottom
        block.subMeshes.push(new BABYLON.SubMesh( 1, 24*i+16, 8, i*36+24, 12, block));
     }
    return block;
}

/*
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================
=======================================================

*/
/* front face of chunk */
var chunkFrontFace = function(type, size)
{
    if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    // front
    //   3  2
    //   0  1
    // 0
    positions.push(0, 0, 0);
    normals.push(0, 0, -1);
    uvs.push(0, 0);
    
    // 1 
    positions.push(this.size, 0, 0);
    normals.push(0, 0, -1);
    uvs.push(1, 0);
    
    // 2
    positions.push(this.size, this.size, 0);
    normals.push(0, 0, -1);
    uvs.push(1, 1);
    
    // 3
    positions.push(0, this.size, 0);
    normals.push(0, 0, -1);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;
}

/* back face of chunk */
var chunkBackFace = function(type, size)
{
    if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    /* 
         3   2
    
         0   1  => x
    */
    // back
    // 0
    positions.push(this.size, 0, this.size);
    normals.push(0, 0, 1);
    uvs.push(0, 0);
    
    // 1 
    positions.push(0, 0, this.size);
    normals.push(0, 0, 1);
    uvs.push(1, 0);
    
    // 2
    positions.push(0, this.size, this.size);
    normals.push(0, 0, 1);
    uvs.push(1, 1);
    
    // 3
    positions.push(this.size, this.size, this.size);
    normals.push(0, 0, 1);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;
}

/* left face of chunk */
var chunkLeftFace = function(type, size)
{
  if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    /* 
         3   2
    
         0   1  => front
    */
    // left
    // 0
    positions.push(0, 0, this.size);
    normals.push(-1, 0, 0);
    uvs.push(0, 0);
    
    // 1 
    positions.push(0, 0, 0);
    normals.push(-1, 0, 0);
    uvs.push(1, 0);
    
    // 2
    positions.push(0, this.size, 0);
    normals.push(-1, 0, 0);
    uvs.push(1, 1);
    
    // 3
    positions.push(0, this.size, this.size);
    normals.push(-1, 0, 0);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;   
}

/* right face of chunk */
var chunkRightFace = function(type, size)
{
  if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    /* 
                  3   2
    
    front    <=   0   1  
    */
    // right
    // 0
    positions.push(this.size, 0, 0);
    normals.push(1, 0, 0);
    uvs.push(0, 0);
    
    // 1 
    positions.push(this.size, 0, this.size);
    normals.push(1, 0, 0);
    uvs.push(1, 0);
    
    // 2
    positions.push(this.size, this.size, this.size);
    normals.push(1, 0, 0);
    uvs.push(1, 1);
    
    // 3
    positions.push(this.size, this.size, 0);
    normals.push(1, 0, 0);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;   
}

/* top face of chunk */
var chunkTopFace = function(type, size)
{
  if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    /* 
                  3   2
    
                  0   1  
                  
                   ||
                   front
    */
    // right
    // 0
    positions.push(0, this.size, 0);
    normals.push(0, 1, 0);
    uvs.push(0, 0);
    
    // 1 
    positions.push(this.size, this.size, 0);
    normals.push(0, 1, 0);
    uvs.push(1, 0);
    
    // 2
    positions.push(this.size, this.size, this.size);
    normals.push(0, 1, 0);
    uvs.push(1, 1);
    
    // 3
    positions.push(0, this.size, this.size);
    normals.push(0, 1, 0);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;   
}

/* bottom face of chunk */
var chunkBottomFace = function(type, size)
{
  if(typeof(type)!=="undefined")
        this.type = type;
    else 
        this.type = "land";
    
    if(typeof(size)!=="undefined")
        this.size = size;
    else
        this.size = 2;
    
    var positions = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    
    /* 
    
                    front
                  3   2
    
                  0   1  
    */
    // bottom
    // 0
    positions.push(0, 0, this.size);
    normals.push(0, -1, 0);
    uvs.push(0, 0);
    
    // 1 
    positions.push(this.size, 0, this.size);
    normals.push(0, -1, 0);
    uvs.push(1, 0);
    
    // 2
    positions.push(this.size, 0, 0);
    normals.push(0, -1, 0);
    uvs.push(1, 1);
    
    // 3
    positions.push(0, 0, 0);
    normals.push(0, -1, 0);
    uvs.push(0, 1);
    
    indices.push(0, 2, 3);
    indices.push(0, 1, 2);
    
    this.positions = positions;
    this.normals = normals;
    this.uvs = uvs;
    this.indices = indices;   
}

/*
    save 6 faces
*/
function Chuck(front, back, left, right, top, bottom)
{
    this.front = front;
    this.back = back;
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    
    // chunk position
    this.position = [0, 0, 0];
    
     // translate block
    this.setPosition = function(x, y, z)
    {
        var dx = x - this.position[0];
        var dy = y - this.position[1];
        var dz = z - this.position[2];
        
        this.translate(dx, dy, dz);
    }
    // translate block
    this.translate = function(dx, dy, dz)
    {
        // update location
        this.position[0] += dx; this.position[1] += dy; this.position[2] += dz;   
        for(var i = 0; i < this.front.positions.length; i = i + 3)
        {
            this.front.positions[i]+=dx;
            this.front.positions[i+1]+=dy;
            this.front.positions[i+2]+=dz;
            
            this.back.positions[i]+=dx;
            this.back.positions[i+1]+=dy;
            this.back.positions[i+2]+=dz;
            
            this.left.positions[i]+=dx;
            this.left.positions[i+1]+=dy;
            this.left.positions[i+2]+=dz;
            
            this.right.positions[i]+=dx;
            this.right.positions[i+1]+=dy;
            this.right.positions[i+2]+=dz;
            
            this.top.positions[i]+=dx;
            this.top.positions[i+1]+=dy;
            this.top.positions[i+2]+=dz;
            
            this.bottom.positions[i]+=dx;
            this.bottom.positions[i+1]+=dy;
            this.bottom.positions[i+2]+=dz;
        }
    }
    
}
/* generate chunk */
function generateChunk()
{
    return new Chuck(new chunkFrontFace(),
                     new chunkBackFace(),
                     new chunkLeftFace(),
                     new chunkRightFace(),
                     new chunkTopFace(),
                     new chunkBottomFace());
}
/*
    generate chunks mesh according to chunks array
*/
function generateChunksMesh (chunks_array, scene)
{
    
    // test
    /*
        test each face
        
        front: pass
        back: pass
        left: pass
        right: pass
        top: pass
        bottom: pass
        
   
    var positions = [];
    var indices = [];
    var normals = [];
    var uvs = [];
    var chunk = chunks_array[0];
    positions.push.apply(positions, chunk.bottom.positions);
    indices.push.apply(indices, chunk.bottom.indices);
    normals.push.apply(normals, chunk.bottom.normals);
    uvs.push.apply(uvs, chunk.bottom.uvs);
    
    var test_mesh = new BABYLON.Mesh("front_back_left_right", scene);
    test_mesh.setVerticesData(positions, BABYLON.VertexBuffer.PositionKind, true);
    test_mesh.setVerticesData(normals, BABYLON.VertexBuffer.NormalKind, true);
    test_mesh.setVerticesData(uvs, BABYLON.VertexBuffer.UVKind, true);
    test_mesh.setIndices(indices);
    
    test_mesh.material = new BABYLON.StandardMaterial("mesh0_material", scene);
    test_mesh.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    return test_mesh;
     */
    
    // save front back left bottom
    var positions0 = [];
    var indices0 = [];
    var normals0 = [];
    var uvs0 = [];
    
    // save top bottom
    var positions1 = [];
    var indices1 = [];
    var normals1 = [];
    var uvs1 = [];
    
    /* save positions normals uvs indices */
    for(var i = 0; i < chunks_array.length; i++)
    {
        var chunk = chunks_array[i];
        
        /*console.log("FRONT3: ");
        console.log(chunk.front.positions);
        console.log("BACK3: ");
        console.log(chunk.back.positions);
        console.log("LEFT3: ");
        console.log(chunk.left.positions);
        console.log("RIGHT3: ");
        console.log(chunk.right.positions);
        */
        // front 
        positions0.push.apply(positions0, chunk.front.positions);
        normals0.push.apply(normals0, chunk.front.normals);
        uvs0.push.apply(uvs0, chunk.front.uvs);
                
         // back 
        positions0.push.apply(positions0, chunk.back.positions);
        normals0.push.apply(normals0, chunk.back.normals);
        uvs0.push.apply(uvs0, chunk.back.uvs);

         // left 
        positions0.push.apply(positions0, chunk.left.positions);
        normals0.push.apply(normals0, chunk.left.normals);
        uvs0.push.apply(uvs0, chunk.left.uvs);
        
        // right 
        positions0.push.apply(positions0, chunk.right.positions);
        normals0.push.apply(normals0, chunk.right.normals);
        uvs0.push.apply(uvs0, chunk.right.uvs);

         // top 
        positions1.push.apply(positions1, chunk.top.positions);
        normals1.push.apply(normals1, chunk.top.normals);
        uvs1.push.apply(uvs1, chunk.top.uvs);
        
         // bottom 
        positions1.push.apply(positions1, chunk.bottom.positions);
        normals1.push.apply(normals1, chunk.bottom.normals);
        uvs1.push.apply(uvs1, chunk.bottom.uvs);
    }
    
    // how to deal with indices is a problem
    // indices.push(0, 2, 3);
    // indices.push(0, 1, 2);
    var num_of_vertices0 = positions0.length/3;
    var num_of_faces0 = num_of_vertices0/2;
    for(var i = 0; i < num_of_faces0/2; i++)
    {
        indices0.push(0+i*4, 2+i*4, 3+i*4);
        indices0.push(0+i*4, 1+i*4, 2+i*4);
    }
    
    var num_of_vertices1 = positions1.length/3;
    var num_of_faces1 = num_of_vertices1/2;
    for(var i = 0; i < num_of_faces1/2; i++)
    {
        indices1.push(0+i*4, 2+i*4, 3+i*4);
        indices1.push(0+i*4, 1+i*4, 2+i*4);
    }
    
    
    console.log(positions0);
    console.log(positions1);
    
    console.log(indices0);

    
    // create two meshes
    var mesh0 = new BABYLON.Mesh("front_back_left_right", scene);
    var mesh1 = new BABYLON.Mesh("top_bottom", scene);
    
    // set mesh data
    mesh0.setVerticesData(positions0, BABYLON.VertexBuffer.PositionKind, true);
    mesh0.setVerticesData(normals0, BABYLON.VertexBuffer.NormalKind, true);
    mesh0.setVerticesData(uvs0, BABYLON.VertexBuffer.UVKind, true);
    mesh0.setIndices(indices0);
    
    mesh1.setVerticesData(positions1, BABYLON.VertexBuffer.PositionKind, true);
    mesh1.setVerticesData(normals1, BABYLON.VertexBuffer.NormalKind, true);
    mesh1.setVerticesData(uvs1, BABYLON.VertexBuffer.UVKind, true);
    mesh1.setIndices(indices1);

    mesh0.material = new BABYLON.StandardMaterial("mesh0_material", scene);
    mesh0.material.diffuseColor = new BABYLON.Color3(159/255,206/255,110/255);
    mesh1.material = new BABYLON.StandardMaterial("mesh0_material", scene);
    mesh1.material.diffuseColor = new BABYLON.Color3(159/255,206/255,110/255);
    /*
    //
    //    set material
    //
    mesh0.material = new BABYLON.StandardMaterial("mesh0_material", scene);
    mesh0.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mesh0.material.diffuseTexture = new BABYLON.Texture("./textures/grass_dirt2.png", scene);
    
    mesh1.material = new BABYLON.StandardMaterial("mesh1_material", scene);
    mesh1.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
    mesh1.material.diffuseTexture = new BABYLON.Texture("./textures/grass2.png", scene);
    */
}




/*
    save chunks add activate checkCollision when necessary
*/
function Terrain()
{
    this.terrain = {};
    this.current_collision_activation_chunks_id = 0;
    this.width = 0
    this.height = 0;
    this.single_width = 16;
    this.single_height = 16;
    this.chunk_size = 2;
    /*
        add chunks object
    */
    this.addChunks = function(chunks)
    {
        this.terrain[chunks.x+"_"+chunks.y] = chunks;
        this.width += chunks.width;
        this.height += chunks.height;
        this.chunk_size = chunks.chunk_size;
    }
    /*
        activate chunks check collision
        otherwise stop it.
    */
    this.activateCheckCollision = function(player_x, player_y)
    {
        var coord_x = player_x/(16*this.chunk_size);
        var coord_y = player_y/(16*this.chunk_size);
    }
}

