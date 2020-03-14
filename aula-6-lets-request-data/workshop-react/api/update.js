'use strict';

const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1"
  });

// It is recommended that we instantiate AWS clients outside the scope of the handler 
// to take advantage of connection re-use.
const docClient = new AWS.DynamoDB.DocumentClient();

exports.update = (event, context, callback) => {
    var body_output = JSON.parse(event.body)
    const params = {
        TableName: "jsday_feira",
        Key: {
            "id": body_output["id"]
        },
        UpdateExpression: "SET phone = :p, username = :u, company = :c, description = :d, email = :e, linkedin = :l, photo = :ph, university = :u, job = :j",
        ExpressionAttributeValues:{
            ":addr": body_output["address"],
            ":p": body_output["phone"],
            ":u": body_output["username"],
            ":c": body_output["company"],
            ":d": body_output["description"],
            ":e": body_output["email"],
            ":l": body_output["linkedin"],
            ":ph": body_output["photo"],
            ":u": body_output["university"],
            ":j": body_output["job"]
        },
        ReturnValues:"UPDATED_NEW"
    };

    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            var ok_response = {
                "statusCode": 200,
                "body": JSON.stringify(data),
                "isBase64Encoded": false,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
            };

            callback(null, ok_response)
        }
    });
};
