const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();



const app = express();
const port = process.env.PORT || 5000

//middleware

app.use(express.json());
app.use(cors());


//MongoDB


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.tljeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const coffeeCollection = client.db('Coffee_DATABASE').collection('coffee_Coll')


        app.get('/coffee',async(req,res)=>{
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })


        //CREATE DATA IN MONGOdb (INSERT DATA (C))
        app.post('/coffee', async (req, res) => {
            const newCoffee = req.body;
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result)
            console.log(newCoffee)

        })





        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);













app.get('/', (req, res) => {
    res.send('App is Running ....')
})

app.listen(port, () => {
    console.log(`Coffee-server is Running on ${port}`)
})