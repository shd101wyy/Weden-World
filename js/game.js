var game_display = new ROT.Display(/* {width:100, height: 100} */);
document.getElementById("game_display").appendChild(game_display.getContainer());
game_display.setOptions({fontSize: 30, 
                    width: 60,
                    height: 25,
                    bg: "#2a2020"})

/* console */
var game_console = new ROT.Display();
document.getElementById("game_console").appendChild(game_console.getContainer());
game_console.setOptions({ fontSize: 20,
                          width: 16,
                          height: 18,
                          bg: "#454545",
                          spacing: 2 
})

document.getElementById("game_console").addEventListener("click", function()
                              {
                                  game_console.clear();
                                  
                                  // finish current stage
                                  if(STORY_COUNT === STORIES[STORY_STAGE].length)
                                  {
                                      game_console.drawText(1, 1, "%c{red}Finish Current Stage:  " + STORY_STAGE + " %c{} ", 13, "red");
                                      return;
                                  }
                                  // alert("Clicked Me");
                                  var s = STORIES[STORY_STAGE][STORY_COUNT];
                                  if (typeof(s) === "string")
                                  {
                                    game_console.drawText(1, 1, s, 13);
                                  }
                                  else
                                  {
                                      var a_ = s[1](); // call function
                                      var s_ = s[0];
                                      if(a_ !== undefined)
                                          s_ += a_
                                      game_console.drawText(1, 1, s_, 13);
                                  }
                                  STORY_COUNT++;
                              })

var map_ = [ 
    " wwwwwwwwwwwwwwwwwwwwWWWWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwwWWssssssWWWwwwwwwwwwwwwwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwWWss.....ssWWWwwwwwwwwwwwWWwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwWWss........ssWWWwwwwwwwwwWWwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwWssss...........ssWWWWWWwwwwWwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwWWss................sssssWWWWWwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwWss....gg...............sssssWWWwwwwwwwwwwwwwww ",
    " wwwwwwwwWWsss.......g..................ssssWWWWwwwwwwwwwww ",
    " wwwwwwwWWsssss............................ssWWWwwwwwwwwwww ",
    " wwwwwwwWWWssss......g...........g...g......sWWWwwwwwwwwwww ",
    " wwwwwwwwWWWssss....gg...........ggTTg......sWWWwwwwwwwwwww ",
    " wwwwwwwwWWWWWWWss................gTTTg...sWWWwwwwwwwwwwwww ",
    " wwwwwwwwwwwWWWWWs......#g........gg.TT...sWWwwwwwwwwwwwwww ",
    " wwwwwWWwwwwWWWsss.....###......g..ggg...sWWwwwwwwwwwwwwwww ",
    " wwwwwWwwwwWWsss........##..........g...sWWwwwwwwwwwwwwwwww ",
    " wwwwwwwwwWWs..........................ssWwwwwwwwwwwwwwwwww ",
    " wwwwwwwwWWss..........................ssWwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwWWssssss....................sWWWwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwWWWWWWsssssssss......sss..sWWWwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwWWWWWWWWWssssssssssssWWWWwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwwwwwwwwWWWWWWWssssWWwwwwwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwwwwwwwwwwwwwwWWWWWWWwwwwwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww ",
    " wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww "
]

var map_cell = 
    {
        " " : " ",
        "w": "≈", // 深水
        "W": "≈", // 浅水
        "s": "s",
        ".": ".",
        "T": "T",   // tree
        "g": ['"'],    // grass
        "#": "#"  // stone
    }
var map_foreground_color = 
    {
        "w": "#3799b1", // 深水
        "W": "#6bcbe2",// 浅水
        "s": "#b1ba46", // shore
        ".": "#a3b118", // sand
        "T": "#52bc62",  // tree
        "g": '#a7e2b0',  // grass
        "#": "#867e23"   // stone
    }
var map_background_color = 
    {
        "w": "#2d7a8d", // sea
        "W": "#328aa0",// 浅水
        "s": "#dfea6c", // shore
        ".": "#f2f7c3", // sand
        "T": "#f2f7c3",  // tree
        "g": "#f2f7c3",
        "#": "#f2f7c3"
    }


    /*
var map = new ROT.Map.Arena(6, 5);
var callBack = function(x, y, value)
{
    game_display.draw(x, y, value?"#":".");
}
map.create(callBack);
console.log(map);

for(var y = 0; y < map_.length; y++)
{
    for(var x = 0; x < map_[y].length; x++)
    {
        game_display.draw(x, y, map_cell[map_[y][x]], map_foreground_color[map_[y][x]], map_background_color[map_[y][x]]);
    }
}
*/
var current_stage = STORIES_STAGES[STORY_STAGE][0];
var current_stage_name = STORIES_STAGES[STORY_STAGE][1];
var current_stage_cell = STORIES_STAGES[STORY_STAGE][2];
var current_stage_foreground_color = STORIES_STAGES[STORY_STAGE][3];
var current_stage_background_color = STORIES_STAGES[STORY_STAGE][4];

for(var y = 0; y < current_stage.length; y++)
{
    for(var x = 0; x < current_stage[y].length; x++)
    {
        var cell = current_stage_cell[current_stage[y][x]] === undefined? current_stage[y][x] : current_stage_cell[current_stage[y][x]];
        game_display.draw(x, y, cell, current_stage_foreground_color[current_stage[y][x]], current_stage_background_color[current_stage[y][x]]);
    }
}
//game_display.draw(20, 10, "@", "white");

// game_console.drawText(1, 1, "2030年， 我乘坐着飞机飞往B国。", 13)
game_console.drawText(1, 1, STORIES[STORY_STAGE][STORY_COUNT], 13);
STORY_COUNT++;