import { InputType,Field} from "@nestjs/graphql";

@InputType()
export class AddEvUserType{

    @Field() 
    userName          : String;
    @Field() 
    mobileNumber      : String;
    @Field() 
    mail              : String;
    @Field() 
    newPassword       : String;
    @Field() 
    confirmPassword   : String;
    @Field() 
    nameOnCard        : String;
    @Field() 
    cardNo            : String;
    @Field() 
    expiryDate        : String;
    @Field() 
    location          : String;
}
