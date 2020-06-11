
import { InputType,Field } from "@nestjs/graphql";

@InputType()
export class CpRequest{
    @Field()
     ID : String;
    @Field()
     date   : string;
    @Field()
     name   :String;
    
}