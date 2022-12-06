async function fetchWPData(url, query = "") {
	const res = await fetch(url);
	const data = await res.json();
	let dataArray = [];
	data.forEach((post) => {
		if (query !== "") {
			if (post.acf.bookingType === query) {
				const dataObject = {
					title: post.title.rendered,
					body: post.content.rendered,
					data: post.acf,
					image: post._embedded["wp:featuredmedia"][0].source_url,
				};
				dataArray.push(dataObject);
			}
		} else {
			const dataObject = {
				title: post.title.rendered,
				body: post.content.rendered,
				data: post.acf,
				image: post._embedded["wp:featuredmedia"][0].source_url,
			};
			dataArray.push(dataObject);
		}
	});

	return dataArray;
}

export { fetchWPData };
