
  function capitalizeFirstLetter(string){
    let arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }

  export {capitalizeFirstLetter}