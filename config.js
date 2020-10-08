module.exports = {
    "development": {
        "username": "admin",
        "password": "password",
        "database": "test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "port": 3306,
        "logQueryParameters" : true
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
