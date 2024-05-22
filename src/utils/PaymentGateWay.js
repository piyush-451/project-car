export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1337/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: "rzp_live_XxAofUPxUGXDU8",
    currency: data.currency,
    amount: data.amount,
    name: "Baba Mahakaal Travels",
    description: "Wallet Transaction",
    image: "http://babamahakaltourandtravels.com/wp-content/uploads/2023/11/BMTT-LOGO-4.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "Anirudh Jwala",
      email: "anirudh@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}