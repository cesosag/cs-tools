import { isExternalURL } from 'utils'

describe('isExternalURL()', () => {
	it('should detect external URLs', () => {
		const url = 'https://google.com'
		expect(isExternalURL(url)).toBeTruthy()
	})

	it('should detect internal URLs', () => {
		const url = '/post/1234'
		expect(isExternalURL(url)).toBeFalsy()
	})
})
