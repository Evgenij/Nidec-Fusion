const textsColor = {
	FgBlack : "\x1b[30m",
	FgRed : "\x1b[31m",
	FgGreen : "\x1b[32m",
	FgYellow : "\x1b[33m",
	FgBlue : "\x1b[34m",
	FgMagenta : "\x1b[35m",
	FgCyan : "\x1b[36m",
	FgWhite : "\x1b[37m",
	FgGray : "\x1b[90m"
}

const typeMessage = {
	success: 1,
	info: 2,
	error: 0
}

const message = (type, message) => {
	console.log(textsColor.FgGreen,'[success] ' + message)
	console.log(textsColor.FgWhite)
}

module.exports = {
	typeMessage,
	message
}