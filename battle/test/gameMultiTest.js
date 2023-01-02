const path = require("path")
const { expect } = require('chai');
const ejs = require("ejs")
const jsdom = require("jsdom")
const moment = require("moment")
const { JSDOM } = jsdom;
const request = require("supertest");
const gameMulti = require("../routes/gameMulti")
const express = require("express");
const app = express();

const targetFile = path.resolve(__dirname, '../views/gameMulti.ejs')

ejs.renderFile(targetFile, { currentPlayer: "Izzie", otherPlayer: "Rando" }, function (err, str) {
    console.log(err)
    if (str) {
        let dom
        let container

        app.use(express.urlencoded({ extended: false }));
        app.use("/gameMulti", gameMulti);

        describe('Game page renders', () => {
            beforeEach(() => {
                dom = new JSDOM(str, { moment }, { runScripts: 'dangerously' })
                container = dom.window.document.body
            })
            it('should show current player name', async () => {
                const response = await request(app).get("/gameMulti")
                expect(container.querySelector('h1').textContent).to.contain('Izzie')
            })

        })
    }
})