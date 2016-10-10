'use strict';

module.exports = input => {
	input = input.replace(/&nbsp;/gi, ' ');
	input = input.replace(/\s{2,}/gi, ' ');
	input = input.replace(/(\s*<br\s*\/?>\s*){2,}/gi, '<br>');
	return input;
};
