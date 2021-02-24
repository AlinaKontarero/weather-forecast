import { dateConverter } from '../utils/dateConverter';

describe('dateConverter', () => {

  const date1 = "2021-02-24"
  const date2 = "2021-03-01"
  const date3 = "2000-12-01"


  it('sets correct zero in month', () => {
    expect(dateConverter(date1)).toEqual("24/02/2021");
  });
  it('sets correct zero in day', () => {
    expect(dateConverter(date2)).toEqual("01/03/2021");
  });
  it('sets correct zero in year', () => {
    expect(dateConverter(date3)).toEqual("01/12/2000");
  });

});