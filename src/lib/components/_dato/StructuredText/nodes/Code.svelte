<script lang="ts">
	import type { Code } from 'datocms-structured-text-utils';

	let { node }: { node: Code } = $props();

	let { code, language } = $state(node);
</script>

<pre class={language}>{code}</pre>
