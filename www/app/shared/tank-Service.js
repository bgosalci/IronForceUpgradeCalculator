angular.module('myApp.tankService', [])
    .factory('tankService', [
        function () {
            var self = this;
            self.calculateTotalTime = function (tank) {
                var totalTime, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalTime = calculateTotalValues(tank, items, 'calcTime');
                return totalTime;
            };
            self.calculateTotalPrice = function (tank) {
                var totalPrice, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalPrice = calculateTotalValues(tank, items, 'price');
                return totalPrice;
            };
            self.calculateTotalDiamonds = function (tank) {
                var totalDiamonds, items;
                items = ['turret', 'barrel', 'armor', 'engine', 'trucks'];
                totalDiamonds = calculateTotalValues(tank, items, 'diamonds');
                return totalDiamonds;
            };
            self.calculateTotalAttack = function (tank) {
                var items, totalAttack;
                items = ['turret', 'barrel'];
                totalAttack = calculateTotalValues(tank, items, 'attack');
                return totalAttack;
            };
            self.calculateTotalFireSpeed = function (tank) {
                var items, totalFireSpeed;
                items = ['turret', 'barrel'];
                totalFireSpeed = calculateTotalValues(tank, items, 'fireSpeed');
                return totalFireSpeed;
            };
            self.calculateTotalArmor = function (tank) {
                var items, totalArmor;
                items = ['armor', 'trucks'];
                totalArmor = calculateTotalValues(tank, items, 'armor');
                return totalArmor;
            };
            self.calculateTotalMovement = function (tank) {
                var items, totalMovement;
                items = ['engine', 'trucks'];
                totalMovement = calculateTotalValues(tank, items, 'movement');
                return totalMovement;
            };
            self.formatTotalTime = function (time) {
                var day, hour, minute, totDays, totHours, totMinutes, returnValue;
                day = 86400; //Seconds per day
                hour = 3600; //Seconds per hour
                minute = 60; //Seconds per minute
                totDays = 0;
                totHours = 0;
                totMinutes = 0;
                //Get days
                if (time >= day) {
                    totDays = Math.floor(time / day);
                    time -= totDays * day;
                }
                //Get hours
                if (time >= hour) {
                    totHours = Math.floor(time / hour) % 24;
                    time -= totHours * hour;
                }
                //Get minutes
                if (time >= minute) {
                    totMinutes = Math.floor(time / minute) % 60;
                }
                returnValue =  (totDays > 0) ? totDays + 'd ' : '';
                returnValue += (totHours > 0) ? totHours + 'h ' : '';
                returnValue += (totMinutes > 0) ? totMinutes + 'm' : '';
                return returnValue;
            };
            self.getInitialValue = function (tankName, data, property) {
                var i, returnValue, tank;
                returnValue = 0;
                for (i = 0; i < data.length; i += 1) {
                    tank = data[i];
                    if (tank.name == tankName) {
                        returnValue = tank.basicInfo[property];
                        break;
                    }
                }
                return returnValue;
            };
            function calculateTotalValues(tank, items, property) {
                var i, y, totalValue, row, item;
                totalValue = 0;
                for (i = 0; i < items.length; i += 1) {
                    item = tank[items[i]];
                    for (y = 0; y < item.length; y += 1) {
                        row = item[y];
                        totalValue += row[property];
                    }
                }
                return totalValue;
            }
            return self;
        }
    ]);