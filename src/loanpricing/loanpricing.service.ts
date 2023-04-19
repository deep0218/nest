import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Loanpricing } from './schemas/loanpricing.schema';

@Injectable()
export class LoanpricingService {
    constructor(
        @InjectModel(Loanpricing.name)
        private loanpricingModel: mongoose.Model<Loanpricing>

    ) {}

    //Get All Loan Pricing => GET /Loanpricings
    async findAll(): Promise<Loanpricing[]> {
        const loanPricings = await this.loanpricingModel.find()
        return loanPricings
    }

    // Post new loan pricing  => Post /loanpricing
    async create(loanpricing: Loanpricing): Promise<Loanpricing> {
        const loanpricingval = await this.loanpricingModel.create(loanpricing);
        return loanpricingval;
    }

    // Get loan pricing by id => Get /loanpricing/:id
    async findById(id: string ): Promise<Loanpricing> {
        const loanpricingvalue  = await this.loanpricingModel.findById(id);
        if (!loanpricingvalue)
        {
            throw new NotFoundException ('loanpricing not found!');
        }
        return loanpricingvalue;
    }

    //Update a loanpricing by id => PUT /loanpricing/:id
    async updateById (id: string, loanpricing: Loanpricing): Promise<Loanpricing> {
        return await this.loanpricingModel.findByIdAndUpdate(id, loanpricing, {
            new: true,
            runValidators: true
        });

    }

} 

