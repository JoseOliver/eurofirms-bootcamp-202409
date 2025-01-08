fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQxZjk3YTUwOTc2ZDcyYmU0NmZlODkiLCJpYXQiOjE3MzI5MDkxODd9.THR6QKaPDt0dFrkVjJKSGHqVzM1CpRm1KzKZffPDYXI',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://cdn-icons-png.flaticon.com/512/5986/5986331.png","text":"hello world"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))