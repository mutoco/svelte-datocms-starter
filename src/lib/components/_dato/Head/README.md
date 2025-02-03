# Social share, SEO and Favicon meta tags

Just like the image component, `<Head />` is a component specially designed to work seamlessly with DatoCMS’s [`_seoMetaTags` and `faviconMetaTags` GraphQL queries](https://www.datocms.com/docs/content-delivery-api/seo) so that you can handle proper SEO in your pages.

You can use `<Head />` your components, and it will inject title, meta and link tags in the document's `<head></head>` tag.

### Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
- [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

`<Head />`'s `data` prop takes an array of `Tag`s in the exact form they're returned by the following [DatoCMS GraphQL API](https://www.datocms.com/docs/content-delivery-api/seo) queries:

- `_seoMetaTags` query on any record, or
- `faviconMetaTags` on the global `_site` object.

## Example

Here is an example:

```svelte
<script>
	import { onMount } from 'svelte';

	import { Head } from '@datocms/svelte';

	const query = `
    query {
      page: homepage {
        title
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `;

	export let data = null;

	onMount(async () => {
		const response = await fetch('https://graphql.datocms.com/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer AN_API_TOKEN'
			},
			body: JSON.stringify({ query })
		});

		const json = await response.json();

		data = [...json.data.page.seo, ...json.data.site.favicon];
	});
</script>

<Head {data} />
```
