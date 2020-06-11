
import { InputType,Field } from "@nestjs/graphql";

@InputType()
export class StatusUpdate{
    @Field()
     ID : String;
    @Field()
     status : string;

    
}