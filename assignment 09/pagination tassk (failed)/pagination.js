function getData() {
    fetch('http://54.156.123.123/blogs')
        .then(res => res.json())
        .then(data => {
            let out = '<h2> blogs </h2>'

            data.forEach(user => {
                out += `
            <ul class="pageData"> <hr>
                <li>${user.id}</li><br>
                <li>${user.title}</li><br>
                <li>${user.description}</li><br>
                <li>${user.author}</li><br>
                
            </ul>
            `

                const params = {
                    numberOfArticles: 50,
                    articlesPerPage: 10,
                    currentPage: 1,
                    numberOfButton: 5
                };

                const createPagination = (params) => {
                    const {
                        numberOfArticles,
                        articlesPerPage,
                        currentPage,
                        numberOfButton
                    } = params;

                    const numberOfPages = Math.ceil(numberOfArticles / articlesPerPage);

                    if (currentPage > numberOfPages || currentPage < 1) return {
                        pagination: [],
                        currentPage
                    }

                    const buttons = Array(numberOfPages).fill(1).map((e, i) => e + i);
                    const sideButtons = numberOfButton % 2 === 0 ? numberOfButton / 2 : (numberOfButton - 1) / 2;
                    const calculLeft = (rest = 0) => {
                        return {
                            array: buttons
                                .slice(0, currentPage - 1)
                                .reverse().slice(0, sideButtons + rest)
                                .reverse(),
                            rest: function () {
                                return sideButtons - this.array.length
                            }
                        };
                    };

                    const calculRight = (rest = 0) => {
                        return {
                            array: buttons
                                .slice(0, currentPage)
                                .slice(0, sideButtons + rest),
                            rest: function () {
                                return sideButtons - this.array.length
                            }
                        };
                    };

                    const leftButtons = calculLeft(calculRight().rest()).array;
                    const rightButtons = calculRight(calculLeft().rest()).array;

                    return {
                        pagination: [...leftButtons, currentPage, ...rightButtons],
                        currentPage
                    };
                };

                const pagination = createPagination(params);

                console.log(pagination);

            });

            document.querySelector('#blogSection').innerHTML = out;

        });

}
getData();