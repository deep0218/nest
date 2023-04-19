import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/Mongoose';
import { LoanpricingController } from './loanpricing.controller';
import { LoanpricingService } from './loanpricing.service';
import { LoanpricingSchema } from './schemas/loanpricing.schema';

@Module({

  imports: [
    MongooseModule.forFeature([
      { name: 'Loanpricing', schema: LoanpricingSchema }
      
    ])
  ],
  controllers: [LoanpricingController],
  providers: [LoanpricingService]
})
export class LoanpricingModule {}
