
import { ObjectType,Field, Int, Float } from "@nestjs/graphql";

@ObjectType()
export class Bill{

            @Field(type=>Float)
            Consumption     : number;
            @Field(type=>Int)
            Duration        : number;
            @Field(type=>Int)
            UnitPrice       : number;
            @Field(type=>Float)
            ConsumptionCost : number;
            @Field(type=>Float)
            Tax             : number;
            @Field(type=>Int)
            Discount        : number;
            @Field(type=>Float)
            TotalBill       : number;
    
}