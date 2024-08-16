function show_result() {
  let Khmer = parseFloat(document.getElementById("Khmer").value);
  let Math = parseFloat(document.getElementById("Math").value);
  let Physics = parseFloat(document.getElementById("Physics").value);
  let Chemistry = parseFloat(document.getElementById("Chemistry").value);
  let Biology = parseFloat(document.getElementById("Biology").value);
  let lll = parseFloat(document.getElementById("lll").value);
  let english = parseFloat(document.getElementById("english").value);
  let total =
    Khmer + Math + Physics + Chemistry + Biology + Biology + (english - 25);
  document.getElementById("total").innerText = total;
  let mention;
  if (total >= 427 && total <= 475) {
    mention = "A";
  } else if (total >= 380 && total <= 426) {
    mention = "B";
  } else if (total >= 332 && total <= 379) {
    mention = "C";
  } else if (total >= 286 && total <= 331) {
    mention = "D";
  } else if (total >= 237 && total <= 285) {
    mention = "E";
  } else if (total < 237) {
    mention = "F";
  }
  document.getElementById("mention").innerText = mention;
  let result = total >= 237 ? "ជាប់" : "ផ្លាក់";
  document.getElementById("final_result").innerText = result;
}
