import express, { IRouter, Request, Response } from 'express'
const app: IRouter = express.Router();
import { faker } from "@faker-js/faker";

type Brand = {
    id?: any;
    image: string;
    banner: string;
    name: string;
    price: number;
}
type User = {
    id?: any;
    image: string;
    banner: string;
    name: string;
    lastname: string;
    email: string;
}
const genProduct = (Productlenght = 5) => {
    const Brand: Brand = {
        id: faker.string.uuid(),
        image: faker.image.avatar(),
        banner: faker.image.url(),
        name: faker.commerce.productName(),
        price: faker.number.int({ min: 1, max: 2000 }),
    }
    const User: User = {
        id: faker.string.uuid(),
        image: faker.image.avatar(),
        banner: faker.image.url(),
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
    };
    const Product = Array.from({ length: Productlenght }, () => {

        return {
            id: faker.string.uuid(),
            image: faker.image.avatar(),
            banner: faker.image.url(),
            name: faker.commerce.productName(),
            price: faker.number.int({ min: 1, max: 1000 }),
            description: faker.lorem.sentence(),
            published: faker.datatype.boolean(),
            createdAt: faker.date.past().toISOString(),
            updatedAt: faker.date.recent().toISOString(),
            Brand: Brand,
            User: User,
        }
    })
    return Product
}

app.get('/:number', (req: Request, res: Response) => {

    const number = Number(req.params.number)
    if (number > 1000) {
        res.status(400).send('max number exceeded at 1000');
        return
    }
    const data = genProduct(number);
    res.send(data);
    res.end();

});

const pageA = (req: Request, res: Response) => {
    res.send("page a");
    res.end();
}

app.get('/a', pageA)

export default app;