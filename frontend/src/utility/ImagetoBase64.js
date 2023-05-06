// export async function ImagetoBase64(file) {
// 	const reader = new FileReader();
// 	reader.readAsDataURL(file);

// 	const data = new Promise((resolve, reject) => {
// 		reader.onload = () => resolve(reader.result);
// 		reader.onerror = (err) => reject(err);
// 	});

// 	return data;
// }

export async function ImagetoBase64(file) {
	if (!file || !(file instanceof Blob)) {
		throw new Error("Invalid file object");
	}

	const reader = new FileReader();
	reader.readAsDataURL(file);

	const data = new Promise((resolve, reject) => {
		reader.onload = () => resolve(reader.result);
		reader.onerror = (err) => reject(err);
	});

	return data;
}
