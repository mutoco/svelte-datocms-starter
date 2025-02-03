import { localeParam } from "$helpers/locales";

/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
	return localeParam.test(param);
}
