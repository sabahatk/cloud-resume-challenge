import json
import boto3



def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('webpage-visitor-counter')
    response = table.update_item(
      Key={'counter-id': '1'},
      UpdateExpression='SET counterVal = :s',
      ExpressionAttributeValues={':s': 1},
      ReturnValues="UPDATED_NEW"
    )
    print(response['Attributes'])
    #return {
       # 'statusCode': 200,
     #   'body': json.dumps('Hello from Lambda!')
   # }
