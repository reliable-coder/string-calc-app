import { expect } from 'chai';
import { add } from '../src/string_calc'

describe('String Calc', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).to.equal(0);
  });

  it('should return the sum of single numbers', () => {
    expect(add('1')).to.equal(1);
    expect(add('2')).to.equal(2);
    expect(add('3')).to.equal(3);
    expect(add('4')).to.equal(4);
    expect(add('5')).to.equal(5);
    expect(add('6')).to.equal(6);
    expect(add('7')).to.equal(7);
    expect(add('8')).to.equal(8);
    expect(add('9')).to.equal(9);
    expect(add('0')).to.equal(0);
  });

  it('should handle multiple numbers separated by commas', () => {
    expect(add('1,2')).to.equal(3);
    expect(add('1,2,3,4')).to.equal(10);
    expect(add('1,2,3,4,5')).to.equal(15);
    expect(add('1,2,3,4,5,6')).to.equal(21);
    expect(add('1,2,3,4,5,6,7')).to.equal(28);
    expect(add('1,2,3,4,5,6,7,8')).to.equal(36);
    expect(add('1,2,3,4,5,6,7,8,9')).to.equal(45);
    expect(add('1,2,3,4,5,6,7,8,9,10')).to.equal(55);
  });

  it('should handle multiple numbers separated by newlines', () => {
    expect(add('1\n2')).to.equal(3);
    expect(add('1\n2\n3')).to.equal(6);
    expect(add('1\n2\n3\n4')).to.equal(10);
    expect(add('1\n2\n3\n4\n5')).to.equal(15);
  });

  it('should handle any other and/or mixed/multiple separators', () => {
    expect(add('1,2\n3')).to.equal(6);
    expect(add('1\n2,3')).to.equal(6);
  });

  it('should throw/raise an error for in valid (negative) numbers', () => {
    expect(() => add('-1')).to.throw('Only non-negative integers are allowed.');
    expect(() => add('1,-2')).to.throw('Only non-negative integers are allowed.');
  });

  it('should ignore numbers larger than 500', () => {
    expect(add('1,2,501')).to.equal(3);
  });

});