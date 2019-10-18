const request = require("supertest"); 

// const authRouter = require("./auth-router.js"); 

const server = require("../api/server.js");

describe("POST /register", () => {
    it("Should return a 404 http status code if credentials have internal error", () => {
        return request(server)
        .post("/api/auth/register")
        .then(response => {
            expect(response.status).toBe(500)
        });
    })

        it("checks that we can register", async () => {
        const response = await request(server).post("/api/auth/register").send({username: "Noah"})
        expect(response.status).toBe(500)
    })
});

describe("POST /login", () => {
    it("Should return a 404 http status code if users does not provide credentials", () => {
        return request(server)
        .post("/api/auth/login")
        .then(response => {
            expect(response.status).toBe(401)
        });
    })

    it("checks that we can login", async () => {
        const response = await request(server).post("/api/auth/login").send({username: "Noah"})
        expect(response.status).toBe(400)
    })
});










// describe("This is to test our register endpoint", () => {
//     it("checks that we can register", async () => {
//         const response = await request(server).post("/api/auth/register").send({username: "Noah"})
//         expect(response.status).toBe(500)
//     })