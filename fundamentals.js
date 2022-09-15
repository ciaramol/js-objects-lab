const aCar = {
    owner : "Joe Bloggs",
    type: {
      make: "Toyota",
      model: "Corolla",
      cc: "1.8",
    },
    registration: {
      year: "201",
      code: "WD",
      number: "1058",
    },
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.code + "-" + aCar.registration.number)