const app: HTMLElement = document.getElementById("app");
app.innerHTML = `<h1><a href="https://codelex.io" target="_blank">CODELEX</a></h1>`;

(async () => {
  const path = window.location.pathname;
  const exercise = path.replace("/", "");
  switch (exercise) {
    case "00":
      await import("./src/00-hello-world");
      break;
    case "04":
      await import("./src/04-logic-error");
      break;
    case "05":
      await import("./src/05-boolean");
      break;
    case "06":
      await import("./src/06-logic-error");
      break;
    case "07":
      await import("./src/07-logic-error");
      break;
    case "08":
      await import("./src/08-function-output");
      break;
    case "09":
      await import("./src/09-logic-error");
      break;
    case "10":
      await import("./src/10-function-output");
      break;
    case "11":
      await import("./src/11-function-output");
      break;
    case "12":
      await import("./src/12-tax");
      break;
    case "13":
      await import("./src/13-truncate-string");
      break;
    case "14":
      await import("./src/14-format-currency");
      break;
    case "15":
      await import("./src/15-currency-conversion");
      break;
    case "16":
      await import("./src/16-currency-conversion");
      break;
    case "17":
      await import("./src/17-validation");
      break;
    case "18":
      await import("./src/18-sort");
      break;
    case "19":
      await import("./src/19-indexOf");
      break;
    case "20":
      await import("./src/20-slice");
      break;
    case "21":
      await import("./src/21-objects");
      break;
    case "22":
      await import("./src/22-array-odd-even");
      break;
    case "23":
      await import("./src/23-book-titles");
      break;
    case "24":
      await import("./src/24-calculator");
      break;
    case "25":
      await import("./src/25-circle");
      break;
    case "26":
      await import("./src/26-draw-triangle");
      break;
    case "27":
      await import("./src/27-full-name");
      break;
    case "28":
      await import("./src/28-greatest-number");
      break;
    case "29":
      await import("./src/29-is-blank");
      break;
    case "30":
      await import("./src/30-looping-with-conditions");
      break;
    case "31":
      await import("./src/31-sum-all");
      break;
    case "32":
      await import("./src/32-min-max");
      break;
    case "34":
      await import("./src/34-multiply-map");
      break;
    case "35":
      await import("./src/35-protect-email");
      break;
    case "36":
      await import("./src/36-pythagorean-theorem");
      break;
    case "37":
      await import("./src/37-reading-status");
      break;
    case "38":
      await import("./src/38-remove-from-array");
      break;
    case "39":
      await import("./src/39-repeat-string");
      break;
    case "40":
      await import("./src/40-string-occurences");
      break;
    case "41":
      await import("./src/41-string-to-array");
      break;
    case "42":
      await import("./src/42-map");
      break;
    default:
      throw new Error(`Could not find exercise by path '${exercise}'`);
  }
})();
