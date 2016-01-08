appusers = new Mongo.Collection('appusers');

appusers.atttachSchema(new SimpleSchema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
}))