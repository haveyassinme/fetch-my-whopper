// Import express
import express from "express"
// Create an express application
const app = express()

import readline from "readline"
import fetch from "node-fetch"

// Import body-parser
import bodyParser from "body-parser"
// Import the function to fetch the whopper
import { fetchWhopper } from "./burger-king/index.js"

// Define the port the application will run on
const PORT = 4000

// Use body-parser to get data from the request body
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
app.use(bodyParser.json())

// Create a POST route for the whopper
app.post("/whopper", async (req, res) => {
	// Fetch the whopper
	const whopper = await fetchWhopper(
		req.body.storeNumber,
		req.body.date,
		req.body.time
	)
	// Send the whopper back as a response
	res.status(200).send(whopper)
})

// Start the server
app.listen(PORT, () => {
	console.log("You can now fetch your free whopper")
})

//prompt use to enter store number
//prompt user to enter date
//prompt user to enter time
//fetch whopper

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

//wait 1 second before prompting user
setTimeout(() => {
	// console.log("Welcome to the Whopper Fetcher")
	rl.question("Enter store number: ", storeNumber => {
		rl.question("Enter date (YYYY-MM-DD): ", date => {
			rl.question("Enter time (HH:MM): ", async time => {
				const response = await fetch("http://localhost:4000/whopper", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						storeNumber,
						date,
						time
					})
				})
				const whopper = await response.json()
				console.log(whopper)
				rl.close()
			})
		})
	})
}, 1000)
