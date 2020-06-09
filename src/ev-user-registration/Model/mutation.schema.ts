import { InputType,Field } from "@nestjs/graphql";

@InputType()
export class AddEvUserType{
    @Field()
    Id                 : String;
    @Field() 
    user_name          : String;
    @Field() 
    mobile_number      : String;
    @Field() 
    mail               : String;
    @Field() 
    new_password       : String;
    @Field() 
    confirm_password   : String;
    @Field() 
    name_on_card       : String;
    @Field() 
    card_no            : String;
    @Field() 
    expiry_date        : String;
}
