export const interpolate = (
    template: string,
    params: Record<string, string | number>,
): string =>
    template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
        String(params[key] ?? ''),
    );