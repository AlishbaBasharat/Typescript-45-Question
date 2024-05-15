let GuestList: string[] = ["Fiza", "Urooj", "Alishba"];
// for (let i = 0; i < GuestList.length; i++) {
//   console.log(
//     "Dear Friend." +
//       GuestList[i] +
//       ',\n\nIts is pleasure to invite you own our party.\n\nThank you!\n\n'
//   );
// }
let absentGuest: string= "Urooj";
let newGuest: string= "Zermeen";
GuestList[0] = newGuest;
// for (let i = 0; i < GuestList.length; i++) {
//     console.log(
//       "Dear Friend." +
//         GuestList[i] +
//         ',\n\nIts is pleasure to invite you own our party.\n\nThank you!\n\n'
//     );
//   }
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
  console.log('\nSorry Mr. We cannot arrange big table Only two people invited ');

  while(GuestList.length > 2){
    let removedGuest = GuestList.pop();
    console.log(`Sorry Mr. ${ removedGuest } you are not invited`);
  }
  for (let i = 0; i < GuestList.length; i++) {
    console.log(
      "Dear Friend." +
        GuestList[i] +
        ',\n\nYou are still invited in our party.\n\nThank you!\n\n'
    );
  }
  GuestList.splice(0 , 2);
  console.log(GuestList);
// exercse 19

  console.log(`\nTotal number of our guests: ${GuestList.length}`);
  
  
