const { expect } = require('chai');

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('checks output of getPaymentTokenFromAPI with true as success', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((resp) => {
        expect(resp).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  }));
});
