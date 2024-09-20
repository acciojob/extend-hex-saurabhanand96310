const extendHex = (shortHex) => {
  // write your code here
	let newhex="#";
	
	for(let i=1;i<shortHex.length;i++){
		newhex=newhex+shortHex.charAt(i)+shortHex.charAt(i)
	}
	return newhex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
