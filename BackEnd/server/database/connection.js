const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || "mongodb+srv://brice:rochet@cluster1.nrls1mx.mongodb.net/?retryWrites=true&w=majority"
// "mongodb://localhost/argentBankDB" ligne 3 et 8 et j'ai rajouter , useUnifiedTopology: true 

module.exports = async () => {
  try {
    await mongoose.connect("mongodb+srv://brice:rochet@cluster1.nrls1mx.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
