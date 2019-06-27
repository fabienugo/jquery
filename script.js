/* global document $ */

$(document).ready(function(){
    
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openIndex = 2,
    
    init = function(){
        bindEvent();
        if(validIndex(openIndex)){
            animateItem($mainMenuItems.eq(openIndex), true, 700);
        }
        },
        
        
        bindEvent = function(){
          $mainMenuItems.children(".image").click(function(){
             var newIndex = $(this).parent().index();
             checkAndAnimateItem(newIndex);
                          
         });  
            
            $(".button").hover(
            function(){
                $(this).addClass(".hovered");
            },
            function(){
               $(this).removeClass(".hovered");
            }); 
            
            $(".button").click(function(){
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });
        },
    
        validIndex = function(indexToCheck){
            return(indexToCheck >=0) &&(indexToCheck < totalMainMenuItems)
        },
        
        
       animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color"),
            itemParam = toOpen ? {width:"420px"}:{width:"140px"},
            colorImageParam = toOpen ? {left:"0px"}:{left:"140px"};         
            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam, speed); 

       },
        
        checkAndAnimateItem = function(indexToCheckAndAnimate){
            if(openIndex === indexToCheckAndAnimate){
                 animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                 openIndex = -1;
             }
             else{
               if(validIndex(indexToCheckAndAnimate)){
                  animateItem($mainMenuItems.eq(openIndex), false, 250);
                  openIndex = indexToCheckAndAnimate;                
                  animateItem($mainMenuItems.eq(openIndex), true, 250);
                  }
             }
        };   
           
           
    init();   
            
});
