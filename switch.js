// Joseph Green - 10/31/25

let favMonth = prompt("What is your favorite month?");

if (favMonth) {
  favMonth = favMonth.toLowerCase();

  switch (favMonth) {
    case "december":
    case "january":
    case "february":
      prompt("You love the winter months!");
      break;

    case "june":
    case "july":
    case "august":
      prompt("You enjoy the summer months!");
      break;

    case "march":
    case "april":
    case "may":
    case "september":
    case "october":
    case "november":
      prompt("Other months are interesting too!");
      break;

    default:
      prompt("That doesn’t look like a valid month.");
  }
} else {
  console.log("You didn’t enter anything.");
}
