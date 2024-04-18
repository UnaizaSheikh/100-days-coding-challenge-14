//create a function
function detectJavascript(text: string): boolean {
  return text.includes("Javascript");
}
//use .includes to find text t/f
console.log(detectJavascript("i love to learn javascript"));
