import fs from "fs"
import { PathSearch } from "./pathSearch";
import csv from 'csv-parser';

export class ParserCSV {

    parserCSV<T>(nameFile: string): Promise<T[]> {   
        const pathFile = PathSearch.getPathCSV(nameFile);
        return new Promise((resolve, reject) => {
            const results: T[] = [];
            fs.createReadStream(pathFile)
              .pipe(csv())
              .on('data', (data: T) => results.push(data))
              .on('end', () => resolve(results)) 
              .on('error', (error) => reject(error));
        });        
    }
}