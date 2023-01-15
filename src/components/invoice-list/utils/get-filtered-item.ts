export const getFilteredItem = <T extends object>(item: T, exclude: string[]) =>
    Object.fromEntries(
        Object.entries(item).filter(([key, _value]) => !exclude.includes(key))
    );
