'use strict';
module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },{
        classMethods: {
            associate: function(models){
                //we can define associations here
            }
        }
    });
    return Users;
};