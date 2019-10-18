const request = require("supertest"); 

const server = require("../api/server.js");

describe("POST /register", () => {
    it("Should return a 401 http status code if it's a bad request", () => {
        return request(server)
        .get("/api/jokes")
        .then(response => {
            expect(response.status).toBe(401)
        });
    })

        it("checks to see if username is a bad request", async () => {
        const response = await request(server).get("/api/jokes").send({username: "Noah"})
        expect(response.status).toBe(401)
    })
});