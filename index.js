function writeCards(cards, string) {
    let thankyouMessage = []
    for (let i = 0; i < cards.length; i++) {
      thankyouMessage.push(`Thank you, ${cards[i]}, for the wonderful `+string+` gift!`);
    }
    return thankyouMessage;
}
function countDown(n) {
while (n >= 0) {
  console.log(n--);
}
}