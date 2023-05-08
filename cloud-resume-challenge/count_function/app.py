import boto3
import json

def count_function(event, context):
    client = boto3.resource('dynamodb')
    table = client.Table('cloud_resume_challenge')

    response = table.update_item(
        Key={'ID':'visitor_counter'},
        UpdateExpression="SET visitors = visitors + :v",
        ExpressionAttributeValues={':v': 1},
        ReturnValues="UPDATED_NEW"
    )

    # Format dynamodb response into variable
    responseBody = json.dumps({"count": int(response["Attributes"]["visitors"])})

    # Create api response object
    apiResponse = {
        "statusCode": 200,
        "headers": {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        },
        "body": responseBody
    }

    # Return api response object
    return apiResponse

