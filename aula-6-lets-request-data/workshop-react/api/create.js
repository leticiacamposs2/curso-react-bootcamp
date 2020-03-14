'use strict';

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();
const uuidV4 = require('uuid/v4');

var table = "jsday_feira";

exports.create = function(event, context, callback){
    var body_output = JSON.parse(event.body)
    console.log(body_output)
	var params = {
        TableName: table,
        Item:{
            "id": uuidV4(),
            "phone": body_output["phone"],
            "username": body_output["username"],
            "company": body_output["company"],
            "description": body_output["description"],
            "email": body_output["email"],
            "linkedin": body_output["linkedin"],
            "photo": body_output["photo"],
            "university": body_output["university"],
            "job": body_output["job"]
        },
    };
	docClient.put(params, function(err, data){
        if (err) {
            console.error("Unable to put item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            var ok_response = {
                "statusCode": 200,
                "body": JSON.stringify(data.Items),
                "isBase64Encoded": false
            };

            callback(null, ok_response)
        }
    });
}
