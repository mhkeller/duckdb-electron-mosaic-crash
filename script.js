import * as vg from "./node_modules/@uwdata/vgplot/dist/vgplot.min.js";

async function run () {
	await vg
		.coordinator()
		.exec(
			vg.loadCSV(
				'penguins',
				'https://raw.githubusercontent.com/uwdata/mosaic/main/data/penguins.csv',
			),
		);

	const chart = vg.dot(vg.from('penguins'), {
		x: 'bill_length',
		y: 'bill_depth',
	});

	// Uncomment this to show the crash
	const html = vg.plot(chart);

	// document.querySelector('body').appendChild(html);
}

run();
