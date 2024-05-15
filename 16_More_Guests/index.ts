let GuestList: string[] = ["Fiza", "Urooj", "Alishba"];
for (let i = 0; i < GuestList.length; i++) {
  console.log(
    "Dear Friend." +
      GuestList[i] +
      ',\n\nIts is pleasure to invite you own our party.\n\nThank you!\n\n'
  );
}
let absentGuest: string= "Urooj";
let newGuest: string= "Zermeen";
GuestList[0] = newGuest;
for (let i = 0; i < GuestList.length; i++) {
    console.log(
      "Dear Friend." +
        GuestList[i] +
        ',\n\nIts is pleasure to invite you own our party.\n\nThank you!\n\n'
    );
  }
  console.log(`Dear. ${absentGuest} is not coming to our party`);

  console.log(`Good News! We find Big Table so we are inviting three more Guests`);

  GuestList.unshift("Hermain");
  GuestList.splice(2 , 0, 'Maheen');
  GuestList.push("Laraib");
  for (let i = 0; i < GuestList.length; i++) {
    console.log(
      "Dear Friend." +
        GuestList[i] +
        ',\n\nIts is pleasure to invite you own our party.\n\nThank you!\n\n'
    );
  }

  
  
