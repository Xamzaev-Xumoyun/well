var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSelect = document.querySelector(".form__select");
var elButton = document.querySelector(".form__button");
var elWellUzs = document.querySelector(".form__select__uzs");
var elWellRub = document.querySelector(".form__select__rub");
var elWellEuro = document.querySelector(".form__select__euro");
var elWellSpan = document.querySelector(".form__span");

// elForm.addEventListener("submit" , function(event){
//     event.preventDefault();

//     var elInputMoney = Number(elInput.value);
//     var elSelectMoney = Number(elSelect.value);





    //  var elWellUzs =(  'som');
    //  var elWellRub =(' rub' );
    //  var elWellEuro =(  'euro' );

//      elSelectMoney = Number(elWellUzs);
//      elSelectMoney = Number(elWellRub);
//      elSelectMoney = Number(elWellEuro);

//     var elWellSpan =   Number(elInputMoney * elWellUzs );
//     var elWellSpan =   Number(elInputMoney * elWellRub  );
//     var elWellSpan =   Number(elInputMoney * elWellEuro );

//     elWellSpan.textContent = (`${elWellSpan} ` );

// });


// elForm.addEventListener("submit" , function(event){
//     event.preventDefault();

//     var elInputMoney = Number(elInput.value);
//     var elSelectMoney = Number(elSelect.value);

//     // var elWellUzs =(  elSelectMoney );
//     // var elWellRub =(  elSelectMoney );
//     // var elWellEuro =(  elSelectMoney );
//     elWellUzs = (10900);
//     elWellRub = (146);
//     elWellEuro = (12273);



//     var elSpan =   Number(elInputMoney * elSelectMoney );


//     elWellSpan.textContent = (`${elSpan}`);
//     console.log(elSpan);
// });

elWellUzs = ("som");
elWellRub = ("rub");
elWellEuro = ("euro")

elForm.addEventListener("submit" , function(event){
    event.preventDefault();
    
    var elInputMoney = Number(elInput.value);
    var elSelectMoney = Number(elSelect.value); 

    var elWellUzs =Number(elInputMoney * elSelectMoney );
    var elWellRub =Number(elInputMoney * elSelectMoney );
    var elWellEuro =Number(elInputMoney * elSelectMoney );

  

    
    var elSpan =  ( Number(elInputMoney * elSelectMoney ));
    


    
    elWellSpan.textContent = (`${elSpan} `);
    console.log(elSpan);
});




