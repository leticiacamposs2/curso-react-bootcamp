var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "jsday_feira";

exports.list = function(event, context, callback){
	var params = {
        TableName: table,
    };

    docClient.scan(params, function(err, data) {
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
}
