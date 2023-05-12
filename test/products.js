import supertest from "supertest";
import { expect } from "chai";

const request = supertest('https://fakestoreapi.com/')

describe('Products', () => {
    it('GET/Products', () => {
        // request.get('products').end((err,res) =>{
            // console.log(res.body);
            // console.log(res.status);
            // expect(res.body).to.not.be.empty;
            // done();
        // });

        return request.get('products').then((res) => {
            expect(res.body).to.not.be.empty;
        });
    });

    it('GET/Products/:id', () =>{
        return request.get('products/1').then((res)=>{
            console.log(res.body)
            expect(res.body).to.not.be.empty;
            expect(res.body.price).to.be.eq(109.95);
        });
    });

    it('GET/Products with query params', () =>{
        return request.get('products/limit=4').then((res)=>{
            console.log(res.body)
            // expect(res.body).to.not.be.empty;
        });
    });

});