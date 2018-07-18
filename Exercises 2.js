function balikArray (kata){
  var result = ''
  console.log(kata.length)
  for (var i = kata.length-1 ; i >= 0 ; i-- ){
    result = result + (kata[i])
  }
  console.log(result)
}
balikArray('hello world')
