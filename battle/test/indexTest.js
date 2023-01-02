const index = require("../routes/index");
const path = require("path")
const request = require("supertest");
const express = require("express");
const app = express();
const { expect } = require('chai');
const ejs = require("ejs")
const jsdom = require("jsdom")
const moment = require("moment")
const { JSDOM } = jsdom;


const targetFile = path.resolve(__dirname, '../views/index.ejs')

ejs.renderFile(targetFile, function (err, str) {
    console.log(err)
    if (str) {
        let dom
        let container

        app.use(express.urlencoded({ extended: false }));
        app.use("/", index);

        describe("testing index router", () => {
            beforeEach(() => {
                dom = new JSDOM(str, { moment }, { runScripts: 'dangerously' })
                container = dom.window.document.body
            })
            it("index renders correctly", async () => {
                const response = await request(app).get("/")
                expect(container.querySelector('h1').textContent).to.contain('Hi, welcome to Rock Paper Scissors')
            });

        });
    }
})