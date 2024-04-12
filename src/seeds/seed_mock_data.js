import fs from 'fs';
import csv from 'csv-parser';

const csvFilePathProducts = 'src/seeds/mock/products.csv';
const jsonFilePathProducts = 'src/seeds/mock/products.json';
const csvFilePathMaterials = 'src/seeds/mock/materials.csv';
const jsonFilePathMaterials = 'src/seeds/mock/materials.json';

const writeCsvToJson = (csvFilePath, jsonFilePath) => {
	let data = [];

	fs.createReadStream(csvFilePath)
		.pipe(csv())
		.on('data', (row) => {
			data.push(row);
		})
		.on('end', () => {
			fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2), (err) => {
				if (err) throw err;
				console.log(
					'CSV file successfully processed and JSON has been written'
				);
			});
		});
};

writeCsvToJson(csvFilePathProducts, jsonFilePathProducts);
writeCsvToJson(csvFilePathMaterials, jsonFilePathMaterials);
