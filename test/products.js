import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://fakestoreapi.com/')

describe('Products', () => {
    it('GET/Products', (done) => {
        request.get('products').end((err,res) =>{
            // console.log(res.body);
            // console.log(res.status);
            expect(res.body).to.not.be.empty;
            done();
        });
    });
});