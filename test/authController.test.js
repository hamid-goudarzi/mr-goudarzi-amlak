const request = require("supertest");
const app = require("../app");
const { func } = require("joi");

describe("AuthController Testing", () => {
  describe("Login Testing", () => {
    it("should return a 200 status code", (done) => {
      const data = {
        email: "goudarzi.hamid@gmail.com",
        password: "12345678",
      };

      request(app)
        .post("/api/auth/login")
        .send(data)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body.user.email).toEqual("goudarzi.hamid@gmail.com");
        });

      done();
    });

    it("failed login for wrong password", async function () {
      const data = {
        email: "goudarzi.hamid@gmail.com",
        password: "1234",
      };

      const res = await request(app).post("/api/auth/login").send(data);

      expect(res.headers).toBeDefined(); // Ensure headers are defined
      expect(res.headers["content-type"]).toMatch(/json/);
      expect(res.status).toEqual(400);
      expect(res.body.message).toEqual("email or password is not correct!!!");
    });
  });

  describe("signup Testing", () => {
    // it("should return a 200 status code", (done) => {});
    // it("should return a 200 status code", (done) => {});
  });

  describe("Logout Testing", () => {
    // it("should return a 200 status code", (done) => {});
    // it("should return a 200 status code", (done) => {});
  });
});
