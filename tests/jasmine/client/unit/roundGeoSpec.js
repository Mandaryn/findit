describe('.roundGeo', function() {
  it('rounds numbers to 3 decimal places', function() {
    expect(UI._globalHelpers.roundGeo(1.00005)).toEqual(1.0001);
  });
});
