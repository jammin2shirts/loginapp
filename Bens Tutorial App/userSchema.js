var userSchema = {
    id:         {
        type: 'increments',
        nullable: false,
        primary: true},
    email:      {
        type: 'sting',
        maxlength: 254,
        nullable: false,
        unique: true},
    password:   {
        type: 'string',
        maxlength: 254,
        nullable: false
                }
};

module.exports = userSchema;