import path from "path";

export class PathSearch {
    static readonly base = path.basename(path.dirname(path.basename(path.dirname(__dirname))))

    static getPathCSV(nameFile: string): string {
        return path.join(PathSearch.base, 'legacy', 'data', nameFile);
    }
}