// Joseph Green - 10/31/25

let favMonth = prompt("What is your favorite month?");

if (favMonth) {
  favMonth = favMonth.toLowerCase();

  switch (favMonth) {
    case "december":
    case "january":
    case "february":
      console.log("You love the winter months!");
      break;

    case "june":
    case "july":
    case "august":
      console.log("You enjoy the summer months!");
      break;

    case "march":
    case "april":
    case "may":
    case "september":
    case "october":
    case "november":
      console.log("Other months are interesting too!");
      break;

    default:
      console.log("That doesn’t look like a valid month.");
  }
} else {
  console.log("You didn’t enter anything.");
}
