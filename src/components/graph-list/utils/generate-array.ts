export const generateArray = (data: string[], type: string) => {
    const entries = Object.entries(data);
    let arr = [];
    arr = entries.map((item) => {
        return {
            name: item[0],
            [type]: Object.values(item[1])[type === 'income' ? 0 : 1]
        };
    });
    return arr;
};
