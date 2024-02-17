/*Bài 1
B1: xác định đầu vào 
- số ngày làm
- lương 1 ngày: 100.000đ

B2: các bước xử lý 
công thức tính lương = lương 1 ngày * số ngày làm.

B3: kết quả
lương 
*/
var soNgayLam = 5;
var luongNgay = 100;

luong = soNgayLam*luongNgay;
// console.log("Luong:", luong);


/*Bài 2
B1: xác định đầu vào 
- 5 số thực so1, so2, so3, so4, so5

B2: các bước xử lý 
tinh trung binh .

B3: kết quả
trungBinh = (so1 + so2 + so3 + so4 + so5) / 5 .
*/
var so1 =1;
var so2 =2;
var so3 =3;
var so4 =4;
var so5 =5;
trungBinh = +(so1+so2+so3+so4+so5)/5;
// console.log("Trung bình 5 số:",trungBinh);


/*Bài 3
B1: xác định đầu vào 
- tyGia = 23500;
- soTien = 2

B2: các bước xử lý 
tien quy đổi = soTien * tyGia.

B3: kết quả
tienquydoi = 2 *23500 .
*/
var tyGia = 23500;
var soTien =2;
tienquydoi = +soTien*tyGia;

/*Bài 4
B1: xác định đầu vào 
- chieuDai 4;
- chieuRong = 2;

B2: các bước xử lý 
chuVi= 2*(chieuDai + chieuRong).
dienTich = chieuDai*chieuRong;
B3: kết quả
chuVi = 2 *(4+2);
dienTich = 4*2;

*/

var chieuDai = 4;
var chieuRong = 2;
chuVi = +2 *(chieuDai + chieuRong);
dienTich = +(chieuDai*chieuRong);

// console.log("chuVi",chuVi);
// console.log("dienTich",dienTich);

/*Bài 5
B1: xác định đầu vào 
- soNhap = 34;
-
B2: các bước xử lý 
donVi= soNhap%10.
hangChuc = Math.floor(n/10);
B3: kết quả
tong = donVi +hangChuc;


*/
var soNguyen =34;
var donVi = +soNguyen%10;
var hangChuc = +Math.floor(soNguyen/10);
tong = donVi + hangChuc;
// console.log("Tông:", tong);