import {Injectable } from '@nestjs/common';
import {CpSearchResult} from './Model/cp.search.result';
import {CpSearch} from './Model/cp.search';
import {CpRequest } from './Model/cp.request';

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
@Injectable()
export class CpSearchService {
       constructor() {}

  async SearchCp(searchCp: CpSearch): Promise<CpSearchResult> {
       console.log(JSON.stringify(searchCp));
    let area: string[]  = searchCp.Location.split(',');
              
    const params = {
         TableName :  'ChargePoint',
         FilterExpression: 'AvailablityFrom >= :AvailablityFrom AND AvailablityTo <= :AvailablityTo AND contains(#Address, :Address) AND #RequestStatus = :RequestStatus',
         ExpressionAttributeNames: {
         "#Address": "Address",
         "#RequestStatus" : "RequestStatus"
     },
      ExpressionAttributeValues: {   
       ':AvailablityFrom': searchCp.Start_date,
       ':AvailablityTo': searchCp.End_date,
       ':Address' : area[0],
       ':RequestStatus' : 'Available'
      }   
   };
   console.log(params);

  const cpInLocation:any =  await dynamodb.scan(params).promise();
  console.log('cp in location' + JSON.stringify(cpInLocation));

let requiredConnectionType:String[] = searchCp.Type; 
requiredConnectionType = requiredConnectionType.sort();

const connectorTypes:any = cpInLocation.Items.map(element => {

 if(element.ConnectorType.some(e => requiredConnectionType.indexOf(e) == 0)){
   
  return element;
 }
});

console.log(connectorTypes);

var requiredChargePoint:any  = connectorTypes[0]; 
console.log(requiredChargePoint);
console.log(JSON.stringify(requiredChargePoint));

const ID:string = requiredChargePoint.ID;

var param:any =  {
  TableName: 'User',
  Key:{
    ID
}
};

let userDetails:any = await dynamodb.get(param).promise();
requiredChargePoint["username"] = userDetails.Item.Username;
console.log(JSON.stringify(requiredChargePoint));
 return {
    Price           : requiredChargePoint.Price,
    Owner_name      : requiredChargePoint.username,
    Connector_type  : requiredChargePoint.ConnectorType,
    Current_type    : requiredChargePoint.CurrentType,
    Amentities      : requiredChargePoint.Amenities,
    Location        : requiredChargePoint.Address,
    CpId            : requiredChargePoint.ID
    }
  }

  async requestCp(requestInput: CpRequest ):Promise<String> {

    let date = requestInput.date; 
    let ID   = requestInput.ID;
    let name = requestInput.name;
    let request = name + '  ' +  date;
    let requestStatus = "Waiting for confirmation";
     let param: any =  {
      TableName: 'ChargePoint',
      Key:{
        ID
      },
     UpdateExpression: "set Request = :Request AND RequestStatus = :RequestStatus",  
     ExpressionAttributeValues:{
      ":Request": request,
      ":RequestStatus" : requestStatus
       }
    };
    await dynamodb.update(param).promise();
    return "Request sent successfully";
   }
}
