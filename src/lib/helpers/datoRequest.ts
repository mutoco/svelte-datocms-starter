import { PUBLIC_GRAPHQL_API_TOKEN } from '$env/static/public';
import { executeQueryWithAutoPagination } from '@datocms/cda-client';
import { error as svelteError } from '@sveltejs/kit';

interface Variables {
    [key: string]: any;
}

interface QueryResult {
    [key: string]: any;
}

export const performRequest = async (
    query: any, 
    variables: Variables = {}
): Promise<QueryResult> => {
    try {
        const result = await executeQueryWithAutoPagination<QueryResult>(query, {
            token: PUBLIC_GRAPHQL_API_TOKEN,
            variables,
            includeDrafts: false,
        });

        return result;
    } 
    catch (error: any) {
        throw svelteError(error.status || 500, error.message || "Server error");
    }
};