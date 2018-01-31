if (typeof window === 'undefined') {
	console.error('What are you doing? This isn\'t a Node.js file');
	process.exit(1);
}

// Height of each character block
const width = 10;
const height = 16;

let previous = null;

let painting = false;

function save() {
    const download = document.getElementById('download');
    const canvas = document.getElementById('paint');

    const data = canvas.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    download.setAttribute('href', data);
}

function setColour(r, g, b) {
	const colour = document.getElementById('colour');
	const rgb = [...arguments].map(colour => colour.toString(16)).map((colour) => {
		for (i = 0; i < (2 - colour.length); i += 1) {
			colour += '0'
		}
		return colour;
	}).join('');

	colour.value = `#${rgb}`;
};

window.addEventListener('load', () => {
	const paint = document.getElementById('paint');
	const colour = document.getElementById('colour');
	const rubber = document.getElementById('rubber');
	const output = document.getElementById('output');
	const canvas = paint.getContext('2d');
	const area = paint.getBoundingClientRect();

	const down = (point) => {
		const realX = point.x * width;
		const realY = point.y * height;

		if (rubber.checked) {
			canvas.clearRect(realX, realY, width, height);
		} else {
			canvas.fillRect(realX, realY, width, height);
		}

		let i = 0;
		let j = 0;
		let beforeColour = 'transparent';
		let outString = '';

		for (j = 0; j < paint.height; j += height) {
			for (i = 0; i < paint.width; i += width) {
				const data = canvas.getImageData(i, j, 1, 1).data;
				let currentColour;
				let outColour;
				if (data[3]) {
					currentColour = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
					outColour = `\\x1b[48;2;${data[0]};${data[1]};${data[2]}m`;
				} else {
					currentColour = 'transparent';
					outColour = '\\x1b[0m';
				}

				if (beforeColour !== currentColour) {
					beforeColour = currentColour;
					outString += outColour;
				}
				outString += ' ';
			}
			outString += '\n';
		}
		output.value = outString;
	};

	// https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript
	const line = (previous, current) => {
		const coordinates = [];
		let x1 = previous.x;
		let y1 = previous.y;
		let x2 = current.x;
		let y2 = current.y;

		const dx = Math.abs(x2 - x1);
		const dy = Math.abs(y2 - y1);
		const sx = (x1 < x2) ? 1 : -1;
		const sy = (y1 < y2) ? 1 : -1;
		let err = dx - dy;

		coordinates.push(previous);

		while(!((x1 === x2) && (y1 === y2))) {
			const e2 = err << 1;
			if (e2 > -dy) {
				err -= dy;
				x1 += sx;
			}
			if (e2 < dx) {
				err += dx;
				y1 += sy;
			}
			coordinates.push({
				x: x1,
				y: y1
			})
		}
		coordinates.forEach((point) => {
			down(point);
		})
	};

	paint.addEventListener('mousedown', (e) => {
		const x = Math.floor((e.pageX - paint.offsetLeft) / width);
		const y = Math.floor((e.pageY - paint.offsetTop) / height);
		canvas.fillStyle = colour.value;
		down({
			x, y
		});
		
		painting = true;
	});

	paint.addEventListener('mousemove', (e) => {
		const x = Math.floor((e.pageX - paint.offsetLeft) / width);
		const y = Math.floor((e.pageY - paint.offsetTop) / height);
		if (painting) {
			down({
				x, y
			});
			if (previous) {
				line(previous, {
					x, y
				});
			}
			previous = {
				x, y
			}
		}
	})

	paint.addEventListener('mouseup', () => {
		painting = false;
		previous = null;
	});

	paint.addEventListener('mouseout', () => {
		painting = false;
		previous = null;
	});
});

