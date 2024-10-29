import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    
    @Get("factorial/:number")
    printhello(@Param("number") number : string) : { factorial : number}{
        //Initializing input variable na paglalagyan ng input ng user
        const input = parseInt(number);

        //initializing factorial variable para sa start ng factorial
        let factorial = 1;
        //for loop para sa multiplying ng factorial variable sa variable nextNumber hanggang mapunta sa number ng input ng user
        for (let nextNumber = 1; nextNumber <= input; nextNumber++) {
            factorial *= nextNumber;
        }

        //returning the variable na galing sa for loop
        return {factorial : factorial};
    }
}
