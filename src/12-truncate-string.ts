export {};

function truncateString(str: string, length: number):string{
    //return str.substring(0,length)


   // Expected output: CODE

  
   let result = "";
    
  for(let i = 0; i < length; i++){
      console.log('i, str[i]:', i, str[i]);

      result = result + str[i];
      console.log('result: ', result);
      console.log('=======================');
    }
    return result;

  }
      console.log (truncateString ("CODELEX", 4));
  
    
  
        




  