module.exports = {
    port:           process.env.PORT            ||	3000,
    mongodb:        process.env.MONGODB         || 	"mongodb://localhost:27017/users",
    TOKEN_SECRET:   process.env.TOKEN_SECRET    || 	"superappconnhodhejhs"
}