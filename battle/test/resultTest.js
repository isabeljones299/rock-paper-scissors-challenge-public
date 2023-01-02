const path = require("path")
const { expect } = require('chai');
const ejs = require("ejs")
const jsdom = require("jsdom")
const moment = require("moment")
const { JSDOM } = jsdom;
const request = require("supertest");
const result = require("../routes/result")
const express = require("express");
const app = express();

const targetFile = path.resolve(__dirname, '../views/result.ejs')

ejs.renderFile(targetFile, { computerWeapon: "rock", result: "You win!" }, function (err, str) {
    console.log(err)
    if (str) {
        let dom
        let container

        app.use(express.urlencoded({ extended: false }));
        app.use("/result", result);

        describe('Results page', () => {
            beforeEach(() => {
                dom = new JSDOM(str, { moment }, { runScripts: 'dangerously' })
                container = dom.window.document.body
            })

            it('should show body', async () => {
                const response = await request(app).get("/result")
                expect(container.querySelector('h1').textContent).to.contain('You win!')
            })
        })
    }
})