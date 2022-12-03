const finalMessage = [];
const nameBase = ["Eryk","Susel","Mikusky","Kamil","Grzebalec"];
const destinationBase = ["Krakow","Poznan","Wroclaw","Warszawa","Katowice","Gdynia"];


const messageGenerator = () =>{
    
    const nameGen = () =>{

        n = Math.floor(Math.random() * nameBase.length - 1);
        return nameBase[n];
    };

    const destinationGen = () =>{

        n = Math.floor(Math.random() * destinationBase.length - 1);
        return destinationBase[n];
    };
    return nameGen() + " powiedzial ze jedziemy do: " + destinationGen();
};
console.log(messageGenerator());