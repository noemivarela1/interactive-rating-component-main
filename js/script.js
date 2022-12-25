function change(id){
    var radio=document.getElementById(id);
    console.log(radio);
    var label=document.getElementById(id+"1");
    var radios=document.getElementsByClassName("radiorate");
    var labels=document.getElementsByClassName("rate");
    for (i=0;i<radios.length;i++){
      console.log(radios[i]);
      if (radios[i]==radio){
        label.style.backgroundColor="hsl(217, 12%, 63%)";
        label.style.color="hsl(0, 0%, 100%)";
        var select=document.getElementById("select");
        select.textContent=i+1;
      }else{
        labels[i].style.backgroundColor="hsl(216, 12%, 20%)";
      }
    }
    var btn=document.getElementById("submit");
    btn.disabled=false;
  }
  function changeArticle(event){
    event.preventDefault();
    var article1=document.getElementById("rating");
    var article2=document.getElementById("thanking");
    
    article2.style.display="flex";
    article1.style.display="none";
    console.log(article1);
  }