/*-------------------------------------*/
console.log(`Array methods:`);

const items = [

    { name: 'Bike', price: 150 },
    { name: 'TV', price: 1500 },
    { name: 'PC', price: 15 },
    { name: 'Phone', price: 50 },
    { name: 'Album', price: 100 },
    { name: 'Keyboard', price: 10 }

]; 

console.log(items);


/*szűrés = filter*/
                    /*mint egy foreach, 
                    végig megyük az elemeket egy segéd objektummal*/
const filteredItems = items.filter((item) =>{

    return item.price >= 50;
});


/*egy új objetumot hozz létre a filter metódus, 
és nem változtatja az eredit*/

console.log(filteredItems);


/*map*/

/*egy új objetumot hoz létre*/
const filteredItems2 = items.map((item) =>{

  
    /*a map metódus egy új objetumot készít felhaszálva az adott objektum mindent elemét
    az eredményben szereplő elemeket pedig 
    képezheti egy feltétel vagy más beavatkozás
    és nem képez új objektumot, hanem az eredit módosítja meg*/
    return ++item.price;
    //return item.price;
    //return item; stb stb;
});

console.log(filteredItems2);


/*find metódus, mely megtalálja az objektum adott elemét*/


console.log(items);

const filteredItems3 = items.find((item) =>{

    return item.name === "TV";
});

console.log(filteredItems3);



/*some metódus, ha legalább egy olyan elem(vagy valamelyik some item),
melyre igaz lesz a feltétel, akkor igazzal tér vissza*/
const filteredItems4 = items.some((item) =>{

    /*ha a név nem üres string, akkor igaz értékkel tér vissza*/
    return item.name === "";
});

console.log(filteredItems4);


/*evry metódus*/
/*minden egyes elemre igaznak kell lennie a feltételnek, 
ellentétbe a 'some'-al*/


/*reduce csökenti az adott objektumot, az adott elemmel balról jobbra lépkedve*/

var numbers = [175, 50, 25];

const tryReduce = numbers.reduce((currentValue, item) =>{

    return currentValue - item;
})

console.log(tryReduce);