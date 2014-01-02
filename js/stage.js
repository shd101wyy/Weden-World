/*
    舞台1.
    飞机
*/
/*
var stage0_ = 
    [
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            ",
        "                                                            "
    ];
    */

/*
    stage0 开头自白
*/
var stage0_ = 
     [
        "                                                            ",
        "                                                            ",
        "                 #####                                      ",
        "              ###     ###                                   ",
        "            ##          ##                                  ",
        "          ##              ##                                ",
        "         ##                ##                               ",
        "          #                ##                               ",
        "           #              ##                                ",
        "                         ##                                 ",
        "                        ##                                  ",
        "                       ##                                   ",
        "                      ##                                    ",
        "                     ##                                     ",
        "                     ##                                     ",
        "                     ##         一 次 的 游 戏              ",
        "                     ##         once game                   ",
        "                     ##                                     ",
        "                     ##                                     ",
        "                     ##                                     ",
        "                                                            ",
        "                      @                                     ",
        "                                                            ",
        "                                                            "
    ];

var stage0_name = 
    {
        " ":" ",
        "#":"问号",
        "@":"at"
    };

var stage0_cell = 
    {
        " ":" ",
        "#":"#",
        "@":"@"
    };

var stage0_forground_color = 
    {
        "#":"white",
        " ":"black",
        "@":"red"
    };
var stage0_background_color = 
    {
        "#":undefined,
        " ":undefined,
        "@":undefined
    };

STORIES_STAGES.push(
    [stage0_, stage0_name, stage0_cell, stage0_forground_color, stage0_background_color]
);


/*
    舞台1.
    飞机
*/
var stage1_ = 
    [
        "                            cccccc             WWWWWWWWWW",
        "           cccccc          ccccccccc           WWWWWWWWWWWW",
        "         cccccccccc          ccc               WWWWWWWWWWWWW",
        "                                               WWWWWWWWWWWWW",
        "                                               WWWWWWWWWWWWW",
        "wwwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwwgggw",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "............................................................",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "..ss......ss......ss......ss......ss......ss......ss........",
        "..sssss...sssss...sssss...sssss...sssss...sssss...sssss.....",
        "wwwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwgggwwwwwwgggw",
        "                                               WWWWWWWWWWWWW",
        "                                               WWWWWWWWWWWWW"
    ];

var stage1_name = 
    {
        " ":" ",
        "w":"飞机机舱",
        "s":"座椅",
        "c":"云",
        ".":"过道",
        "W":"机翼",
        "g":"玻璃"
    }
var stage1_cell = 
    {
        " ": " ",
        "w":"#",
        "s":"o",
        "c":"&",
        ".":".",
        "W":"*",
        "g":"~"
    }

/*
    舞台3.
    小岛
*/
var stage3_ = [ 
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

var stage3_name = 
    {
        " " : " ",
        "w" : "深水",
        "W" : "浅水",
        "s" : "海滩",
        "." : "沙子",
        "T" : "树",
        "g" : "草",
        "#" : "岩石"
    }
var stage3_cell = 
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
var stage3_foreground_color = 
    {
        "w": "#3799b1", // 深水
        "W": "#6bcbe2",// 浅水
        "s": "#b1ba46", // shore
        ".": "#a3b118", // sand
        "T": "#52bc62",  // tree
        "g": '#a7e2b0',  // grass
        "#": "#867e23"   // stone
    }
var stage3_background_color = 
    {
        "w": "#2d7a8d", // sea
        "W": "#328aa0",// 浅水
        "s": "#dfea6c", // shore
        ".": "#f2f7c3", // sand
        "T": "#f2f7c3",  // tree
        "g": "#f2f7c3",
        "#": "#f2f7c3"
    }





