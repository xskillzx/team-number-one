// Make sure to have MySQL and Node server running

const mysql = require('mysql');
const request = require('request');
const expect = require('chai').expect;

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
});