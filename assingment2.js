function checkName(name){
    const lastChar = name.charAt(name.length - 1);
   if(lastchar === 'a' || lastchar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w'){
       return 'Good name';
   }
   else {
       return 'Bad name';
   }
   return result;
}
    

const result = checkName(Salman);
console.log(result);