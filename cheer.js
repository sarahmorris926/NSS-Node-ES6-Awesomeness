// const j = "Give me a J!"
// const o = "Give me an O!"
// const h = "Give me an H!"
// const n = "Give me an N!"
// const d = "Give me a D!"
// // O already declared
// const e = "Give me an E!"

// const question = "What does that spell?"
// const name = "JOHN DOE!"

// console.log(j, o, h, n, d, o, e, question, name);

// const firstName = "JOHN";
// const lastName = "DOE";
// const fullName = [...firstName, ...lastName];


// for (elem of fullName) {
//   console.log(`Give me a ${elem}!`);
// }

// console.log("What's that spell?");
// console.log(`${firstName} ${lastName}!`);




const myFirstName = process.argv[2];
const myLastName = process.argv[3];
const person = {
    myFirstName,
    myLastName,
};

const nodeCheer = ({ myFirstName: first, myLastName: second}) => {
    return new Promise((resolve, reject) => {
        if (first && second) {
            let name = `${first} ${second}`.toUpperCase();
            let nameArr = [...first, ...second];
            let i = nameArr.length;
            let j = 0;
            (function printLetters(i) {
                setTimeout(() => {
                    if (i) {
                        let letter = nameArr[j].toUpperCase();
                        let conj = "aeiofhlmnrsx".includes(letter.toLowerCase())
                            ? "an"
                            : "a ";
                        console.log(`Give me ${conj} ${letter}!`);
                        i--;
                        j++;
                        printLetters(i);
                    } else {
                        console.log(`What's that spell?`);
                        resolve(name);
                    }
                }, 1000);
            })(i);
        } else {
            reject("please enter a first and last name when running the app");
        }
    });
}

nodeCheer(person)
.then(name => {
    setTimeout(() => {
        console.log(`${name}!`);
    }, 1000)
})
.catch(error => {
    console.log('oops', error);
});
