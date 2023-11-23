
import { sum } from"$lib/api.js"
export function load({ params }) {
    let s = sum(5,6)
	return {
		
			title: `this from backend`,
			content: `Content for show data from backend by load function`,
            sum:s
		
	};
}
