/*
Plugin Name:    Master Slider
Version:        version 1.6.0
Written by:     averta.net
*/


var MSSC1 = new MasterSlider();
MSSC1.setup('MS1' , {
    loop:true,
    width:212,
    height:212,
    speed:20,
    view:'focus',
    preload:'all',
    space:0,
    wheel:true
});
MSSC1.control('arrows');
MSSC1.control('slideinfo',{insertTo:'#MS1Info'});


var MSSC2 = new MasterSlider();
MSSC2.setup('MS2' , {
    loop:true,
    width:188,
    height:188,
    speed:20,
    view:'fadeBasic',
    preload:0,
    space:0,
    wheel:true
});
MSSC2.control('arrows');
MSSC2.control('slideinfo',{insertTo:'#MS2Info'});


var MSSC3 = new MasterSlider();
MSSC3.setup('MS3' , {
    loop:true,
    width:240,
    height:240,
    speed:20,
    view:'focus',
    preload:0,
    space:35,
    viewOptions:{centerSpace:1.6}
});
MSSC3.control('arrows');
MSSC3.control('slideinfo',{insertTo:'#MS3Info'});


var MSSC4 = new MasterSlider();
MSSC4.setup('MS4' , {
    loop:true,
    width:240,
    height:240,
    speed:20,
    view:'fadeBasic',
    preload:0,
    wheel:true,
    space:60
});
MSSC4.control('arrows');
MSSC4.control('slideinfo',{insertTo:'#MS4Info'});


var MSSC5 = new MasterSlider();
MSSC5.setup('MS5' , {
    loop:true,
    width:245,
    height:245,
    speed:20,
    view:'wave',
    preload:0,
    space:0,
    wheel:true
});
MSSC5.control('arrows');
MSSC5.control('slideinfo',{insertTo:'#MS5Info', align:'center',});


var MSSC6 = new MasterSlider();
MSSC6.setup('MS6' , {
    loop:true,
    width:240,
    height:240,
    speed:20,
    view:'flow',
    preload:0,
    space:0,
    wheel:true
});
MSSC6.control('arrows');
MSSC6.control('slideinfo',{insertTo:'#MS6Info'});


var LSlider = new MasterSlider();
LSlider.setup('LayerSlider' , {
    width:1400,
    height:580,
    fullwidth:true,
    speed:18,
    autoplay:true,
    loop:true,
    view:'flow'
});


var SPart1 = new MasterSlider();
SPart1.setup('SP1' , {
    width:760,
    height:400,
    space:10,
    loop:true,
    autoplay:true,
    view:'partialWave',
    layout:'partialview'
});

SPart1.control('arrows');   
SPart1.control('slideinfo',{insertTo:"#SPView1" , autohide:false});
SPart1.control('circletimer' , {color:"#FFFFFF" , stroke:9});


var SPart2 = new MasterSlider();
SPart2.setup('SP2' , {
    width:760,
    height:400,
    space:10,
    loop:true,
    autoplay:true,
    view:'fadeWave',
    layout:'partialview'
});
SPart2.control('arrows');   
SPart2.control('slideinfo',{insertTo:"#SPView2" , autohide:false});
SPart2.control('circletimer' , {color:"#FFFFFF" , stroke:9});


var SPart3 = new MasterSlider();
SPart3.setup('SP3' , {
    width:760,
    height:400,
    space:10,
    autoplay:true,
    loop:true,
    view:'fadeFlow',
    layout:'partialview'
});
SPart3.control('arrows');   
SPart3.control('slideinfo',{insertTo:"#SPView3" , autohide:false});
SPart3.control('circletimer' , {color:"#FFFFFF" , stroke:9});


var MSVB = new MasterSlider();

MSVB.control('arrows' ,{insertTo:'#MSVideoBg'});  
MSVB.control('bullets'); 

MSVB.setup('MSVideoBg' , {
    width:1024,
    height:768,
    space:5,
    view:'basic',
    layout:'fullscreen',
    fullscreenMargin:57,
    speed:20
});


var VideoSlider = new MasterSlider();
VideoSlider.setup('VideoSlider', {
    width : 1336,
    height : 478,
    space : 5,
    shuffle : true,
    fullwidth:true,
    layout:'fullwidth',
    autoplay:true,
    loop:true,
    view : 'basic'
});
VideoSlider.control('arrows');
VideoSlider.control('thumblist', {autohide : false,  dir : 'h'});


var SGallery = new MasterSlider();
SGallery.setup('MSGalleryS' , {
    width:940,
    height:470,
    autoHeight:true,
    fullwidth:true,
    space:10,
    preload:3,
    autoplay:true,
    loop:true,
    view:'scale'
});
SGallery.control('arrows');
if( $('#MSGalleryS').length > 0 ) {
    var Gallery = new MSGallery('MSGallery' , SGallery);
    Gallery.setup();
}