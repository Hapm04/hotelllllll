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

--2 Tạo account
CREATE TABLE Account (
    AccountID INT PRIMARY KEY ,
    Username VARCHAR(50) UNIQUE,
    Password VARCHAR(100),
    Role VARCHAR(50),
    Status VARCHAR(20)
);

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

--7 Dịch vụ
CREATE TABLE AdditionalService (
    ServiceID INT PRIMARY KEY,
    ServiceName VARCHAR(100),
    Description TEXT,
    Price DECIMAL(10, 2),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);

--8 Ca làm việc
CREATE TABLE Shift (
    ShiftID INT PRIMARY KEY ,
    ShiftName VARCHAR(50),
    StartTime TIME,
    EndTime TIME,
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);

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


