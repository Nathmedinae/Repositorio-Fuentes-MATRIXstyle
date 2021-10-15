exports = function(payload, response) {
  
    const id = payload.query.id || '';
  
    console.log ("Id received = " + id);
    
    var collection = context.services.get("mongodb-atlas").db("matrixDB").collection("matrixApp");
    return collection.findOne({_id:BSON.ObjectId(id)});
  };

  //https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/matrixapp-yjwwm/service/matrix/incoming_webhook/edit?id=