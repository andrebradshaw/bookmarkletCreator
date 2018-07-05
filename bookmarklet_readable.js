async function f(){

let codestr = await prompt("Paste your JavaScript code here");

let encd = await 'javascript:(function()%7B'+encodeURIComponent(codestr.replace(/\/\/.+?\n/g, ''))+'%7D)()';

var createDiv = document.createElement("div");
createDiv.setAttribute("id", "popup_win");
document.body.appendChild(createDiv);
createDiv.style.display = "inline-block";
createDiv.style.position = "fixed";
createDiv.style.top = "200px";
createDiv.style.left = "50%";
createDiv.style.width = "43%";
createDiv.style.height = "65%";
createDiv.style.border = "1px solid DarkSlateGrey ";
createDiv.style.background = "DarkSlateGrey";
createDiv.style.borderRadius = "1em";
createDiv.style.padding = "3px";
createDiv.style.zIndex = "10000"; 

var closebtn = document.createElement("button");
document.getElementById("popup_win").appendChild(closebtn);
closebtn.setAttribute("id", "btn_closed");
document.getElementById("btn_closed").innerText = "+";
closebtn.style.position = "absolute";
closebtn.style.background = "transparent";
closebtn.style.display = "block";
closebtn.style.transform = "scale(2.9, 2.9) rotate(-45deg)";
closebtn.style.borderRadius = "1em";
closebtn.style.padding = "1px";
closebtn.style.boxShadow = "1px";
closebtn.style.border = "1px";
closebtn.style.userSelect = "none";
closebtn.style.color = "white";

var txtarea = document.createElement("textarea");
document.getElementById("popup_win").appendChild(txtarea);
txtarea.setAttribute("id", "txt_in");
document.getElementById("txt_in").value = encd;
txtarea.style.bottom = "100px";
txtarea.style.display = "block";
  txtarea.style.width = "100%";
  txtarea.style.height = "90%";
  txtarea.style.padding = "6px";
  txtarea.style.border = "1px solid DarkSlateGrey";
  txtarea.style.background = "white";
  txtarea.style.borderRadius = "1em";

function close() {
  document.body.removeChild(document.getElementById("popup_win"));
}
	document.getElementById("btn_closed").addEventListener("click", close);

}

f();
