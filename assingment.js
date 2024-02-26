function calculateMoney(ticketsale){
    const ticketPrice = 120;
    const securityGaurdPay = 500;
    const staffNO = 8;
    const perStaffLunchCost = 50;
    const totalLunchCost = staffNO * perStaffLunchCost;
    const totalCost = securityGaurdPay + totalLunchCost;
    const earnMoney =  (ticketPrice * ticket) - totalCost;
    return earnMoney;
    if(ticketsale <= 0){
        console.log('please input positive numbers');
    }
}
let ticket = -93; 
const money = calculateMoney(5);
console.log(money);