//var1
const mathOperations=(opType)=>{
 let type=opType
 return function(arg1,arg2){
    let result=0
    switch(type){
      case 'multiply':result=arg1*arg2
       break;
        
      case 'divide':result=arg1/arg2 
        break
    }

    return result
  }
}

const multiply=mathOperations('multiply')
const divide=mathOperations('divide')

console.log(multiply(2,3))
console.log(divide(100,20))

//var2

const mathOperations=(opType)=>{
 let type=opType
  const operation=(arg1,arg2)=>{
    let result=0
    switch(type){
      case 'multiply':result=arg1*arg2
       break;
        
      case 'divide':result=arg1/arg2 
        break
    }

    return result
  }
  return operation
}

const multiply=mathOperations('multiply')
const divide=mathOperations('divide')

console.log(multiply(2,3))
console.log(divide(100,20))
