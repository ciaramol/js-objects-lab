const aCar = {
    owner : "Joe Bloggs",
    address : '3 Walkers Lane',
    type: {
      make: "Toyota",
      model: "Corolla",
      cc: "1.8",
    },
    features : ['Parking assist', 'Alarm', 'Tow-bar'],
    registration: {
      year: "201",
      code: "WD",
      number: "1058",
    },
    previous_owners: [
      {
        name: "Pat Smith",
        address: "1 Main Street",
      },
      {
        name: "Sheila Dwyer",
        address: "2 High Street",
      },
    ],
  };

  aCar.mileage ="10000";
  aCar.colour = {
    exterior: "red",
    interior: "leather",
  };
  
  console.log(aCar.owner + ' drives a ' + aCar.type.make)
  console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.code + "-" + aCar.registration.number)
  console.log("It is a " + aCar.colour.exterior + " car, " + aCar.mileage + " mileage, with " + aCar.colour.interior + " interior.")
  console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address)
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
  } 
  for (let i =0; i < aCar.previous_owners.length; i +=1){
    console.log("Owner " + i + ": " + aCar.previous_owners[i].name + " - " + aCar.previous_owners[i].address);
  }
  for (let p in aCar.type)  {
    console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
  }