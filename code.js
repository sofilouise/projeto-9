var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","999288a3-aaae-4392-afd1-7e1dade80171","35a1d5c9-cf4b-463b-9e94-6323bb78254a","2a95f9b7-581f-4684-a80d-04e90308447b","5b9ff380-b6e9-433e-ae4e-14dd5f0ef8eb","2d3935d6-bf02-4241-965c-e01b452a18ac","7bf4fb14-f372-4758-8469-55f9ae1e4e73","09ea25c7-9fbc-40af-ba46-ee577069128a"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"c49RYWo4OVJFVNU4MEv8MsMRHiLcIvPl","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"G6S6i829Y8_9MMO5t5JBMIOrvgNs12JI","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"anT1g1sFstENPPftgtHsH2WLrVYOatva","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"999288a3-aaae-4392-afd1-7e1dade80171":{"name":"cenario","sourceUrl":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GTrVmut4s5PswM6hx254yCcDWLNhhmVk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GTrVmut4s5PswM6hx254yCcDWLNhhmVk/category_backgrounds/bg_landscape21.png"},"35a1d5c9-cf4b-463b-9e94-6323bb78254a":{"name":"lua","sourceUrl":null,"frameSize":{"x":292,"y":292},"frameCount":1,"looping":true,"frameDelay":12,"version":"wGVXTIx41ODpyPHt6sOKQdgbAcgNcTSI","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":292},"rootRelativePath":"assets/35a1d5c9-cf4b-463b-9e94-6323bb78254a.png"},"2a95f9b7-581f-4684-a80d-04e90308447b":{"name":"estrela","sourceUrl":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png","frameSize":{"x":110,"y":110},"frameCount":1,"looping":true,"frameDelay":2,"version":"JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":110},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JbYn0HO0tJRoTTbDFErgACLs1FIC8tmJ/category_stickers/sticker_20.png"},"5b9ff380-b6e9-433e-ae4e-14dd5f0ef8eb":{"name":"terra","sourceUrl":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"nGOenE1WijfC4DHy9IQB7Isq7IVsds8K","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nGOenE1WijfC4DHy9IQB7Isq7IVsds8K/category_icons/earth.png"},"2d3935d6-bf02-4241-965c-e01b452a18ac":{"name":"satelite","sourceUrl":"assets/api/v1/animation-library/gamelab/TUsgqlOdlvrY.PncX2olHo8wvHS9wKys/category_stickers/sticker_29.png","frameSize":{"x":278,"y":284},"frameCount":1,"looping":true,"frameDelay":2,"version":"TUsgqlOdlvrY.PncX2olHo8wvHS9wKys","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":284},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TUsgqlOdlvrY.PncX2olHo8wvHS9wKys/category_stickers/sticker_29.png"},"7bf4fb14-f372-4758-8469-55f9ae1e4e73":{"name":"space","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"zWrRBT.NSwLhBfBAaux8qyN0Jo82DGAn","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/7bf4fb14-f372-4758-8469-55f9ae1e4e73.png"},"09ea25c7-9fbc-40af-ba46-ee577069128a":{"name":"ofrfojerfjeroo","sourceUrl":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png","frameSize":{"x":167,"y":143},"frameCount":1,"looping":true,"frameDelay":2,"version":"NolfDXD9f49COunFY6Ops3IuWeUdWXbo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":167,"y":143},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NolfDXD9f49COunFY6Ops3IuWeUdWXbo/category_retro/retro_red_heart.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cenario = createSprite(200,200);
 cenario.setAnimation("cenario");
var estrela = createSprite(200,345,200,345);
 
var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,15,210,25);
net.shapeColor="purple";

var goal =0;
var death = 0;

estrela.setAnimation("satelite");
estrela.scale=0.2;
enemy1.setAnimation("estrela");
enemy1.scale=0.3;
enemy2.setAnimation("estrela");
enemy2.scale=0.3;
enemy3.setAnimation("estrela");
enemy3.scale=0.3;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {

createEdgeSprites();


enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
estrela.collide(edges);

if(keyDown(UP_ARROW)){
  estrela.y=estrela.y-3;
}

if(keyDown(DOWN_ARROW)){
  estrela.y=estrela.y+3;
}

if(keyDown(LEFT_ARROW)){
  estrela.x=estrela.x-3;
}

if(keyDown(RIGHT_ARROW)){
  estrela.x=estrela.x+3;
}

if(estrela.isTouching(enemy1)|| estrela.isTouching(enemy2)|| estrela.isTouching(enemy3)){
  playSound("https://audio.code.org/losepoint2.mp3");
  estrela.x=200;
  estrela.y=350;
  death = death+1;
}
if(estrela.isTouching(net)){
  playSound("assets/category_points/vibrant_game_collect_jewel_2_mid.mp3");
  estrela.x=200;
  estrela.y=345;
  goal=goal+1;
}

 
drawSprites();

textSize(20);
textFont("Courier new");
fill("white");
text("Objetivos:"+goal,255,350);
  
textFont("Courier new");
textSize(20);
fill("white");
text("mortes:"+death,10,350);

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
