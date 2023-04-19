import { Controller,Get, Post, Body, Param, Put } from '@nestjs/common';
import { CreateloanPricingDto } from 'src/dto/create-loanpricing.dto';
import { UpdateloanPricingDto } from 'src/dto/update-loanpricing.dto';
import { LoanpricingService } from './loanpricing.service';
import { Loanpricing } from './schemas/loanpricing.schema';

@Controller('Loanpricing')
export class LoanpricingController {
    constructor(private loanpricingService: LoanpricingService){}

    @Get()
    async getAllLoanpricing(): Promise<Loanpricing[]> {
        return this.loanpricingService.findAll()
    }

    @Get(':id')
    async getLoanpricingbyId(
        @Param('id') 
        id: string
        ): Promise<Loanpricing> {
        return this.loanpricingService.findById(id);
    }

    @Post()
    async CreateloanPricing(
        @Body()
        loanpricing : CreateloanPricingDto,
        ): Promise<Loanpricing> {
        return this.loanpricingService.create(loanpricing)
    }

    @Put(':id')
    async UpdateloanpricingbyId(
        @Param('id') 
        id: string,
        @Body()
        loanpricing:UpdateloanPricingDto
    ): Promise<Loanpricing> {
        await this.loanpricingService.findById(id);
        return this.loanpricingService.updateById(id, loanpricing);
    }

}
