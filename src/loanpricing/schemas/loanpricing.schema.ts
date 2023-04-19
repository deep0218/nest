import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Loanpricing {

    @Prop()
    name: string

    @Prop()
    loanName: string

    @Prop()
    description: string

    @Prop()
    modelType: string

    @Prop()
    modelVariantType: string

    @Prop()
    state: string

    @Prop()
    term: number

    @Prop()
    downPayment: number

    @Prop()
    annualPercentageRate: number

    @Prop()
    creditScore: string

}

export const LoanpricingSchema = SchemaFactory.createForClass(Loanpricing);