function calculateNumber(type, a, b) {
	const aRound = Math.round(a);
	const bRound = Math.round(b);

	if (type === 'SUM') {
		return aRound + bRound;
	}
	if (type === 'SUBRACT') {
		return aRound - bRound;
	}
	if (type === 'DIVIDE') {
		if (bROund === 0) {
			return 'Error';
		}
		returnaRound / bRound;
	}
}

module.exports = calculatenumber;
