window.onload=function(){
   
//    load=document.createElement('div');
//    document.body.appendChild(load);
//    load.setAttribute('id','load');
//    load.innerText="THIS PAGE IS LOADING";
  
//    load.style.width=parseInt(window.innerWidth)+'px';
//    load.style.height=parseInt(window.innerHeight)+'px';
   
   
  
}
window.addEventListener('load',()=>{
   
    // class Position{
    //     constructor(id,type,top,bottom,left,right){
            
    //         this.type=id.style.position=type == 0 ? "absolute" : "relative";
    //         this.top=id.style.top=top;
    //         console.log(this.bottom=id.style.bottom=bottom)
    //         this.bottom=id.style.bottom=bottom;
    //         this.left=id.style.left=left;
    //         this.right=id.style.right=right;
            
           
            
    //     }
    // }
    
    class Viewport{
        constructor(position,width,height){
            this.position=position;
            this.width=width;
            this.height=height;
        }
        
    }
    class SceneObjects{
        constructor(type,width,height,layer){
            this.width=width==undefined?0:width;
            this.height=height==undefined?0:height;
            this.type=type==undefined?0:type;
            this.layer=layer;
            
        }
        
    }
    class Scene{
        constructor(width,height,){
            this.width=width;
            this.height=height;
            this.viewport;
            this.objects=[];
        }
    }
    class LoadScene{
        constructor(){
            
        }
    }
    
    class Screen{
        constructor(id,context){
            //escorpo do codigo screen 
            
                this.id=id==undefined?document.getElementsByTagName('canvas')[0]:id;
                this.context=this.id.getContext(context);
                this.width=id.width;
                this.height=id.height;
                this.scenes=[];
                this.viewport=new Viewport();
                this.ToRender=0;
                //frame 
                
                
                
        }
    }           
    function update(){
        console.log(Screens.length)
        for(i=0;i==Screens.length;i++){
            //Rederizar
            Screen=Screens[i];
            Scene=Screen.scenes[Screen.ToRender];
            
            for(i=0;i==Screen.viewport.objects.lenght;i++){
                alert('ola');
            }
            
            //fim da tela
        }
    }
    // class Update{
    //     constructor(){
    //         this.restartFrame=function(id,time){
    //                 clearTimeout(id);
    //                 newId=0;
    //                 setTimeout(() => {
    //                     newId=setTimeout(update(),time);
    //                 },time);
    //                 return newId;
    //         }
    //         this.update=function()

    //         }
    //     }
    // }
    
    MainScreen=0;
    MainScene=0;
    Screens=[new Screen(document.getElementsByTagName('canvas')[0],'2d')];
    Screens[MainScreen].scenes=new Scene();
    Screens[MainScreen].ToRender=0;
    //Scene Config
    Screens[MainScreen].scenes[MainScene].width=Screens[MainScreen].width;
    Screens[MainScreen].scenes[MainScene].height=Screens[MainScreen].height;
    Screens[MainScreen].scenes[MainScene].viewport.width=Screens[MainScreen].width;
    Screens[MainScreen].scenes[MainScene].viewport.height=Screens[MainScreen].height;
    //Viewport
    Frame=setTimeout(update,1);
    

    
})


