export function throttle<T extends (...args: any[]) => any>(fn: T, wait: number): T {
    let lastTime = 0;

    return function (this: unknown, ...args: Parameters<T>) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        }
    } as T;
}

export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function (this: unknown, ...args: Parameters<T>) {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    } as T;
}
