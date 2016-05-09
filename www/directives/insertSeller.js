app.directive('insertSeller', [function(){

  return {
    templateUrl: '/directives/insertSeller.html',
    controller: ['$scope','Seller' ,'$interval', function($scope, Seller, $interval) {
      
      Seller.get(function(x){
        if(x.length)return;
        Seller.create([
        {
          "name": "Maria",
          "position": "Mäklare",
          "phone" : 456123789,
          "email" : "Maria@maklare.se",
          "about" : "Jag heter Maria och jag är fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild2.png"
        },
        {
          "name": "Anna ",
          "position": "Mäklare",
          "phone" : 456123789,
          "email" : "Anna@maklare.se",
          "about" : "xxxxx",
          "img" : "imgs/sellers/bild4.png"
        },
        {
          "name": "Evangelina",
          "position": "Mäklare",
          "phone" : 456123789,
          "email" : "Evangelina@maklare.se",
          "about" : "Jag heter Evangelina och jag är fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild3.png"
        },
        {
          "name": "Katte",
          "position": " REG MÄKLARE",
          "phone" : 564963456,
          "email" : "Katte@maklare.se",
          "about" : "xxxxx",
          "img" : "imgs/sellers/bild5.png"
        },
        {
          "name": "Fatima",
          "position": "Mäklare",
          "phone" : 456123789,
          "email" : "Fatima@maklare.se",
          "about" : "Jag heter Fatima och jag är fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild1.png"
        },
        {
          "name": "Lina",
          "position": "Mäklare",
          "phone" : 365987123,
          "email" : "Lina@maklare.se",
          "about" : "Jag heter Lina och jag är fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild8.png"
        },
        {
          "name": "Jacob",
          "position": "REG MÄKLARE",
          "phone" : 365987123,
          "email" : "Jacob@maklare.se",
          "about" : "Jag heter Jakob och jag är reg. fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild7.png"
        },
        {
          "name": "Mark",
          "position": "REG MÄKLARE",
          "phone" : 365987123,
          "email" : "Mark@maklare.se",
          "about" : "Jag heter Mark och jag är reg. fastighetsmäklare på DYHR & RUMSON. Jag är högskoleutbildad, ansvarsförsäkrad och registrerad hos FMI. Kontakta mig så tar vi tillsammans fram det upplägg som fungerar bäst för just dig och din bostad!",
          "img" : "imgs/sellers/bild6.png"
         }
        
      ]);
    });

    }]
  };
}]);