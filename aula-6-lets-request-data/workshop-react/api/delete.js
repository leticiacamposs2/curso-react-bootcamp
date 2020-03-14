'use strict';

const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1"
  });

// It is recommended that we instantiate AWS clients outside the scope of the handler 
// to take advantage of connection re-use.
const docClient = new AWS.DynamoDB.DocumentClient();

exports.delete = (event, context, callback) => {
    var body_output = JSON.parse(event.body)
    const params = {
        TableName: "jsday_feira",
        Key: {
            "id": body_output["id"]
        },
    };

    docClient.delete(params, function(err, data) {
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
