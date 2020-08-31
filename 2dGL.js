window.onload=function(){
   
//    load=document.createElement('div');
//    document.body.appendChild(load);
//    load.setAttribute('id','load');
//    load.innerText="THIS PAGE IS LOADING";
  
//    load.style.width=parseInt(window.innerWidth)+'px';
//    load.style.height=parseInt(window.innerHeight)+'px';
   
   
  
}
window.addEventListener('load',()=>{
   
    class Position{
        constructor(id,type,top,bottom,left,right){
            
            this.type=id.style.position=type == 0 ? "absolute" : "relative";
            this.top=id.style.top=top;
            console.log(this.bottom=id.style.bottom=bottom)
            this.bottom=id.style.bottom=bottom;
            this.left=id.style.left=left;
            this.right=id.style.right=right;
            
           
            
        }
    }
    class Frame{
        constructor(){
            this.update=function (){
                //layer one
                

                //Layer Two
                console.log('ola')
                //debug
            }
        }
    }
    class Viewport{

    }
    class Scene{
        constructor(master){
            
        }
    }
    class MasterScene{
        constructor(){
            this.scenes=[]
        }
    }
    
    class Screen{
        constructor(id,position,resolution,context){
            //escorpo do codigo screen 
            
                this.id=id==undefined?document.getElementsByTagName('canvas')[0]:id;
                this.context=this.id.getContext(context);
                this.resolution=resolution;
                //frame 
                this.update=new Frame();
        }
    }           
        
    MainScreen=new Screen(document.getElementsByTagName('canvas')[0],0,100,'2d');
    MasterScene=new MasterScene;
    Scene=new Scene();
    setTimout(MainScreen.update,1000)
    console.log(MainScreen.position)
})


