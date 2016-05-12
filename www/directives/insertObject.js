app.directive('insertObject', [function(){

  return {
    templateUrl: '/directives/insertObject.html',
    controller: ['$scope','Home' ,'Seller', function($scope, Home, Seller) {

      Home.get(function(x){
        if(x.length)return;

        function returnObject(){
          var randomNumber = Math.floor(Math.random() * 20) + 0 ;
           return {
                "name" : "int" + randomNumber,
                "url" : "imgs/objekt/int/" + randomNumber +".jpg"
              }
        }

        var allSellers;
        Seller.get(function(data){
          allSellers = data;
          init();
        });


        function getNumber(number){
          return allSellers[number];
        }
        

        function init(){

          Home.create([
          {
            "address": "Hammarvägen 95",
            "area" : "Kirseberg",
            "type" : "Villor",
            "size" : 100,
            "rooms" : 7,
            "toilets" : 2,
            "garden" : true,
            "balcony" : true,
            "price" : 2000000,
            "img" : [
              {
                "name" : "hus1",
                "url" : "imgs/objekt/ext/hus1.jpg"
              },
              returnObject(),
              returnObject(),
              returnObject(),
              returnObject(),
              returnObject()
            ],
            "seller" : getNumber(4)
          },

          {
            "address": "Skärpinge 84",
            "area" : "Dalaplan",
            "type" : "Villor",
            "size" : 600,
            "rooms" : 12,
            "toilets" : 5,
            "garden" : true,
            "balcony" : true,
            "price" : 12000000,
            "img" : [
              {
                "name" : "hus2",
                "url" : "imgs/objekt/ext/hus2.jpg"
              },
returnObject(),
              returnObject(),
              returnObject(),
              returnObject(),
              returnObject()
            ],
            "seller" : getNumber(3)
          },

          {
            "address": "Gökst 4",
            "area" : "Limhamn",
            "type" : "Villor",
            "size" : 56,
            "rooms" : 5,
            "toilets" : 2,
            "garden" : false,
            "balcony" : false,
            "price" : 4000000,
            "img" : [
              {
                "name" : "hus3",
                "url" : "imgs/objekt/ext/hus3.jpg"
              },
              returnObject(),
              returnObject(),
              returnObject(),
              returnObject(),
              returnObject()
            ],
            "seller" : getNumber(7)
          },

          {
            "address": "Luddingsbo Mekanikusv 11",
            "area" : "Rosengård",
            "type" : "Villor",
            "size" : 300,
            "rooms" : 9,
            "toilets" : 3,
            "garden" : true,
            "balcony" : true,
            "price" : 6400000,
            "img" : [{
              "name" : "hus4",
              "url" : "imgs/objekt/ext/hus4.jpg"
            }
            ],
            "seller" : getNumber(2)
          },

          {
            "address": "Sandlyckan 59",
            "area" : "Centrum",
            "type" : "Villor",
            "size" : 450,
            "rooms" : 7,
            "toilets" : 3,
            "garden" : false,
            "balcony" : false,
            "price" : 467000,
            "img" : [{
              "name" : "hus5",
              "url" : "imgs/objekt/ext/hus5.jpg"
            }
            ],
            "seller" : getNumber(0)
          },

          {
            "address": "Messlingen 26",
            "area" : "Kirseberg",
            "type" : "Villor",
            "size" : 400,
            "rooms" : 10,
            "toilets" : 2,
            "garden" : true,
            "balcony" : false,
            "price" : 5456700,
            "img" : [{
              "name" : "hus6",
              "url" : "imgs/objekt/ext/hus6.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(5)
          },

          {
            "address": "Skolspåret 39",
            "area" : "Limhamn",
            "type" : "Villor",
            "size" : 1200,
            "rooms" : 12,
            "toilets" : 4,
            "garden" : true,
            "balcony" : true,
            "price" : 1150000,
            "img" : [{
              "name" : "hus7",
              "url" : "imgs/objekt/ext/hus7.jpg"
            }
            ],
            "seller" : getNumber(1)
          },

          {
            "address": "Anders Sadelmakares Gränd 57",
            "area" : "Dalaplan",
            "type" : "Villor",
            "size" : 400,
            "rooms" : 9,
            "toilets" : 3,
            "garden" : true,
            "balcony" : false,
            "price" : 12950000,
            "img" : [{
              "name" : "hus8",
              "url" : "imgs/objekt/ext/hus8.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(6)
          },

          {
            "address": "Barkargatan 39",
            "area" : "Rosengård",
            "type" : "Villor",
            "size" : 350,
            "rooms" : 8,
            "toilets" : 3,
            "garden" : true,
            "balcony" : false,
            "price" : 3400000,
            "img" : [{
              "name" : "hus9",
              "url" : "imgs/objekt/ext/hus9.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(3)
          },

          {
            "address": "Kaptensgränd 71",
            "area" : "Kirseberg",
            "type" : "Villor",
            "size" : 346,
            "rooms" : 10,
            "toilets" : 3,
            "garden" : true,
            "balcony" : true,
            "price" : 6456000,
            "img" : [{
              "name" : "hus10",
              "url" : "imgs/objekt/ext/hus10.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(7)
          },

          {
            "address": "Kantorsvägen 29",
            "area" : "Limhamn",
            "type" : "Villor",
            "size" : 500,
            "rooms" : 13,
            "toilets" : 4,
            "garden" : true,
            "balcony" : true,
            "price" : 20000000,
            "img" : [{
              "name" : "hus11",
              "url" : "imgs/objekt/ext/hus11.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(0)
          },

          {
            "address": "Hagagatan 24",
            "area" : "Centrum",
            "type" : "Villor",
            "size" : 300,
            "rooms" : 7,
            "toilets" : 3,
            "garden" : false,
            "balcony" : true,
            "price" : 6450500,
            "img" : [{
              "name" : "hus12",
              "url" : "imgs/objekt/ext/hus12.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(3)
          },

          {
            "address": "Klubbvägen 58",
            "area" : "Dalaplan",
            "type" : "Villor",
            "size" : 345,
            "rooms" : 10,
            "toilets" : 4,
            "garden" : true,
            "balcony" : true,
            "price" : 3456789,
            "img" : [{
              "name" : "hus13",
              "url" : "imgs/objekt/ext/hus13.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(2)
          },

          {
            "address": "Loftaheden 86",
            "area" : "Rosengård",
            "type" : "Villor",
            "size" : 345,
            "rooms" : 5,
            "toilets" : 2,
            "garden" : true,
            "balcony" : false,
            "price" : 3456000,
            "img" : [{
              "name" : "hus14",
              "url" : "imgs/objekt/ext/hus14.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(4)
          },

          {
            "address": "Dyvik 32",
            "area" : "Rosengård",
            "type" : "Villor",
            "size" : 300,
            "rooms" : 6,
            "toilets" : 4,
            "garden" : true,
            "balcony" : false,
            "price" : 2340200,
            "img" : [{
              "name" : "hus15",
              "url" : "imgs/objekt/ext/hus15.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(5)
          },

          {
            "address": "Gamla Svedalavägen 12",
            "area" : "Centrum",
            "type" : "Villor",
            "size" : 345,
            "rooms" : 10,
            "toilets" : 5,
            "garden" : false,
            "balcony" : true,
            "price" : 3000000,
            "img" : [{
              "name" : "hus16",
              "url" : "imgs/objekt/ext/hus16.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(1)
          },

          {
            "address": "Djursbo 20",
            "area" : "Limhamn",
            "type" : "Villor",
            "size" : 500,
            "rooms" : 7,
            "toilets" : 2,
            "garden" : true,
            "balcony" : false,
            "price" : 4545000,
            "img" : [{
              "name" : "hus17",
              "url" : "imgs/objekt/ext/hus17.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(6)
          },

          {
            "address": "Löberöd 69",
            "area" : "Dalaplan",
            "type" : "Lägenhet",
            "size" : 50,
            "rooms" : 2,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 1250000,
            "img" : [{
              "name" : "lagenhet1",
              "url" : "imgs/objekt/ext/lag1.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(6)
          },

          {
            "address": "Nittsjö Kvarngatu 5",
            "area" : "Centrum",
            "type" : "Lägenhet",
            "size" : 100,
            "rooms" : 4,
            "toilets" : 2,
            "garden" : true,
            "balcony" : true,
            "price" : 2550000,
            "img" : [{
              "name" : "lagenhet2",
              "url" : "imgs/objekt/ext/lag2.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(1)
          },

          {
            "address": "Överhogdal 39",
            "area" : "Limhamn",
            "type" : "Lägenhet",
            "size" : 140,
            "rooms" : 5,
            "toilets" : 2,
            "garden" : true,
            "balcony" : false,
            "price" : 3200000,
            "img" : [{
              "name" : "lagenhet3",
              "url" : "imgs/objekt/ext/lag3.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(5)
          },

          {
            "address": "Vansövägen 81",
            "area" : "Kirseberg",
            "type" : "Lägenhet",
            "size" : 140,
            "rooms" : 5,
            "toilets" : 2,
            "garden" : false,
            "balcony" : false,
            "price" : 3500000,
            "img" : [{
              "name" : "lagenhet4",
              "url" : "imgs/objekt/ext/lag4.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(7)
          },

          {
            "address": "Kantorsvägen 10",
            "area" : "Rosengård",
            "type" : "Lägenhet",
            "size" : 30,
            "rooms" : 2,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 1900000,
            "img" : [{
              "name" : "lagenhet5",
              "url" : "imgs/objekt/ext/lag5.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(0)
          },

          {
            "address": "Bottna Knutsgård 97",
            "area" : "Limhamn",
            "type" : "Lägenhet",
            "size" : 90,
            "rooms" : 4,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 2450000,
            "img" : [{
              "name" : "lagenhet6",
              "url" : "imgs/objekt/ext/lag6.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(2)
          },

          {
            "address": "Lillesäter 59",
            "area" : "Dalaplan",
            "type" : "Lägenhet",
            "size" : 60,
            "rooms" : 2,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 2300300,
            "img" : [{
              "name" : "lagenhet7",
              "url" : "imgs/objekt/ext/lag7.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(4)
          },

          {
            "address": "Gamla Svedalavägen 77",
            "area" : "Centrum",
            "type" : "Lägenhet",
            "size" : 200,
            "rooms" : 9,
            "toilets" : 3,
            "garden" : true,
            "balcony" : true,
            "price" : 4356345,
            "img" : [{
              "name" : "lagenhet8",
              "url" : "imgs/objekt/ext/lag8.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(2)
          },

          {
            "address": "Korsträsk 57",
            "area" : "Limhamn",
            "type" : "Lägenhet",
            "size" : 150,
            "rooms" : 7,
            "toilets" : 2,
            "garden" : false,
            "balcony" : false,
            "price" : 2900400,
            "img" : [{
              "name" : "lagenhet9",
              "url" : "imgs/objekt/ext/lag9.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(4)
          },

          {
            "address": "Västra Husby Häggetorp 38",
            "area" : "Kirseberg",
            "type" : "Lägenhet",
            "size" : 80,
            "rooms" : 5,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 2560800,
            "img" : [{
              "name" : "lagenhet10",
              "url" : "imgs/objekt/ext/lag10.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(3)
          },

          {
            "address": "Gulleråsen Västabäcksgatu 99",
            "area" : "Dalaplan",
            "type" : "Lägenhet",
            "size" : 59,
            "rooms" : 2,
            "toilets" : 1,
            "garden" : false,
            "balcony" : true,
            "price" : 2100500,
            "img" : [{
              "name" : "lagenhet11",
              "url" : "imgs/objekt/ext/lag11.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(0)
          },

          {
            "address": "Lillesäter 73",
            "area" : "Rosengård",
            "type" : "Lägenhet",
            "size" : 30,
            "rooms" : 1,
            "toilets" : 1,
            "garden" : false,
            "balcony" : false,
            "price" : 1900500,
            "img" : [{
              "name" : "lagenhet12",
              "url" : "imgs/objekt/ext/lag12.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(7)
          },

          {
            "address": "Violvägen 78",
            "area" : "Dalaplan",
            "type" : "Lägenhet",
            "size" : 70,
            "rooms" : 3,
            "toilets" : 1,
            "garden" : true,
            "balcony" : false,
            "price" : 21450456,
            "img" : [{
              "name" : "lagenhet13",
              "url" : "imgs/objekt/ext/lag13.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(5)
          },

          {
            "address": "Fuglie 8",
            "area" : "Centrum",
            "type" : "Lägenhet",
            "size" : 110,
            "rooms" : 4,
            "toilets" : 1,
            "garden" : false,
            "balcony" : true,
            "price" : 2345630,
            "img" : [{
              "name" : "lagenhet14",
              "url" : "imgs/objekt/ext/lag14.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(6)
          },

          {
            "address": "Västerviksgatan 50",
            "area" : "Dalaplan",
            "type" : "Lägenhet",
            "size" : 69,
            "rooms" : 3,
            "toilets" : 1,
            "garden" : true,
            "balcony" : false,
            "price" : 2340010,
            "img" : [{
              "name" : "lagenhet15",
              "url" : "imgs/objekt/ext/lag15.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(1)
          },

          {
            "address": "Granträsk 9",
            "area" : "Rosengård",
            "type" : "Lägenhet",
            "size" : 100,
            "rooms" : 4,
            "toilets" : 1,
            "garden" : false,
            "balcony" : true,
            "price" : 3000000,
            "img" : [{
              "name" : "lagenhet16",
              "url" : "imgs/objekt/ext/lag16.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(7)
          },
          
          {
            "address": "Enbackagården 9",
            "area" : "Limhamn",
            "type" : "Lägenhet",
            "size" : 130,
            "rooms" : 6,
            "toilets" : 1,
            "garden" : true,
            "balcony" : true,
            "price" : 3890500,
            "img" : [{
              "name" : "lagenhet17",
              "url" : "imgs/objekt/ext/lag17.jpg"
            },
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject(),
            returnObject()
            ],
            "seller" : getNumber(0)
          }

          ]);
}
});

}]
};
}]);