const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

console.log(" video id ", videoId);
const player = '<video controls id="player"><source src="/'+videoId+'"></video>'

$.get(`/videos/${videoId}`)
    .done((data) => {
        $('#title').text(data.response.title)
        $('#player').append(player)
        $('#description').text(data.response.description)
    })
    .error((data) => {
        $('#title').text("could not find video")
    })
