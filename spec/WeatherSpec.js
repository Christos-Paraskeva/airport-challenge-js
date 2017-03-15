console.log('hello');
describe(weather, function(){

  var weather = new Weather;

  it('check if weather stormy or not', function(){

    expect([true, false]).toContain(weather.generator())

  });
});
