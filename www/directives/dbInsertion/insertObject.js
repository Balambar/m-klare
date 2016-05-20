app.directive('insertObject', [function(){

  return {
    controller: ['$scope','Home' ,'Seller', function($scope, Home, Seller) {

      //array of possible adresses
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
          //array of possible areas
          areas = [
            'Kirseberg',
            'Dalaplan',
            'Limhamn',
            'Rosengård',
            'Centrum'
          ],
          //array of possible types
          types =['Lägenhet', 'Villor'],
          //array of possible sizes
          sizes = [40, 50, 55, 60, 75, 100, 120, 125, 130, 150, 200, 800, 1000, 1500, 2000],
          //array of possible number of rooms
          rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50],
          //array of possible number of toilets
          toilets =[1, 2, 3, 4, 5],
          //either there is a garden or there isnt one
          garden = [true, false],
          //either there is a balcony or there isnt one
          balcony =[true, false],
          //array of possible prices
          prices = [50, 200000, 500000, 800000, 1000000, 1500000, 2000000, 2450000, 5000000, 100000000],
          //array of possible images for houses
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
          //array of possible images for appartements
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
          //array of possible interior images
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
          //array of possible sellers, we get this from our database
          sellers = [] = Seller.get();

        //function that return one item in an array
        function getRandomItem(arr){
          //uses the length of the array used as the maximum number
          return arr[Math.floor(Math.random()*arr.length)];
        }

        //Since we only want to add our dummydata to the database if its already empty,
        //we need to check wheter or not it already contains some data.
        //load from DB (GET)
        Home.get(function(x){
          //if it has a length (if its not empty), we do nothing.
          if(x.length){
            return;
          }
          //but if it is empty (has no length)
          else{
            //we call our init!
            init(500);
          }
        });

        //init function, used to create dummydata, takes a itterations argument
        //that determines how many posts it will create
        function init(itterations){

        //loop through the specified number of itterations
        for (var i = 0; i < itterations; i++) {

          //since the exterior image is depending on the type, we set this first
          var t = getRandomItem(types),
              extImg = null;

          //if the type is an appartement, choose a random image from the appartement array
          if(t === 'Lägenhet'){
            extImg = getRandomItem(frontImagesL);
          //else choose a random image from the house array
          } else {
            extImg = getRandomItem(frontImagesH);
          }

          //in each itteration, we want to create a new object and store it in the DB
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