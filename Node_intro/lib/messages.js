const sanitizeHTML = require('sanitize-html');

module.exports = function(url,callback){
  const mongoose = require('mongoose');
  mongoose.connect(url,callback);

  const Message = mongoose.model(
    'messages',
    {username:String,text:String}
  );
    
  

  return {
    create:function(newMessage,callback){
     var message = new Message(newMessage);
     message.save(callback);
      
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
