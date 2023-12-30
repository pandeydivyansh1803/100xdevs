let calculateSum = (n)=>{
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    let n = req.query.n;
    let sum = calculateSum(n);
    // whenver sending back always send string otherwise 
    // it is treated as status code
    res.send(sum.toString());
})

app.listen(3000,()=>{
    console.log(`app server is active listening on 3000`);
})




// 1) select w.address as address, t.amount as amount,t.confirmations as
//  confirmations from wallets as w inner join transactions
// as t on w.id=t.wallet_id where t.confirmations >= 10

// select tmp.address as address,count(tmp.address) as transactions,
// sum(tmp.amount) as balance
// from
// (select w.address as address, t.amount as amount,t.confirmations as
// confirmations from wallets as w inner join transactions
// as t on w.id=t.wallet_id where t.confirmations >= 10) as tmp
// group by tmp.address
// where balance >= 0 order by balance desc ;

// select f.name as name, c.payment as payment from funds as f inner join 
// coupon_payments as c on f.id=c.fund_id 

// select name, sum(payment) as total_payments , min(payment) as min_payment
// ,max(payment) as max_payment,avg(payment) as avg_payment from 
// () as tmp 
// where avg(payment)>500.00 group by name  order by name;

// select tmp.name, sum(tmp.payment) as total_payments , min(tmp.payment) 
// as min_payment
// ,max(payment) as max_payment,avg(payment) as avg_payment from 
// (select f.name as name, c.payment as payment from funds as f inner join 
//     coupon_payments as c on f.id=c.fund_id ) as tmp 
// where avg(payment)>500.00 group by name  order by name;