export const formatPath = (pathname: string): string => {
    const paths = pathname.split('/');
    return paths
        .map((path: any) => path.charAt(0).toUpperCase() + path.slice(1))
        .slice(1, paths.length)
        .join(' / ');
};
