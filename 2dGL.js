window.onload=function(){
   
   load=document.createElement('div');
   document.body.appendChild(load);
   load.setAttribute('id','load');
   load.innerText="Esta pagina está carregandp";
  
   load.style.width=parseInt(window.innerWidth)+'px';
   load.style.height=parseInt(window.innerHeight)+'px';
   
   
  
}
window.addEventListener('load',()=>{
    class Scene{
        constructor(){

        }
        load(){
            
        }
    }
  class Position{
      constructor(object,type,t,b,l,r){
        if(type==0){
             this.position=object.style.position = 'absolute';
        }else{
            this.position=object.style.position = 'relative';
        }
       //if(tb,l,r)
        this.id.style.left=l;
        this.id.style.top=t;
        this.id.style.left=l;
        this.id.style.right=r;
        this.id.style.bottom=b;
      }
  }
    class Screen{
        constructor(id,position,resolution,context){
            if(position&&resolution&&context!==undefined){
                this.id=id;
                this.position=new Position(this);
                this.context=this.id.getContext(context);
                this.resolution=resolution; 
            }else{
                if(context==undefined){
                    
                }
            }
            
            
        }}
    
    MainScreen=new Screen(document.getElementsByTagName('canvas')[0],0,100);
    
    
    console.dir(screen);
    
    
});

