import express from 'express'
import config from  'config'
import mongoose from 'mongoose'

const app = express()

const PORT = config.get('port') || 5000

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'))
    } catch (e) {
        console.log('Server error', e.measure)
        process.exit(1)
    }
}

start();

app.listen(PORT, () => console.log(`started... on port ${PORT}`))


