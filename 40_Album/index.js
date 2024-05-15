"use strict";
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Alishba", "My Typescript Book");
console.log(album1);
const album2 = makeAlbum("Aiza", "My Book");
console.log(album2);
const album3 = makeAlbum("Alishba", " My First Book", 14);
console.log(album3);
