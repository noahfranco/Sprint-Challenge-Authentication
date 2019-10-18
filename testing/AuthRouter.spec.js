const request = require("supertest"); 

const authRouter = require("../auth/auth-router.js"); 

describe("POST /register", () => {
    it("Should return a 200 http status code for register", () => {
        return request(authRouter)
        .post("/register")
        .then(response => {
            expect(response.status).toBe(200)
        });
    })

    test("Should return JSON", async () => {
        const response = await request(authRouter).post("/")
        expect(response.type).toMatch(/json/i); 
    })
});

describe("POST /register", () => {
    it("Should return a 200 http status code for login", () => {
        return request(authRouter)
        .post("/login")
        .then(response => {
            expect(response.status).toBe(200)
        });
    })

    test("Should return JSON", async () => {
        const response = await request(authRouter).post("/")
        expect(response.type).toMatch(/json/i); 
    })
});
