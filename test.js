import test from 'ava';
import fn from './';

test('Reduce some whitespace', t => {
	const string = '<span>end of the sentence.&nbsp;<br><br>&nbsp; &nbsp; &nbsp;</span>';
	const expectedResult = '<span>end of the sentence.<br></span>';
	t.is(fn(string), expectedResult);
});
