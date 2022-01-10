const app = require('express')()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

const razorpay = new Razorpay({
	key_id:"rzp_test_jh8Fz6uQP6Sgc4",
	key_secret:"ntodD3BozhFm1IhEv1AVgB15",
})

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo.svg'))
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 69
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

app.listen(1337, () => {
	console.log('Listening on 1337')
})





// var app = require('express')();
// const path= require('path')
// const Razorpay =require("razorpay")
// const shortid =require("shortid")
// const razorpay = new Razorpay({
//     key_id:"rzp_live_NSlFdTT9k01AV1",
//     key_secret:"xbp5KQ3ZmKmTEz5eE0WJ1xHI",
// });
// app.get('/logo.svg',(req,res)=>{
//     res.sendFile(path.join(__dirname,'logo.svg'))
// })
// app.post("/razorpay",(req,res)=>{

// const payment_capture = 1
// const amount = 5
// const currency="INR"
// const options={
//     amount:(amount*100).toString(),
//     currency,
//     receipt:shortid.generate(),
//     payment_capture}

// try{

// const response = razorpay.orders.create(options)
// console.log(response);
// res.send("payment done")
// }catch(error){
//     console.log(error);
// }
// })
// app.listen(1337,()=>{
//     console.log("listening on 1337");
// })