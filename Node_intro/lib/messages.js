const sanitizeHTML = require('sanitize-html');

module.exports = function(url,callback){
  const mongoose = require('mongoose');
  mongoose.connect(url,callback);
    
 const messagesSchema = new mongoose.Schema(
 {
    
     username:{
         type:String,
         required:true
         
         
     },
     text:{
         type:String,
         required:true
         
     }
   }, {strict:'throw'});
    
  const Message = mongoose.model(
    'messages',
    messagesSchema
  );
    


    

  
  return {
    create:function(newMessage,callback){
     try{
     var message = new Message(newMessage);
     message.save(callback);
     } catch (err){
         console.log(err);
         callback();
     }
      
    },
    read:function(id,callback){
     Message.findById(id,callback);
      
    },
    readUsername:function(username,callback){
      Message.find({username:username},callback);
    },
    readAll:function(callback){
      Message.find(callback);
    },
    update:function(id,updatedMessage,callback){
      var msg = Message.findById(id);
      msg = new Message(updatedMessage);
        msg.save(callback);
    },
    delete:function(id,callback){
      Message.remove({_id:id},callback);
    },
    deleteAll:function(callback){
      Message.remove({},callback);
    },
    disconnect:function(){
      mongoose.disconnect();
    }
  };
};
