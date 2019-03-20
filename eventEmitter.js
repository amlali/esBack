class evento {
   // let event=[]
     constructor(){
       this.event=[];
     }
     addListener(topic,cb){
    //   console.log("addListener");
      // console.log(topic,cb);
       let exist=false;
       for (let i=0;i<this.event.length;i++){
           if(this.event[i].topic==topic){
            exist=true;
            this.event[i].listeners.push(cb);
           }
       }
            if(!exist){
              //  console.log("topic not found");
                this.event.push({topic,listeners:new Array(cb)});
            }
          
     }
     on(topic,cb){
        let exist=false;
        for (let i=0;i<this.event.length;i++){
            if(this.event[i].topic==topic){
             exist=true;
             this.event[i].listeners.push(cb);
            }
        }

             if(!exist){
               //  console.log("topic not found");
                 this.event.push({topic,listeners:new Array(cb)});
             }
           
     }
     emit(topic,data){
        this.event.map(e=>{
            if(e.topic==topic){
              
                e.listeners.map((f)=>f(data))
            }
            
        })
     }

}

console.log("########################");

var profiler=new evento()
profiler.addListener("connection",(e)=>{
console.log(e);

});
profiler.on("connection",(e)=>{
    console.log(e);
});
profiler.on("disconnect",(e)=>{
    console.log(e);
})
profiler.emit("disconnect","amal in disconnection")

profiler.emit("connection","amal in connection");

var profiler2 = new evento();
profiler2.on('new-message', (data)=>{
    console.log("listener 3 " + data.message)
})

profiler2.on('new-message', (data)=>{
    console.log("listener 2 " + data.message)
})


profiler2.on('new-message', (data)=>{
    console.log("listener 1 " + data.message)
})


profiler2.emit('new-message', {message:'hello world'});
