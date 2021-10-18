"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const home = (req, res) => {
    // res.send('home no controoler');
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: list
    });
};
exports.home = home;
const dogs = (req, res) => {
    // res.send('dogs');
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    // res.send('cats');
    let list = pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    // res.send('fishes');
    let list = pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: list
    });
};
exports.fishes = fishes;
