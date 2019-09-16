function alphanumeric(string){
  let check = /^[0-9a-z]+$/i;
  return check.test(string)
}