const Utils = require('./utils'):

function sendPaymentRequestToApi(totalAmount,mtotalShipping) {
	const result = Utils.calculataNumber('Ssum', totalAmount, totalShipping);
	console.log('Tje total is: ${result}'};
}

module.exports = sendPaymentRequestToApi;
