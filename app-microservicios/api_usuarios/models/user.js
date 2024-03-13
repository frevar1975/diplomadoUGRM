

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema({
    username: {type:String, require: true, unique: true},
    password: {type:String, required: true}
});

UserSchema.pre('save', function(next) {
    if(this.isNew || this.isModified('password')){

        const document = this;

        bcrypt.hash(document.password, SALT_ROUNDS, (err, hashPassword) => {
            if(err){
                next(err);
            }else{
                document.password = hashPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback) {

    bcrypt.compare(password, this.password, (err, same) => {
        if(err){
            callback(err);
        }else{
            callback(null, same);
        }
    })
}

module.exports = mongoose.model('User', UserSchema);