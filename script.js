const svg = document.getElementById('inject1');
svg.addEventListener('click', showParagraph);
function showParagraph() {
    const paragraphElement = document.getElementById('yourParagraphId');
    paragraphElement.style.display = 'block';
  }



  
let crNUM = 1845;
let i = prompt("enter password")
i= parseInt(i)
while (i != crNUM) {
    i = prompt("enter password")
    console.log("try again");
    
}
alert("Congratulations  !!!...")
