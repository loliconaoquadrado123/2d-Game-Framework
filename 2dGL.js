window.onload=function(){
   

}
window.addEventListener('load',()=>{
  class Position{
      constructor(type,t,b,l,r){
        this.position=this.id.style.position = 'absolute';
        this.id.style.left=l;
        this.id.style.top=t;
        this.id.style.left=b;
        this.id.style.right=r;
        
    
      }

  }
    class Screen{
        constructor(id,position,resolution,context){
            this.id=id;
                  this.id.style.left=0;
                  this.id.style.top=0;
                  this.id.style.left=0;
              this.position=this.id.style.position = 'absolute';
              
             this.context=this.id.getContext('2d');
             this.resolution=resolution; 
        }}
    
    screen=new Screen(document.getElementsByTagName('canvas')[0],0,100);
    console.dir(screen);
    console.dir(document.getElementsByTagName('canvas')[0].position);
    position={
        a:x
    };
});

