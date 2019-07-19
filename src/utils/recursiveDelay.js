// Function to execute X function, Y number of times with Z of interval delay

// recursiveDelay(externalFunctionToCall, 5, 1);

module.exports = {
    async recursiveDelay(functionToCall, executionsNumber, timeoutInSeconds){
        if (executionsNumber) { 
            functionToCall();  
            setTimeout(()=>{ 
                recursiveDelay(functionToCall, executionsNumber - 1, timeoutInSeconds); //recursive call
            }, 1000 * timeoutInSeconds);
        }
    }
}
