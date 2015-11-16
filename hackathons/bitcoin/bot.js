//
// TODO: implement the logic to decide whether or not to make a trade
//
function decideWhetherOrNotToTrade(item1){
	//negative
if(item1.tweet.includes('news') && bank.currency == 'BITCOIN'){
	console.log('news')
	return 1
}
if(item1.tweet.includes('paper') && bank.currency == 'BITCOIN'){
	console.log('paper')
	return 1
}
if(item1.tweet.includes('music') && bank.currency == 'BITCOIN'){
	console.log('music')
	return 1
}
if(item1.tweet.includes('money') && bank.currency == 'BITCOIN'){
	console.log('money')
	return 1
}


//positive
if(item1.tweet.includes('broncos') && bank.currency == 'USD'){
	console.log('broncos')
	return 1
}
if(item1.tweet.includes('apple') && bank.currency == 'USD'){
	console.log('apple')
	return 1
}
if(item1.tweet.includes('good') && bank.currency == 'USD'){
	console.log('good')
	return 1
}
if(item1.tweet.includes('actor') && bank.currency == 'USD'){
	console.log('actor')
	return 1
}
if(item1.tweet.includes('movies') && bank.currency == 'USD'){
	console.log('movies')
	return 1
}

  return Math.random() < 0
}
