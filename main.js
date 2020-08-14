window.addEventListener('onload',function(){
    
    

})
window.addEventListener('load',function(){
    
   
    
   
    class Screen{
        constructor(id,context){
            this.element=id;
            this.width=Math.round(id.width);
            this.height=Math.round(id.height);
            this.context=id.getContext(context);
            class Update{
                constructor(){
                    function update() {
                    
                            frame.after();
                            screen2d.clearRect(0,0,1366,720);
                            screen2d.beginPath();
                            frame.over();
                            screen2d.closePath();
                            frame.before();
                    }
                    setTimeout(update,900);
                    
                    this.before=function (){
                        console.log('a')
                    }
                    this.over=function(){
                        console.log('a')
                    }
                    this.after=function(){
                        console.log('a')
                    }
                    class MasterScene{
                        constructor(){
                            
                            class Scene{









                                
                                constructor(){
                                    this.width=width;
                                    this.height=height;
                                        class Viewport{
                                                constructor(width,height,position){
                                                    this.position;
                                                    this.width=width;
                                                    this.height=height;
                                                }
                                            }
                                }







                            }
                        }
                    }
                }
            }




        }
    }
    
    
    screen = new Screen(document.getElementById('screen','2d'));
    screen.
    
    })

    