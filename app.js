function setCookie(){
	let today = new Date()
	let newDate = new Date()
	newDate.setDate(today.getDate() + 365)
	document.cookie = `names = trainingheights; expires=${newDate}`
}

function checkCookie(){
	if (document.cookie.split(';').some(cookie => cookie.trim().startsWith('names='))) {
		console.log('cookie exist')
		return
	}
	setCookie()
}


checkCookie()


