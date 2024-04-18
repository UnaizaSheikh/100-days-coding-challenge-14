//make a function takes first 10 characters from text
function extractFirstTenChars(text: string): string {
  return text.substring(0, 10);
}
//by using substring()
console.log(extractFirstTenChars("Hello,javascript world!"));
