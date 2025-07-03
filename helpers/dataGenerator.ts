import {faker} from '@faker-js/faker';

export interface User{
        username: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        city: string;
        address: string;
        postcode: string;
}


export const generateValidUser = (): User => ({
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        postcode: faker.lorem.sentence(),
    })
    //generateNonValidUser: () => ({})


