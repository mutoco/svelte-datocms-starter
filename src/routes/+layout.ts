import { InitialQueryDocument } from '$graphql/types';
import { performRequest } from '$helpers/datoRequest';
import { generateRoutes } from '$helpers/generateRoutes';

export const load = () => {
    return performRequest(InitialQueryDocument).then((data: Record<string, any>) => {
        const extractPayload = (prefix: string): Record<string, any> => {
            return Object.fromEntries(
                Object.entries(data).filter(([key]) => key.startsWith(prefix)).map(([key, value]) => [
                    key.slice(prefix.length).charAt(0).toLowerCase() + key.slice(prefix.length + 1),
                    value
                ])
            );
        };

        interface Routes {
            [key: string]: any;
        }

        interface Tags {
            [key: string]: any;
        }

        interface Features {
            [key: string]: any;
        }

        const routes: Routes = generateRoutes(extractPayload('page'));
        const tags: Tags = extractPayload('tags');
        const features: Features = extractPayload('feat');

        return { routes, tags, features };
    });
};
