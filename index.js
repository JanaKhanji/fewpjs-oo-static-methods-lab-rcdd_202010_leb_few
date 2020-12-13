class Formatter {
  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice( 1 )
  }

static sanitize(string){
   return string.replace( /[^A-Za-z0-9 '-]/g, '' )
}

static titleize(string){
  const dontCap =["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
  let inputArr= string.split(" ")
  let output= inputArr.map((el)=>{
    dontCap.forEach((item)=>{
      if (item!==el){
        el=this.capitalize(el)
      }
        }) 
        return el
  })
  return output.join(" ")
}

}