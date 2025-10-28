CREATE DATABASE HotelManagement;
USE HotelManagement;
Drop database HotelManagement
--1 Tạo Branch
CREATE TABLE Branch (
    BranchID INT PRIMARY KEY ,
    BranchName VARCHAR(100),
    Address VARCHAR(255),
    Phone VARCHAR(20)
);
INSERT INTO Branch (BranchID ,BranchName, Address, Phone) VALUES
(1,'Chi nhánh Hà Nội', '123 Đường A, Hà Nội', '0241234567'),
(2,'Chi nhánh TP.HCM', '456 Đường B, Quận 1, TP.HCM', '0289876543'),
(3, 'Chi nhánh Đà Nẵng', '789 Đường C, Đà Nẵng', '02363789999'),
(4, 'Chi nhánh Hải Phòng', '12 Trần Phú, Hải Phòng', '02253998877'),
(5, 'Chi nhánh Cần Thơ', '34 Nguyễn Trãi, Cần Thơ', '02923889911'),
(6, 'Chi nhánh Huế', '56 Lê Lợi, Huế', '02343998822'),
(7, 'Chi nhánh Nha Trang', '78 Hùng Vương, Nha Trang', '02583887766'),
(8, 'Chi nhánh Vũng Tàu', '90 Trần Hưng Đạo, Vũng Tàu', '02543884455'),
(9, 'Chi nhánh Buôn Ma Thuột', '123 Nguyễn Văn Cừ, Buôn Ma Thuột', '02623889977'),
(10, 'Chi nhánh Quy Nhơn', '45 Lý Thường Kiệt, Quy Nhơn', '02563887799'),
(11, 'Chi nhánh Phan Thiết', '67 Nguyễn Đình Chiểu, Phan Thiết', '02523887733'),
(12, 'Chi nhánh Thanh Hóa', '89 Trường Thi, Thanh Hóa', '02373885566'),
(13, 'Chi nhánh Nam Định', '101 Hùng Vương, Nam Định', '02283889900'),
(14, 'Chi nhánh Thái Nguyên', '112 Lương Ngọc Quyến, Thái Nguyên', '02083884422'),
(15, 'Chi nhánh Bắc Ninh', '134 Trần Hưng Đạo, Bắc Ninh', '02223887744'),
(16, 'Chi nhánh Hạ Long', '156 Hạ Long, Quảng Ninh', '02033882288'),
(17, 'Chi nhánh Lào Cai', '178 Hoàng Liên, Lào Cai', '02143889922'),
(18, 'Chi nhánh Sơn La', '190 Nguyễn Lương Bằng, Sơn La', '02123884411'),
(19, 'Chi nhánh Nghệ An', '202 Trần Phú, Vinh', '02383885577'),
(20, 'Chi nhánh Bình Dương', '224 Phú Lợi, Thủ Dầu Một', '02743887788'),
(21, 'Chi nhánh Biên Hòa', '246 Đồng Khởi, Biên Hòa', '02513885544'),
(22, 'Chi nhánh Long An', '268 Hùng Vương, Tân An', '02723884466');

SELECT * FROM Branch WHERE BranchID = 1;

--2 Tạo account
CREATE TABLE Account (
    AccountID INT PRIMARY KEY ,
    Username VARCHAR(50) UNIQUE,
    Password VARCHAR(100),
    Role VARCHAR(50),
    Status VARCHAR(20)
);
INSERT INTO Account (AccountID, Username, Password, Role, Status) VALUES
(1, 'admin1', '123456', 'Admin', 'Active'),
(2, 'staff1', '123456', 'Employee', 'Active'),
(3, 'khach1', '123456', 'Customer', 'Active'),
(4, 'admin2', '123456', 'Admin', 'Active'),
(5, 'staff2', '123456', 'Employee', 'Active'),
(6, 'staff3', '123456', 'Employee', 'Active'),
(7, 'staff4', '123456', 'Employee', 'Inactive'),
(8, 'staff5', '123456', 'Employee', 'Active'),
(9, 'staff6', '123456', 'Employee', 'Active'),
(10, 'khach2', '123456', 'Customer', 'Active'),
(11, 'khach3', '123456', 'Customer', 'Active'),
(12, 'khach4', '123456', 'Customer', 'Inactive'),
(13, 'khach5', '123456', 'Customer', 'Active'),
(14, 'khach6', '123456', 'Customer', 'Active'),
(15, 'khach7', '123456', 'Customer', 'Active'),
(16, 'admin3', '123456', 'Admin', 'Active'),
(17, 'staff7', '123456', 'Employee', 'Inactive'),
(18, 'staff8', '123456', 'Employee', 'Active'),
(19, 'khach8', '123456', 'Customer', 'Active'),
(20, 'khach9', '123456', 'Customer', 'Inactive'),
(21, 'khach10', '123456', 'Customer', 'Active'),
(22, 'staff9', '123456', 'Employee', 'Active'),
(23, 'admin4', '123456', 'Admin', 'Inactive');




--3 Nhân viên
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Position VARCHAR(50),
    BranchID INT,
    AccountID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    FOREIGN KEY (AccountID) REFERENCES Account(AccountID)
);
INSERT INTO Employee (EmployeeID, FullName, Phone, Email, Position, BranchID, AccountID) VALUES
(1,'Nguyễn Văn A', '0911222333', 'nva@hotel.com', 'Lễ tân', 1, 2),
(2, 'Lê Thị C', '0905123456', 'ltc@hotel.com', 'Lễ tân', 2, 5),
(3, 'Phạm Văn D', '0916554433', 'pvd@hotel.com', 'Bảo vệ', 3, 6),
(4, 'Trần Thị E', '0987991122', 'tte@hotel.com', 'Phục vụ', 4, 7),
(5, 'Ngô Văn F', '0922334455', 'nvf@hotel.com', 'Quản lý', 5, 8),
(6, 'Đặng Thị G', '0911998877', 'dtg@hotel.com', 'Phục vụ', 6, 9),
(7, 'Hoàng Văn H', '0933445566', 'hvh@hotel.com', 'Lễ tân', 7, 11),
(8, 'Nguyễn Thị I', '0944556677', 'nti@hotel.com', 'Tạp vụ', 8, 12),
(9, 'Phan Văn K', '0955667788', 'pvk@hotel.com', 'Bảo vệ', 9, 13),
(10, 'Lý Thị L', '0966778899', 'ltl@hotel.com', 'Nhân sự', 10, 14),
(11, 'Đỗ Văn M', '0977889900', 'dvm@hotel.com', 'Bếp trưởng', 11, 15),
(12, 'Tạ Thị N', '0988990011', 'ttn@hotel.com', 'Quản lý', 12, 17),
(13, 'Võ Văn O', '0999001122', 'vvo@hotel.com', 'Phục vụ', 13, 18),
(14, 'Nguyễn Thị P', '0900112233', 'ntp@hotel.com', 'Lễ tân', 14, 22),
(15, 'Trịnh Văn Q', '0911223344', 'tvq@hotel.com', 'Phục vụ', 15, 16),
(16, 'Bùi Thị R', '0922334455', 'btr@hotel.com', 'Tạp vụ', 16, 19);



--4 Khách hàng
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY ,
    FullName VARCHAR(100),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    Address VARCHAR(255),
    AccountID INT,
    FOREIGN KEY (AccountID) REFERENCES Account(AccountID)
);
INSERT INTO Customer (CustomerID, FullName, Phone, Email, Address, AccountID) VALUES
(1, 'Trần Thị B', '0903444555', 'ttb@gmail.com', '789 Đường C, Đà Nẵng', 3),
(2, 'Lê Minh S', '0903001001', 'lms@gmail.com', '12A Nguyễn Huệ, TP.HCM', 10),
(3, 'Trần Hồng T', '0903222111', 'tht@gmail.com', '45 Hai Bà Trưng, Hà Nội', 11),
(4, 'Phạm Anh U', '0911445566', 'pau@gmail.com', '99 Trần Phú, Đà Nẵng', 12),
(5, 'Nguyễn Thị V', '0922556677', 'ntv@gmail.com', '101 Nguyễn Văn Cừ, Huế', 13),
(6, 'Đỗ Quốc W', '0933667788', 'dqw@gmail.com', '78 Hùng Vương, Quảng Ninh', 14),
(7, 'Phan Thị X', '0944778899', 'ptx@gmail.com', '56 Lê Lợi, Hải Phòng', 15),
(8, 'Vũ Văn Y', '0955889900', 'vvy@gmail.com', '23 Trường Chinh, Cần Thơ', 20),
(9, 'Nguyễn Mai Z', '0966990011', 'nmz@gmail.com', '89 Phan Đình Phùng, Đà Lạt', 21),
(10, 'Hoàng Gia A', '0977001122', 'hga@gmail.com', '11B Lý Thường Kiệt, Hà Nội', 4),
(11, 'Ngô Thanh B', '0988112233', 'ntb@gmail.com', '44 Pasteur, TP.HCM', 23),
(12, 'Tô Thị C', '0999223344', 'ttc@gmail.com', '66 Nguyễn Trãi, Huế', 19),
(13, 'Đặng Nhật D', '0900334455', 'dnd@gmail.com', '35 Nguyễn Lương Bằng, Đà Nẵng', 6),
(14, 'Trương Quang E', '0911445566', 'tqe@gmail.com', '20B Trần Hưng Đạo, Hà Tĩnh', 7),
(15, 'Bùi Hữu F', '0922556677', 'bhf@gmail.com', '88 Điện Biên Phủ, TP.HCM', 9),
(16, 'Nguyễn Mỹ G', '0933667788', 'nmg@gmail.com', '14 Hoàng Diệu, Nha Trang', 18);




--5 Phòng
CREATE TABLE Room (
    RoomID INT PRIMARY KEY,
    RoomNumber VARCHAR(20),
    Type VARCHAR(50),
    Status VARCHAR(20),
    Price DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Room (RoomID, RoomNumber, Type, Status, Price, BranchID) VALUES
(1, '101', 'Phòng đơn', 'Trống', 500000, 1),
(2, '102', 'Phòng đôi', 'Đang sử dụng', 800000, 1),
(3, '103', 'Phòng đôi', 'Trống', 850000, 1),
(4, '104', 'Phòng VIP', 'Trống', 1500000, 2),
(5, '201', 'Phòng đơn', 'Đang dọn', 520000, 2),
(6, '202', 'Phòng đôi', 'Trống', 900000, 3),
(7, '203', 'Phòng đơn', 'Đang sử dụng', 480000, 3),
(8, '204', 'Phòng VIP', 'Trống', 1600000, 4),
(9, '301', 'Phòng đôi', 'Trống', 880000, 4),
(10, '302', 'Phòng đơn', 'Đang dọn', 510000, 5),
(11, '303', 'Phòng đơn', 'Trống', 500000, 5),
(12, '304', 'Phòng VIP', 'Đang sử dụng', 1700000, 6),
(13, '401', 'Phòng đơn', 'Trống', 530000, 6),
(14, '402', 'Phòng đôi', 'Trống', 860000, 7),
(15, '403', 'Phòng VIP', 'Trống', 1550000, 7),
(16, '404', 'Phòng đơn', 'Đang sử dụng', 520000, 8),
(17, '501', 'Phòng đôi', 'Đang sử dụng', 890000, 8),
(18, '502', 'Phòng đơn', 'Trống', 500000, 9),
(19, '503', 'Phòng VIP', 'Trống', 1650000, 9),
(20, '504', 'Phòng đơn', 'Trống', 510000, 10),
(21, '601', 'Phòng đôi', 'Trống', 870000, 10),
(22, '602', 'Phòng VIP', 'Đang dọn', 1600000, 11),
(23, '603', 'Phòng đơn', 'Đang sử dụng', 500000, 11),
(24, '604', 'Phòng đôi', 'Trống', 880000, 12),
(25, '701', 'Phòng VIP', 'Trống', 1700000, 12),
(26, '702', 'Phòng đơn', 'Trống', 520000, 13),
(27, '703', 'Phòng đôi', 'Đang sử dụng', 900000, 13),
(28, '704', 'Phòng đơn', 'Trống', 500000, 14),
(29, '801', 'Phòng đơn', 'Trống', 530000, 15),
(30, '802', 'Phòng VIP', 'Trống', 1800000, 16),
(31, '803', 'Phòng đôi', 'Đang sử dụng', 860000, 16),
(32, '804', 'Phòng đơn', 'Trống', 510000, 17);



--6 Các món ăn
CREATE TABLE Dish (
    DishID INT PRIMARY KEY,
    Name VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    State VARCHAR(20),
    Category VARCHAR(50),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Dish (DishID, Name, Description, Price, State, Category, BranchID) VALUES
(1, 'Cơm gà', 'Cơm gà chiên giòn', 60000, 'Còn món', 'Món chính', 1),
(2, 'Súp cua', 'Súp cua thơm ngon', 40000, 'Còn món', 'Khai vị', 1),
(3, 'Phở bò', 'Phở bò truyền thống', 45000, 'Còn món', 'Món chính', 1),
(4, 'Bún chả', 'Bún chả Hà Nội', 50000, 'Còn món', 'Món chính', 2),
(5, 'Gỏi cuốn', 'Gỏi cuốn tôm thịt', 30000, 'Còn món', 'Khai vị', 2),
(6, 'Bánh mì ốp la', 'Bánh mì với trứng ốp la', 25000, 'Còn món', 'Ăn sáng', 3),
(7, 'Cháo sườn', 'Cháo sườn non thơm ngon', 35000, 'Còn món', 'Món chính', 3),
(8, 'Mì xào bò', 'Mì xào bò rau cải', 60000, 'Còn món', 'Món chính', 4),
(9, 'Canh chua cá', 'Canh chua cá lóc miền Tây', 55000, 'Còn món', 'Món chính', 4),
(10, 'Cà phê sữa đá', 'Cà phê truyền thống', 20000, 'Còn món', 'Đồ uống', 5),
(11, 'Trà đào cam sả', 'Trà đào mát lạnh', 30000, 'Còn món', 'Đồ uống', 5),
(12, 'Sinh tố bơ', 'Sinh tố bơ béo ngậy', 35000, 'Còn món', 'Đồ uống', 6),
(13, 'Nước suối', 'Chai nước suối 500ml', 10000, 'Còn món', 'Đồ uống', 6),
(14, 'Bánh flan', 'Bánh flan trứng sữa', 20000, 'Còn món', 'Tráng miệng', 7),
(15, 'Chè bưởi', 'Chè bưởi miền Tây', 30000, 'Còn món', 'Tráng miệng', 7),
(16, 'Cơm chiên Dương Châu', 'Cơm chiên trứng, lạp xưởng', 60000, 'Còn món', 'Món chính', 8),
(17, 'Lẩu thái', 'Lẩu thái hải sản', 200000, 'Còn món', 'Món chính', 8),
(18, 'Gà hấp muối', 'Gà hấp nguyên con với muối hột', 180000, 'Còn món', 'Món chính', 9),
(19, 'Sườn nướng', 'Sườn nướng mật ong', 70000, 'Còn món', 'Món chính', 9),
(20, 'Trứng luộc', '2 quả trứng gà luộc', 15000, 'Còn món', 'Ăn sáng', 10),
(21, 'Cháo trắng', 'Cháo trắng ăn với trứng muối', 25000, 'Còn món', 'Ăn sáng', 10),
(22, 'Bánh cuốn', 'Bánh cuốn thịt bằm', 40000, 'Còn món', 'Món chính', 11),
(23, 'Hủ tiếu', 'Hủ tiếu sườn non', 50000, 'Còn món', 'Món chính', 11),
(24, 'Trà xanh', 'Trà xanh đóng chai', 12000, 'Còn món', 'Đồ uống', 12),
(25, 'Sữa tươi', 'Sữa tươi tiệt trùng', 15000, 'Còn món', 'Đồ uống', 12),
(26, 'Mì quảng', 'Mì Quảng thịt gà', 55000, 'Còn món', 'Món chính', 13),
(27, 'Bánh xèo', 'Bánh xèo miền Trung', 60000, 'Còn món', 'Món chính', 13);


--7 Dịch vụ
CREATE TABLE AdditionalService (
    ServiceID INT PRIMARY KEY,
    ServiceName VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO AdditionalService (ServiceID, ServiceName, Description, Price, BranchID) VALUES
(1, 'Giặt ủi', 'Dịch vụ giặt quần áo', 30000, 1),
(2, 'Spa', 'Dịch vụ thư giãn cao cấp', 200000, 1),
(3, 'Đưa đón sân bay', 'Xe đưa đón từ/đến sân bay', 250000, 2),
(4, 'Thuê xe máy', 'Thuê xe máy theo ngày', 120000, 2),
(5, 'Massage', 'Massage toàn thân 60 phút', 180000, 3),
(6, 'Giữ trẻ', 'Dịch vụ trông trẻ chuyên nghiệp', 100000, 3),
(7, 'Dọn phòng nhanh', 'Dọn phòng gấp trong 30 phút', 50000, 4),
(8, 'Hướng dẫn du lịch', 'Dẫn tour trong nội thành', 300000, 4),
(9, 'Cho thuê laptop', 'Laptop cho khách sử dụng tạm thời', 150000, 5),
(10, 'Bữa sáng tại phòng', 'Phục vụ bữa sáng tận phòng', 70000, 5),
(11, 'Thuê ô tô', 'Thuê ô tô 4 chỗ nguyên ngày', 800000, 6),
(12, 'Giặt hấp cao cấp', 'Dịch vụ giặt đồ cao cấp', 60000, 6),
(13, 'Phòng hội nghị', 'Thuê phòng họp/hội nghị', 2000000, 7),
(14, 'Trang trí phòng', 'Trang trí sinh nhật/kỷ niệm', 250000, 7),
(15, 'Dịch vụ y tế', 'Khám/chăm sóc y tế khẩn cấp', 100000, 8),
(16, 'Gọi đồ ăn nhanh', 'Đặt đồ ăn nhanh lên phòng', 40000, 8),
(17, 'Đặt vé tham quan', 'Hỗ trợ đặt tour tham quan địa phương', 50000, 9),
(18, 'Giữ hành lý', 'Giữ hành lý sau khi trả phòng', 20000, 9),
(19, 'In ấn tài liệu', 'In ấn, photocopy, scan', 15000, 10),
(20, 'Trợ lý cá nhân', 'Dịch vụ hỗ trợ cá nhân VIP', 500000, 10);



--8 Ca làm việc
CREATE TABLE Shift (
    ShiftID INT PRIMARY KEY ,
    ShiftName VARCHAR(50),
    StartTime TIME,
    EndTime TIME,
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);
INSERT INTO Shift (ShiftID, ShiftName, StartTime, EndTime, BranchID) VALUES
(1, 'Ca sáng', '06:00:00', '14:00:00', 1),
(2, 'Ca chiều', '14:00:00', '22:00:00', 1),
(3, 'Ca đêm', '22:00:00', '06:00:00', 1),
(4, 'Ca sáng', '06:00:00', '14:00:00', 2),
(5, 'Ca chiều', '14:00:00', '22:00:00', 2),
(6, 'Ca đêm', '22:00:00', '06:00:00', 2),
(7, 'Ca sáng', '06:00:00', '14:00:00', 3),
(8, 'Ca chiều', '14:00:00', '22:00:00', 3),
(9, 'Ca đêm', '22:00:00', '06:00:00', 3),
(10, 'Ca sáng', '06:00:00', '14:00:00', 4),
(11, 'Ca chiều', '14:00:00', '22:00:00', 4),
(12, 'Ca đêm', '22:00:00', '06:00:00', 4),
(13, 'Ca sáng', '06:00:00', '14:00:00', 5),
(14, 'Ca chiều', '14:00:00', '22:00:00', 5),
(15, 'Ca đêm', '22:00:00', '06:00:00', 5),
(16, 'Ca sáng', '06:00:00', '14:00:00', 6),
(17, 'Ca chiều', '14:00:00', '22:00:00', 6),
(18, 'Ca đêm', '22:00:00', '06:00:00', 6);



--9 Phân công ca
CREATE TABLE ShiftAssignment (
    ShiftAssignmentID INT PRIMARY KEY,
    EmployeeID INT,
    ShiftID INT,
    Date DATE,
    AssignedBy INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID),
    FOREIGN KEY (ShiftID) REFERENCES Shift(ShiftID),
    FOREIGN KEY (AssignedBy) REFERENCES Employee(EmployeeID)
);
INSERT INTO ShiftAssignment (ShiftAssignmentID, EmployeeID, ShiftID, Date, AssignedBy) VALUES
(1, 1, 1, '2025-04-09', 1),
(2, 1, 2, '2025-04-10', 1),
(3, 1, 3, '2025-04-11', 1),
(4, 2, 4, '2025-04-09', 1),
(5, 2, 5, '2025-04-10', 1),
(6, 2, 6, '2025-04-11', 1),
(7, 3, 7, '2025-04-09', 1),
(8, 3, 8, '2025-04-10', 1),
(9, 3, 9, '2025-04-11', 1),
(10, 1, 1, '2025-04-12', 1),
(11, 2, 2, '2025-04-12', 1),
(12, 3, 3, '2025-04-12', 1),
(13, 1, 4, '2025-04-13', 1),
(14, 2, 5, '2025-04-13', 1),
(15, 3, 6, '2025-04-13', 1),
(16, 1, 7, '2025-04-14', 1),
(17, 2, 8, '2025-04-14', 1),
(18, 3, 9, '2025-04-14', 1),
(19, 1, 1, '2025-04-15', 1),
(20, 2, 2, '2025-04-15', 1);


-- 10 Đặt dịch vụ
CREATE TABLE OrderSV (
    OrderID INT PRIMARY KEY,
    OrderType VARCHAR(50),
    CustomerID INT,
    EmployeeID INT,
    OrderDate DATE,
    Status VARCHAR(50),
    TotalAmount DECIMAL(10, 2),
    BookingMethod VARCHAR(50),
    Notes TEXT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);
INSERT INTO OrderSV (OrderID, OrderType, CustomerID, EmployeeID, OrderDate, Status, TotalAmount, BookingMethod, Notes) VALUES
(1, 'Đặt phòng', 1, 1, '2025-04-09', 'Đã thanh toán', 830000, 'Online', 'Khách đặt qua website'),
(2, 'Đặt món', 1, 1, '2025-04-09', 'Đã giao', 150000, 'Tại chỗ', 'Gọi món lúc 19h00'),
(3, 'Đặt phòng', 1, 1, '2025-04-10', 'Đã hủy', 500000, 'Online', 'Khách hủy do thay đổi lịch'),
(4, 'Đặt món', 1, 1, '2025-04-10', 'Đã thanh toán', 200000, 'Tại phòng', 'Phục vụ tại phòng 101'),
(5, 'Đặt phòng', 1, 1, '2025-04-11', 'Đã thanh toán', 800000, 'Tại quầy', 'Đặt trực tiếp'),
(6, 'Đặt món', 1, 1, '2025-04-11', 'Chờ xử lý', 100000, 'Online', 'Đặt qua app'),
(7, 'Đặt dịch vụ', 1, 1, '2025-04-12', 'Đang xử lý', 300000, 'Online', 'Đặt Spa + giặt ủi'),
(8, 'Đặt phòng', 1, 1, '2025-04-13', 'Đã thanh toán', 900000, 'Tại quầy', 'Khách thân quen'),
(9, 'Đặt món', 1, 1, '2025-04-13', 'Đã giao', 120000, 'Tại phòng', 'Yêu cầu giao đúng giờ ăn tối'),
(10, 'Đặt dịch vụ', 1, 1, '2025-04-13', 'Đã hoàn thành', 400000, 'Tại quầy', 'Dịch vụ hướng dẫn du lịch'),
(11, 'Đặt phòng', 1, 1, '2025-04-14', 'Chờ xác nhận', 750000, 'Online', 'Chờ duyệt phòng 203'),
(12, 'Đặt món', 1, 1, '2025-04-14', 'Chưa thanh toán', 130000, 'Tại phòng', 'Gọi món buổi trưa'),
(13, 'Đặt dịch vụ', 1, 1, '2025-04-15', 'Đã thanh toán', 100000, 'Online', 'Giặt ủi và giữ hành lý'),
(14, 'Đặt món', 1, 1, '2025-04-15', 'Đã giao', 90000, 'Tại chỗ', 'Khách ăn tại nhà hàng'),
(15, 'Đặt phòng', 1, 1, '2025-04-16', 'Đã hủy', 600000, 'Online', 'Hủy do thay đổi kế hoạch'),
(16, 'Đặt món', 1, 1, '2025-04-16', 'Chờ xử lý', 110000, 'Tại phòng', 'Khách gọi qua tổng đài'),
(17, 'Đặt dịch vụ', 1, 1, '2025-04-16', 'Đã thanh toán', 500000, 'Tại quầy', 'Thuê xe máy + spa'),
(18, 'Đặt món', 1, 1, '2025-04-17', 'Đã giao', 145000, 'Online', 'Đặt combo cơm + súp'),
(19, 'Đặt phòng', 1, 1, '2025-04-17', 'Đã thanh toán', 880000, 'Tại quầy', 'Đặt gấp cho khách mới'),
(20, 'Đặt dịch vụ', 1, 1, '2025-04-17', 'Đã hoàn thành', 200000, 'Online', 'Massage 60 phút');



--11 Hóa đơn cho đơn hàng
CREATE TABLE Invoice (
    InvoiceID INT PRIMARY KEY,
    OrderID INT,
    InvoiceDate DATE,
    TotalAmount DECIMAL(10, 2),
    PaymentStatus VARCHAR(50),
    PaymentMethod VARCHAR(50),
    InvoiceType VARCHAR(50),
    FOREIGN KEY (OrderID) REFERENCES OrderSV (OrderID)
);
INSERT INTO Invoice (InvoiceID, OrderID, InvoiceDate, TotalAmount, PaymentStatus, PaymentMethod, InvoiceType) VALUES
(1, 1, '2025-04-09', 830000, 'Đã thanh toán', 'Tiền mặt', 'Hóa đơn đặt phòng'),
(2, 2, '2025-04-09', 950000, 'Đã thanh toán', 'Thẻ tín dụng', 'Hóa đơn đặt phòng'),
(3, 3, '2025-04-09', 450000, 'Chưa thanh toán', 'Tiền mặt', 'Hóa đơn dịch vụ ăn uống'),
(4, 4, '2025-04-10', 1250000, 'Đã thanh toán', 'Chuyển khoản', 'Hóa đơn đặt phòng'),
(5, 5, '2025-04-10', 300000, 'Đã thanh toán', 'Tiền mặt', 'Hóa đơn dịch vụ ăn uống'),
(6, 6, '2025-04-10', 750000, 'Chưa thanh toán', 'Thẻ tín dụng', 'Hóa đơn đặt phòng'),
(7, 7, '2025-04-10', 200000, 'Đã thanh toán', 'Tiền mặt', 'Hóa đơn dịch vụ ăn uống'),
(8, 8, '2025-04-10', 670000, 'Đã thanh toán', 'Chuyển khoản', 'Hóa đơn đặt phòng'),
(9, 9, '2025-04-10', 980000, 'Chưa thanh toán', 'Tiền mặt', 'Hóa đơn dịch vụ ăn uống'),
(10, 10, '2025-04-10', 1200000, 'Đã thanh toán', 'Thẻ tín dụng', 'Hóa đơn đặt phòng');



--12 Thanh toán
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    InvoiceID INT,
    PaymentDate DATE,
    Amount DECIMAL(10, 2),
    PaymentType VARCHAR(50),
    PaymentMethod VARCHAR(50),
    FOREIGN KEY (InvoiceID) REFERENCES Invoice(InvoiceID)
);
INSERT INTO Payment (PaymentID, InvoiceID, PaymentDate, Amount, PaymentType, PaymentMethod) VALUES
(1, 1, '2025-04-09', 830000, 'Toàn phần', 'Tiền mặt'),
(2, 2, '2025-04-09', 950000, 'Toàn phần', 'Thẻ tín dụng'),
(3, 3, '2025-04-09', 450000, 'Một phần', 'Tiền mặt'),
(4, 4, '2025-04-10', 1250000, 'Toàn phần', 'Chuyển khoản'),
(5, 5, '2025-04-10', 300000, 'Toàn phần', 'Tiền mặt'),
(6, 6, '2025-04-10', 750000, 'Chưa thanh toán', 'Thẻ tín dụng'),
(7, 7, '2025-04-10', 200000, 'Toàn phần', 'Tiền mặt'),
(8, 8, '2025-04-10', 670000, 'Toàn phần', 'Chuyển khoản'),
(9, 9, '2025-04-10', 980000, 'Chưa thanh toán', 'Tiền mặt'),
(10, 10, '2025-04-10', 1200000, 'Toàn phần', 'Thẻ tín dụng');


--13 Chi tiết đơn hàng món ăn hoặc phòng
CREATE TABLE OrderDetail (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    DishID INT,
    RoomID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES OrderSV (OrderID),
    FOREIGN KEY (DishID) REFERENCES Dish(DishID),
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);
INSERT INTO OrderDetail (OrderDetailID, OrderID, DishID, RoomID, Quantity, Price) VALUES
(1, 1, 1, 2, 1, 60000),
(2, 2, 2, NULL, 1, 50000),
(3, 3, 3, NULL, 2, 120000),
(4, 4, 1, 1, 1, 60000),
(5, 5, 4, NULL, 1, 90000),
(6, 6, 2, 2, 1, 80000),
(7, 7, 3, NULL, 1, 110000),
(8, 8, 1, 3, 2, 70000),
(9, 9, 4, NULL, 3, 140000),
(10, 10, 2, NULL, 1, 50000);



--14 Chi tiết đơn hàng dịch vụ phụ.
CREATE TABLE OrderServiceDetail (
    OrderServiceDetailID INT PRIMARY KEY ,
    OrderID INT,
    ServiceID INT,
    Quantity INT,
    Price DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES OrderSV (OrderID),
    FOREIGN KEY (ServiceID) REFERENCES AdditionalService(ServiceID)
);
INSERT INTO OrderServiceDetail (OrderServiceDetailID, OrderID, ServiceID, Quantity, Price) VALUES
(1, 1, 1, 1, 30000),
(2, 1, 2, 1, 20000),
(3, 2, 1, 2, 60000),
(4, 3, 3, 1, 15000),
(5, 4, 1, 3, 45000),
(6, 5, 2, 2, 100000),
(7, 6, 3, 1, 25000),
(8, 7, 1, 2, 40000),
(9, 8, 2, 1, 80000),
(10, 9, 3, 3, 120000),
(11, 10, 1, 1, 30000),
(12, 2, 2, 1, 35000),
(13, 3, 1, 2, 50000),
(14, 4, 3, 1, 70000),
(15, 5, 1, 2, 60000),
(16, 6, 2, 1, 80000),
(17, 7, 3, 1, 30000),
(18, 8, 1, 2, 40000),
(19, 9, 2, 1, 90000),
(20, 10, 3, 2, 110000);



--15 Lịch sử thay đổi trạng thái của phòng
CREATE TABLE RoomStatusLog (
    RoomStatusLogID INT PRIMARY KEY,
    RoomID INT,
    Status VARCHAR(50),
    ChangeDate DATE,
    OrderID INT,
    FOREIGN KEY (RoomID) REFERENCES Room(RoomID),
    FOREIGN KEY (OrderID) REFERENCES OrderSV (OrderID)
);
INSERT INTO RoomStatusLog (RoomStatusLogID, RoomID, Status, ChangeDate, OrderID) VALUES
(1, 2, 'Đang sử dụng', '2025-04-09', 1),
(2, 1, 'Đang sử dụng', '2025-04-09', 1),
(3, 2, 'Đã trả', '2025-04-10', 1),
(4, 3, 'Đang sử dụng', '2025-04-10', 2),
(5, 4, 'Đã trả', '2025-04-10', 3),
(6, 5, 'Đang sử dụng', '2025-04-10', 4),
(7, 6, 'Đang sử dụng', '2025-04-10', 5),
(8, 7, 'Đã trả', '2025-04-09', 6),
(9, 8, 'Đang sử dụng', '2025-04-10', 7),
(10, 9, 'Đã trả', '2025-04-10', 8),
(11, 10, 'Đang sử dụng', '2025-04-10', 9),
(12, 1, 'Đang sử dụng', '2025-04-10', 10),
(13, 2, 'Đã trả', '2025-04-10', 2),
(14, 3, 'Đang sử dụng', '2025-04-10', 1),
(15, 4, 'Đã trả', '2025-04-10', 2),
(16, 5, 'Đang sử dụng', '2025-04-10', 3),
(17, 6, 'Đã trả', '2025-04-10', 4),
(18, 7, 'Đang sử dụng', '2025-04-10', 5),
(19, 8, 'Đã trả', '2025-04-10', 6),
(20, 9, 'Đang sử dụng', '2025-04-10', 7);


-- Tổng doanh thu theo chi nhánh
SELECT Branch.BranchName, SUM(Invoice.TotalAmount) AS TotalRevenue
FROM Invoice
JOIN OrderSV ON Invoice.OrderID = OrderSV.OrderID
JOIN Employee ON OrderSV.EmployeeID = Employee.EmployeeID
JOIN Branch ON Employee.BranchID = Branch.BranchID
GROUP BY Branch.BranchName;

--Lịch sử trạng thái của một phòng
SELECT Room.RoomNumber, RoomStatusLog.Status, RoomStatusLog.ChangeDate
FROM RoomStatusLog
JOIN Room ON RoomStatusLog.RoomID = Room.RoomID
WHERE Room.RoomNumber = '101'
ORDER BY RoomStatusLog.ChangeDate DESC;

-- Lay thong tin khach hang da dat phong
SELECT 
        c.FullName AS customerName,
        r.RoomID, r.Price, r.Type 
      FROM Customer c
      JOIN OrderSV o ON c.CustomerID = o.CustomerID
      JOIN OrderDetail od ON od.OrderID = o.OrderID
      JOIN Room r ON r.RoomID = od.RoomID
      where r.RoomNumber= 603
      
-- Load danh sach phong

