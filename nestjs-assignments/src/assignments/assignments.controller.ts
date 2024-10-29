import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    @Get('fibonacci/:n')
    fibonacci(@Param('n') n : number ) : { sequence : number[]}{
        //Initialize yung first two number ng fibonacci sequence
        let sequence = [0, 1];

        //Checking if yung number is less than 1 or walang nilagay na input 
        if (isNaN(n) || n < 1) {
            throw new BadRequestException('Parameter must be a positive integer');
        }

        //for loop: i is eqauls to 2 kase nakainitialize na yung 0 at 1, at yung 2 yung start ng counting
        for (let i = 2; i < n; i++) {
            //nextNumber yung magddictate kung anong sunod base sa computation ng fibonacci sequnce
            let nextNumber = sequence[i - 1] + sequence[i - 2]; 
            sequence.push(nextNumber); 
        }

        //Then return yung sequence if yung for loop reach it end
        return { sequence : sequence.slice(0, n) };
    }
}
