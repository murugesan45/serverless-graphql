import { InputType,Field, Float } from "@nestjs/graphql";

@InputType()
export class AddCpUserType{
    
    @Field() 
    userName          : String;
    @Field() 
    mobile            : String;
    @Field() 
    mail               : String;
    @Field() 
    newPassword       : String;
    @Field() 
    confirmPassword   : String;
    @Field(type=>[String]) 
    connectorType     : String[];
    @Field() 
    currentType       : String;
    @Field() 
    availability       : string;
    @Field(type=>Float)
    price              : number;
    @Field(type=>[String])
    amentities         : String[];
    @Field()
    Location           :string;
}


