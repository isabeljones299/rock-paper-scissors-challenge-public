const path = require("path")
const { expect } = require('chai');
const ejs = require("ejs")
const jsdom = require("jsdom")
const moment = require("moment")
const { JSDOM } = jsdom;
const request = require("supertest");
const turn = require("../routes/turn")
const express = require("express");
const app = express();

const targetFile = path.resolve(__dirname, '../views/game.ejs')

ejs.renderFile(targetFile, { currentPlayer: "Izzie", weapon: "rock", computerWeapon: "paper" },
    function (err, str) {
        console.log(err)
        if (str) {
            let dom
            let container

            app.use(express.urlencoded({ extended: false }));
            app.use("/turn", turn);

            describe('Turn page', () => {
                beforeEach(() => {
                    dom = new JSDOM(str, { moment }, { runScripts: 'dangerously' })
                    container = dom.window.document.body
                })

                it('should show current player name', async () => {
                    const response = await request(app).get("/")
                    expect(container.querySelector('h1').textContent).to.contain('Izzie')
                })
            })
        }
    })