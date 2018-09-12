let myApp = angular.module('FoodApp', []) 

console.log('Hello');


myApp.controller('FoodController', function() {

    let self = this;

    self.message='Enter Your Food!';

    self.food = [
       'Burgers',
       'Salads',
       'Tacos'
    ];

    self.greet = function(){ 
        console.log('Hello', self.food); 
        self.food.push(self.input);
    
    }
    
    self.input = '';
 
   
});