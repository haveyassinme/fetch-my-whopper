# Fetch My Whopper

![free whopper](https://smartcanucks.ca/wp-content/uploads/2017/06/Screen-Shot-2017-06-21-at-3.09.56-PM.png)

Did you know right now Burger King is offering a FREE Whopper!? Yum! They’re so tasty!

To get your free BK Whopper:

Go to the link on the back of your BK receipt
Fill out the short survey about your visit
Write the claim code on your receipt, and redeem for a free whopper!

## Or just use this app

```javascript
node index.js
```

Send a POST request to _http://localhost:4000/whopper_

```json
{
	"storeNumber": "17526", //you'll find the real infos or your receipt
	"date": "08/25/2023", //DD/MM/YYYY
	"time": "1:07"
}
```

And you'll get the result :

```
Code de validation : CF101010
```

## Enjoy !
