// import React from 'react';
// import {Text} from 'react-native';
// import StripeCheckout from 'react-stripe-checkout';

// const Stripe = ({ price, userid }) => {
//     price = parseInt(price);
//     const priceForStripe = price * 100;
//     const publishableKey = 'pk_test_51HoFgjCxgtcfoZwvsKFbfVjfG9zEtZV8SlBCIQ9gziIN1dFFj5WbV4vgjHGQslUdfoenn0j5bGqHu9fwKBVb8WvB0077gk8H7w'
//     const onToken = token => {
//         console.log('token in stripe: ', token)
//         // from backend ???
//         var requestOptions = {
//             method: 'POST',
//             body: JSON.stringify({
//                 amount: priceForStripe,//priceForStripe,
//                 token,
//                 userid,//userid
//             }),
//             headers: {
//               "Content-Type": "application/json"
//             },
//             redirect: 'follow'
//           };
//         //   fetch("https://blackpearl2.ew.r.appspot.com/payment/", requestOptions)
//         //   .then(response => response.json())
//         //   .then(data => {
//         //       console.log('Success:', data);
        
              
//         //       alert('Payment Successful');
//         //   })
//         //   .catch(err => {
//         //       console.log('Payment error: ', err)
//         //       alert('Payment Not Successful')
//         //   })    
//     }
//     return (
//         <StripeCheckout
//             name='Kiddo Donation'
//             image='https://svgshare.com/i/CUz.svg'
//             amount={priceForStripe}
//             token={onToken}
//             stripeKey={publishableKey}
//         ><Text>Donate</Text></StripeCheckout >

//     )
// }
// export default Stripe;
