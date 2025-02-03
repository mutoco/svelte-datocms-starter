import * as GraphQLQueries from '$graphql/types';

export const getQuery = (typename: string): unknown => {
    const typenameKey = formatTypenameKey(typename, 'QueryDocument');
    return GraphQLQueries[typenameKey] || null;
};

export const formatTypenameKey = (typename: string, suffix: string = ''): string => {
    return typename
        .replace(/PageRecord$/, '')
        .replace(/ItemRecord$/, 'Item')
        .concat(suffix);
};

export const convertToTypenameKey = (typename: string): string => {
    return typename
        .replace(/Record$/, '')
        .replace(/^./, (c) => c.toLowerCase());
};
