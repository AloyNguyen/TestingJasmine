
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 8.5,
  }
  expect(calculateMonthlyPayment(values)).toEqual('143.92');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle high interest rates", function (){
  const values={
    amount: 1000,
    years: 40, 
    rate: 99,
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
