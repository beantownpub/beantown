import { Kafka } from 'kafkajs'
import { appSecret } from './secrets.js'

// This creates a client instance that is configured to connect to the Kafka broker provided by
const brokers = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || 'jalbot',
  brokers: [appSecret.kafka_bootstrap_server],
  ssl: true,
  sasl: {
    mechanism: 'plain', // scram-sha-256 or scram-sha-512
    username: appSecret.kafka_username,
    password: appSecret.kafka_password
  }
})

async function sendToStream(producer, topic, key, data) {
  try {
    await producer.connect()
    const responses = await producer.send({
      topic: topic,
      messages: [{
        // Name of the published package as key, to make sure that we process events in order
        key: key,
        // The message value is just bytes to Kafka, so we need to serialize our JavaScript
        // object to a JSON string. Other serialization methods like Avro are available.
        value: JSON.stringify({ data })
      }]
    })
    // console.log('Published message', { responses })
  } catch (error) {
    console.error('Error publishing message', error)
  }
}

export { brokers, sendToStream }
