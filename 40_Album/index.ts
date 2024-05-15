function makeAlbum(artist:string, title:string, tracks?:number){
    const album: {artist:string, title:string, tracks?:number} = {
        artist: artist,
        title: title
    }
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album;
}
const album1 = makeAlbum("Alishba", "My Typescript Book")
console.log(album1);

const album2 = makeAlbum("Aiza", "My Book")
console.log(album2);

const album3 = makeAlbum("Alishba", " My First Book", 14);
console.log(album3);
