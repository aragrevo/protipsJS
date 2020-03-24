const createPerson = (name, lastName) => ({ name, lastName });
const printArguments = (age, ...args) => {
    console.warn({ age, args });
    return args;
};


const printProperties = ({ name, codeName, alive, age = 0, suits }) => {
    console.warn({ name });
    console.warn({ codeName });
    console.warn({ alive });
    console.warn({ age });
    console.warn({ suits });
};


const { lastName: newLastName } = createPerson('Eduardo', 'Vergara'); // Toma un argumento y le cambia el nombre
console.log({ newLastName });

const [married, alive, name] = printArguments(10, true, false, 'Tony'); // Desestructura los argumentos retornados
console.log({ married, alive, name });

tony = {
    name: 'Tony',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

printProperties(tony);