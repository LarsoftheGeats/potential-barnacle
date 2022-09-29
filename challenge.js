let array = [   [1,6,0],
            [4,8,1],
            [0,0,5]
  ];
  console.log("before iteration")
  console.log(array)
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[0].length; j++){
        if (array[i][j]%2 === 1){
            array[i][j] *= 6;
        }
    }
  }
  console.log("after iteration")
  console.log(array)