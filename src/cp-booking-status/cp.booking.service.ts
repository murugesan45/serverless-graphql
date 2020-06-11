import { Injectable } from '@nestjs/common';
import {StatusUpdate } from './Model/status.update';
import {Requests} from './Model/booking.requests';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

@Injectable()
export class CpBookingService {
       constructor() {}

  async statusUpdate(cpStatus : StatusUpdate):Promise<String> {
  
  let ID = cpStatus.ID; 
    let requestStatus = cpStatus.status;
     let param: any =  {
      TableName: 'ChargePoint',
      Key:{
        ID
      },
     UpdateExpression: "set RequestStatus = :RequestStatus",  
     ExpressionAttributeValues:{
      ":RequestStatus" : requestStatus
       }
    };
    await dynamodb.update(param).promise();
    return `Request ${requestStatus}`;
     }

     async request (ID :String) : Promise<Requests>
     {
          const params = {
            TableName : 'ChargePoint',
            Key:{
              ID
            }
          };
      let req = await dynamodb.get(params).promise();
      return req.Request; 
     }
}
