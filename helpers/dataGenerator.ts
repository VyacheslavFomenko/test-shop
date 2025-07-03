import {faker} from '@faker-js/faker';

module.exports = {
    generateValidUser: (): Object => ({
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        city: faker.location.city(),
        address: faker.location.streetAddress(),
        postcode: faker.lorem.sentence(),
    }),
    //generateNonValidUser: () => ({})
};