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
        constructor(id,context){
            //escorpo do codigo screen 
            
                this.id=id==undefined?document.getElementsByTagName('canvas')[0]:id;
                this.context=this.id.getContext(context);
                this.resolution=[id.width,id.height];
                //frame 
                
                
        }
    }           
    function update(ScreensToRender){
        console.log(ScreensToRender.length)
        for(i=0;i==ScreensToRender.length;i++){
            console.log('ola')

        }
       
        
    }


    MasterScene=new MasterScene;
    ScreensToRender=[new Screen(document.getElementsByTagName('canvas')[0],'2d')];

   
    console.log(ScreensToRender)
    setTimeout(update,1,ScreensToRender)

  
})


