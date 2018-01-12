// Make sure to have MySQL and Node server running

const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;
const express = require('express');

describe('Persistent Node Squeaker Server', function() {
	let dbConnection;

	beforeEach(done => {
		dbConnection = mysql.createConnection({
			user: 'root',
			database: 'squeaker'
		});
		dbConnection.connect();

		dbConnection.query('SELECT * FROM users', done);
	});

	afterEach(() => dbConnection.end());

  it('Should collect user data for the logged in user', function(done) {
    // GET user data from server.
    request({
    	method: 'GET',
    	uri: 'http://127.0.0.1:3000/api/userinfo/1',
    	contentType: 'application/json'
    }, (err, res, body = {}) => {
    	let data = JSON.parse(body);

    	expect(Object.keys(data[0]).length).to.equal(6);

			expect(data[0].id).to.equal(1);
			done();
    });
  });

	it('The db should have four default users with username, displayname, bio text, profile picture and profile banner', done => {
		dbConnection.query('SELECT * FROM users', (err, results) => {
			if (err) throw err;

			expect(results.length).to.equal(4);

			expect(results[0].username).to.equal('shockway');

			expect(results[1].display_name).to.equal('Henry Chestnutt');

			expect(results[2].bio_text).to.equal('You think you can keep up? PUH-LEES');

			expect(results[0].profile_img_url).to.equal('https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg');

			expect(results[3].banner_img_url).to.equal('https://i.pinimg.com/564x/b3/9f/d8/b39fd8fd5ac2e8c25938e2fd1783d016.jpg')

			done();
		});
	});

	// TODO: enable test by removing the x.
	// Find out which is the correct uri/path for travis testing and heroku
	xit('The db should return something when hitting /api/search', done => {
		request('http://127.0.0.1:3000/api/search?q=fe', (error, response, body) => {
			console.log(error);
			expect(body).to.be.an('string'); // not a string actually
			done();
		});
	});

	it('The db should return something when hitting /api/search', done => {
		// let uri = process.env.PORT ? '/api/search?q=fe' : 'http://127.0.0.1:3000/api/search?q=fe';
		let port = process.env.PORT || 3000;
		request(`http://127.0.0.1:${port}/api/search?q=fe`, (error, response, body) => {
			expect(body).to.be.an('string');
			// TODO: review
			done();
		});
	});
});