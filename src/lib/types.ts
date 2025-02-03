export interface RoutesInput {
	index: number;
	studio: Array<any>;
	allPeople: Array<any>;
	work: Array<any>;
	allProjects: Array<any>;
	allPages: Array<any>;
	// Mutated data
	employeeItems: Array<{
        _allSlugLocales: Array<{ locale: string; slug: string }>;
        title: string;
        _allNavigationTitleLocales?: Array<{ locale: string; title: string }>;
    }>;
}

export interface RouteObject {
	__typename: string;
	id: string;
	_allSlugLocales?: Array<{ locale: string; slug: string }>;
	_allNavigationTitleLocales: Array<{ locale: string; title: string }>;
	parentPid?: string | null;
}

export interface LocaleObject {
	typename: string;
	id: string;
	parentPid?: string | null;
	slug: string | null;
	title: string;
	path: string;
}

export interface RoutesOutput {
	[key: string]: LocaleObject[] | null;
}

export interface BlockObject {
	id: string;
	__typename: string;
	[key: string]: any; 
}
