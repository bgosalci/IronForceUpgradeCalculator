'use strict';
angular.module('myApp.dataProviderNew', [])
    .factory('dataProviderNew', ['TANK_MODELS', 'UPGRADE_MAP', 'SUPER_UPGRADE_MAP',
        function (TANK_MODELS, UPGRADE_MAP, SUPER_UPGRADE_MAP) {
            var self= this;
            self.getTankList = function () {
                var returnValue, i, len, tank, imageName, tempName;
                returnValue = [];
                len = TANK_MODELS.length;
                for (i = 0; i < len; i += 1) {
                    tank = TANK_MODELS[i];
                    if (tank.calculations.isSuperTank) {
                        tempName = tank.modelName.replace(" ", "_");
                        imageName = 'tank/' + tempName + '.png';
                    } else {
                        imageName = 'tank/' + tank.modelName + '.png';
                    }
                    returnValue.push({
                        name:       tank.modelName,
                        tier:       tank.tier,
                        price:      tank.price,
                        payType:    tank.priceType,
                        image:      tank.image,
                        basicInfo: {
                            attack:     tank.basicInfo.attack,
                            armor:      tank.basicInfo.armor,
                            fireSpeed:  tank.basicInfo.fireSpeed,
                            movement:   tank.basicInfo.movement
                        },
                        calculations:        {
                            armor:        tank.calculations.armor,
                            attack:       tank.calculations.attack,
                            movement:     tank.calculations.movement,
                            fireSpeed:    tank.calculations.fireSpeed,
                            upgradeTime:  tank.calculations.upgradeTime,
                            upgradePrice: tank.calculations.upgradePrice,
                            combat:       tank.calculations.combat,
                            fire:         tank.calculations.fire,
                            isSuperTank:  tank.calculations.isSuperTank
                        },
                        modelId:             tank.modelId,
                        linkedModelId:       tank.linkedModelId,
                        serialNumber:        tank.serialNumber,
                        rankRequired:        tank.rankRequired,
                        levels:              tank.levels,
                        groupId:             tank.groupId,
                        combatEffectiveness: tank.combatEffectiveness
                    });
                }
                return returnValue;
            };
            self.getTankStats = function (tank) {

            };
            return self;
        }
    ]);