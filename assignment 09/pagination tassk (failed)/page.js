
var getData ;

fetch('http://54.156.123.123/blogs')
    .then(res => res.json())
    .then(result => {
        getData = result
        // console.log(getData);

        //             let out = '<h2> blogs </h2>'

        //             data.forEach(user => {
        //                 out += `
        //                         <ul class="pageData"> <hr>
        //                             <li>${user.id}</li><br>
        //                             <li>${user.title}</li><br>
        //                             <li>${user.description}</li><br>
        //                             <li>${user.author}</li><br>

        //                         </ul>
        //                         `

        //             });

        //             document.querySelector('#blogSection').innerHTML = out;

        //         });

        // }
        // getData();


        var state = {
            'querySet': fetchData,
            'page': 1,
            'rows': 10,
            'windows':10,
        }
        buildTable()
        function pagination(querySet, page, rows) {
            var trimStart = (page - 1) * rows
            var trimEnd = trimStart + rows
            var trimmedData = querySet.slice(trimStart, trimEnd)
            var pages = Math.round(querySet.length / rows);
            return {
                'querySet': trimmedData,
                'pages': pages,
            }
        }

        console.log("indal");

        function pageButtons(pages) {
            var wrapper = document.getElementById('blogSection')
            wrapper.innerHTML = ``
            console.log('Pages:', pages)
            var maxLeft = (state.page - Math.floor(state.window / 2))
            var maxRight = (state.page + Math.floor(state.window / 2))
            if (maxLeft < 1) {
                maxLeft = 1
                maxRight = state.window
            }

            console.log("indal1");

            if (maxRight > pages) {
                maxLeft = pages - (state.window - 1)
                if (maxLeft < 1) {
                    maxLeft = 1
                }
                maxRight = pages
            }

            console.log("indal2");

            for (var page = maxLeft; page <= maxRight; page++) {
                wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
            }

            console.log("inda3");

            if (state.page != 1) {
                wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
            }

            console.log("indal4");

            if (state.page != pages) {
                wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
            }
            $('.page').on('click', function () {
                $('#table-body').empty()
                state.page = Number($(this).val())
                buildTable()
            })
        }
        function buildTable() {
            var table = `${'#BLOGS'}`
            var data = pagination(state.querySet, state.page, state.rows)
            var myList = data.querySet
            for (var i = 1 in myList) {
                //Keep in mind we are using "Template Litterals to create rows"
                var row = `<ol>
              <li>${myList[i].id}</li> <br>
              <li>${myList[i].title}</li>
              <li>${myList[i].author}</li>
              <li>${myList[i].description}</li>
              `
                table.append(row)
            }
            pageButtons(data.pages)
            console.log("indal5");
        }
    })


getData();