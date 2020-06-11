import { Injectable } from '@nestjs/common';
import { AddCpUserType } from './Model/mutation.schema';
import { EncryptionAndDecryption } from '../common/EncryptionAndDecryption';

import {CpUserLocation} from './Model/cp.user.location';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();


@Injectable()
export class CpUserService {

  constructor(private encrypt: EncryptionAndDecryption ) {}  

  async createCpUser(CpUser: AddCpUserType):Promise<AddCpUserType> {

    let password:any= this.encrypt.encrypt(CpUser.newPassword);
    let availablity:any = JSON.parse(CpUser.availability);
       const userData = {
          TableName: 'User',
          Item: {
              ID               :  CpUser.mail, 
              Username         :  CpUser.userName,
              Mobile           :  CpUser.mobile,
              CpPassword       :  password,
             
          }
       };
       const connectionData = {
          TableName: 'ChargePoint',
          Item: {
              ID               :  CpUser.mail, 
              ConnectorType    :  CpUser.connectorType,
              CurrentType      :  CpUser.currentType,
              AvailablityFrom  :  availablity.from,
              AvailablityTo    :  availablity.to,
              Price            :  CpUser.price,
              Amenities        :  CpUser.amentities,
              Address          :  CpUser.Location,
              RequestStatus    :  "Available",
              Request          :  "No requests"
          }
       };
    
    
    await dynamodb.put(userData).promise();
    await dynamodb.put(connectionData).promise();  


      
        return CpUser;
    }
    async findCpUser(location:string):Promise<CpUserLocation>{
      const params = {
        TableName : 'ChargePoint',
        FilterExpression: 'contains(#Address, :Address)',
        ExpressionAttributeNames: {
          "#Address": "Address",
      },
        ExpressionAttributeValues: {   
         ':Address' : location
        }   
      }

      return await dynamodb.scan(params).promise();

    }
}
