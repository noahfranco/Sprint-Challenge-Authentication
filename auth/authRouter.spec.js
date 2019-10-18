const request = require("supertest"); 

// const authRouter = require("./auth-router.js"); 

const server = require("../api/server.js");

describe("POST /register", () => {
    it("Should return a 404 http status code if credentials don't exists", () => {
        return request(server)
        .post("/register")
        .then(response => {
            expect(response.status).toBe(404)
        });
    })

    // test("Should return JSON", async () => {
    //     const response = await request(server).post("/")
    //     expect(response.type).toMatch(/json/i); 
    // })
});

describe("POST /login", () => {
    it("Should return a 404 http status code if users does not provide credentials", () => {
        return request(server)
        .post("/login")
        .then(response => {
            expect(response.status).toBe(404)
        });
    })

//     test("Should return JSON", async () => {
//         const response = await request(server).post("/")
//         expect(response.type).toMatch(/json/i); 
//     })
});

// })








// describe("This is to test our register endpoint", () => {
//     it("checks that we can register", async () => {
//         const response = await request(server).post("/api/auth/register").send({username: "Noah"})
//         expect(response.status).toBe(500)
//     })