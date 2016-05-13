app.directive('insertObject', [function(){

  return {
    templateUrl: '/directives/insertObject.html',
    controller: ['$scope','Home' ,'Seller', function($scope, Home, Seller) {

      var adresses = [
            'Hammarvägen 95', 
            'kärpinge 84', 
            'Gökst 4', 
            'Luddingsbo Mekanikusv 11',
            'Sandlyckan 59',
            'Messlingen 26',
            'Skolspåret 39',
            'Anders Sadelmakares Gränd 57',
            'Barkargatan 39',
            'Kaptensgränd 71',
            'Kanotorsvägen 29',
            'Hagagatan 24',
            'Klubbvägen 58',
            'LoftaHeden 86',
            'Dyvik 32',
            'Gamla Svedalavägen 12',
            'Djursbo 20',
            'Löberöd 69',
            'Nittsjö Kvarngatu 5',
            'Överhogdal 39',
            'Vansövägen 81',
            'Kantorsvägen 10',
            'Bottna Knutsgård 97',
            'Lillesäter 59'
          ],
          areas = [
            'Kirseberg',
            'Dalaplan',
            'Limhamn',
            'Rosengård',
            'Centrum'
          ],
          types =['Lägenhet', 'Villor'],
          sizes = [40, 50, 55, 60, 75, 100, 120, 125, 130, 150, 200, 800, 1000, 1500, 2000],
          rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50],
          toilets =[1, 2, 3, 4, 5],
          garden = [true, false],
          balcony =[true, false],
          prices = [50, 200000, 500000, 800000, 1000000, 1500000, 2000000, 2450000, 5000000, 100000000],
          frontImagesH =[
            'hus1',
            'hus2',
            'hus3',
            'hus4',
            'hus5',
            'hus6',
            'hus7',
            'hus8',
            'hus9',
            'hus10',
            'hus11',
            'hus12',
            'hus13',
            'hus14',
            'hus15',
            'hus16',
            'hus17'
          ],
          frontImagesL =[
            'lag1',
            'lag2',
            'lag3',
            'lag4',
            'lag5',
            'lag6',
            'lag7',
            'lag8',
            'lag9',
            'lag10',
            'lag11',
            'lag12',
            'lag13',
            'lag14',
            'lag15',
            'lag16',
            'lag17' 
          ],
          intImages =[
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20'
          ],
          sellers = [] = Seller.get();

          function getRandomItem(arr){
            return arr[Math.floor(Math.random()*arr.length)];
          }

      Home.get(function(x){
        if(x.length){
          return;
        }
        else{
          init(250);
        }
      });

        
       function init(itterations){

        for (var i = 0; i < itterations; i++) {

          var t = getRandomItem(types);
          var extImg;
          if(t === 'Lägenhet'){
            extImg = getRandomItem(frontImagesL);
          } else {
            extImg = getRandomItem(frontImagesH);
          }
          console.log(t, extImg);
          Home.create([
            {
                "address": getRandomItem(adresses),
                "area" : getRandomItem(areas),
                "type" : t,
                "size" : getRandomItem(sizes),
                "rooms" : getRandomItem(rooms),
                "toilets" : getRandomItem(toilets),
                "garden" : getRandomItem(garden),
                "balcony" : getRandomItem(balcony),
                "price" : getRandomItem(prices),
                "img" : [
                  {
                    "name": "extBild",
                    "url": "imgs/objekt/ext/" + extImg + ".jpg"
                  },
                  {
                    "name": "intBild",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "intBild",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "intBild",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  },
                  {
                    "name": "intBild",
                    "url": "imgs/objekt/int/" + getRandomItem(intImages) + ".jpg"
                  }
                ],
                "seller" :getRandomItem(sellers)._id
              }
         ]);
        }
      }
    }]
  };
}]);