import { Injectable } from '@nestjs/common';
import {AddEvUserType} from './Model/mutation.schema';
import { EncryptionAndDecryption } from '../common/EncryptionAndDecryption';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

@Injectable()
export class EvUserService {

 constructor(private encrypt: EncryptionAndDecryption){}

  async createEvUser(EvUser: AddEvUserType): Promise<AddEvUserType> {
    let password = this.encrypt.encrypt(EvUser.newPassword);
       const userDetails = {
              TableName: 'User',
              Item: {
                  ID               :  EvUser.mail, 
                  UserName         :  EvUser.userName,
                  MobileNumber     :  EvUser.mobileNumber,
                  EVPassword       :  password
              }
           };
           const cardDetails = {
              TableName: 'Payment',
              Item: {
                  ID               :  EvUser.mail,
                  NameOnCard       :  EvUser.nameOnCard,
                  CardNo           :  EvUser.cardNo, 
                  ExpiryDate       :  EvUser.expiryDate,
                  Location         :  EvUser.location
              }
           };
            
      
              await dynamodb.put(userDetails).promise();
              await dynamodb.put(cardDetails).promise();
     return EvUser;
    
   }

  async findUser( ID: string): Promise<String> {
    let params = {
      TableName: 'User',
      Key: {
         ID
       }
    } 
    const user = await dynamodb.get(params).promise();
       if(user)
          return "The user exists";
       return "The user does not exists";
   }
}
