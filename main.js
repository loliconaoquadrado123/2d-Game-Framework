window.addEventListener('load',function(){
    x=0;
    y=0;
    custom=screen2d.drawImage(playerr,player.x,player.y);
    screen2d.drawImage(groundd,ground.x,ground.y);';
function custom(){
    psychic();
    
}
    screenH = window.innerHeight;
    screen = document.getElementById('screen');
    screen2d = screen.getContext('2d');
    
    


    window.addEventListener('keydown',function(event){
        
        
        switch(event.key){
            
            case 'ArrowUp':
                
                key = 'up';
                
                
                

                player.y-=1;
                
                
                break;
            case 'ArrowDown':
                key = 'down';
                
                
                
                player.y+=1;
        
                break;
            case 'ArrowLeft':
                key = 'left';
                
                
                
                player.x-=1;
                break;
            case 'ArrowRight':
                key = 'right';
                
                
                
                player.x+=1;
                break;
                        
        }
        console.log(keysPressed)
})
window.addEventListener('keyup',function(event){
        
        keysPressed=[];
        
        
        
        
})
setInterval(frame,10);

})
