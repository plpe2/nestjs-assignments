import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    @Get("prime/:number")
    checkIfPrime(@Param("number") number : string) : { isPrime : boolean}{
        //Initializing variable n para sa convertion ng number (input ng user)
        const n = parseInt(number);

        //If statement checking if n is valid, n is less than or equal sa 1 is not valid number for prime numbers
        if(isNaN(n) || n <= 1){
            return { isPrime : false};
        }

        //for loop function for checking if yung n is divisible by 1 or by itself
        for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
            if (n % i === 0) {
              return { isPrime: false };
            }
        }

        //if yung for loop and if else di na trigger, mag rereturn ng true
        return { isPrime : true};
    }
}
