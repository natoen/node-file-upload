/*    Radix-2    */
// 0101 = 5
// 8421
console.log((5).toString(2)); // 101

// 1001 = 9
// 8421
console.log((9).toString(2)); // 1001


/*    Radix-8    */
//  0   1 0 1 = 65
// 512 64 8 1
console.log((65).toString(8)); // 101

//  1   0 0 1 = 513
// 512 64 8 1
console.log((513).toString(8)); // 1001


/*    Radix-10    */
//   0   0   1 1 = 11
// 1000 100 10 1
console.log((11).toString(10)); // 11

//   1   0   1 0 = 1010
// 1000 100 10 1
console.log((1010).toString(10)); // 1010


/*    Radix-16   */
//   0   0   1 0 = 16
// 4096 256 16 1
console.log((16).toString(16)); // 10

//   0   1   1 0 = 272
// 4096 256 16 1
console.log((272).toString(16)); // 110


/*   Left Shift <<   */
//          00011 = 3
// 3 << 1 = 00110 = 6
// 3 << 2 = 01100 = 12
// 3 << 3 = 11000 = 24
console.log((3 << 1).toString(2)); // 110
console.log((3 << 2).toString(2)); // 1100
console.log((3 << 3).toString(2)); // 11000


/*   Right Shift >>   */
//           1100 = 12
// 12 >> 1 = 0110 = 6
// 12 >> 2 = 0011 = 3
// 12 >> 3 = 0001 = 1
console.log((12 >> 1).toString(2)); // 110
console.log((12 >> 2).toString(2)); // 11
console.log((12 >> 3).toString(2)); // 1


/*      OR |     */
// 0 1 0 1  = 5
// 0 1 1 0  = 6
// ---------------
// 0 1 1 1  = 7

//    5 | 6 = 7
console.log((5 | 6).toString(2)); // 111


/*      AND &     */
// 0 1 0 1  = 5
// 0 1 1 0  = 6
// ---------------
// 0 1 0 0  = 4

//    5 & 6 = 4
console.log((5 & 6).toString(2)); // 100


/*      XOR ^     */
// 0 1 1 0  = 6
// 0 0 1 1  = 3
// ---------------
// 0 1 0 1  = 5

//    6 ^ 3 = 4
console.log((6 ^ 3).toString(2)); // 101


/*      NOT ~     */
//  4 = 0100
// ~4 = 1011
// ~4 = -5
// ~x = -(x+1)
// but
console.log((~4).toString(2)); // -101 ???
console.log((-5).toString(2)); // -101 ???

/*   coercion using Zero-Fill Right Shift >>>   */
console.log((~4 >>> 0).toString(2)); // 1011
