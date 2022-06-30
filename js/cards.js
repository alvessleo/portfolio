var year = ["2022", "2021", "2022"]

var titleArray =["SOURCE NUTRITION - site web direcionado para a venda de suplementos naturais", "OMNIA SCIRE - site web com oferta de cursos online",
 "HEMOBANK - site web para doação de sangue"];

 

var dynamic = document.querySelector('.container-cards');  
for (var i = 0; i < year.length; i++) {
  var fetch = document.querySelector('.container-cards').innerHTML;  
    dynamic.innerHTML = `<div id="cards${i}" class="card">
      <div class="card-content">
        <label class="label-year">${year[i]}</label>
        <label class="label-title">
          ${titleArray[i]}
        </label>
        
      </div>
    </div>` + fetch ; 
    var bgImg = document.getElementById(`cards${i}`);
    bgImg.style.backgroundImage = `url('img/${titleArray[i]}.jpg')`;
} 