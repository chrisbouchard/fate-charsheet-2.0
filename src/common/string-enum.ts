export function stringEnum<T extends string>(elements: T[]): {[K in T]: K} {
    return elements.reduce((result, key) => {
        result[key] = key;
        return result;
    }, Object.create(null));
}
