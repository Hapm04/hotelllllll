import React, { useState, useRef, useEffect } from "react";
import OrderHistory from "../../../components/OrderHistory";

const OrderIngredients = () => {
  const [items, setItems] = useState([{ name: "", quantity: "", unit: "" }]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: "", unit: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().slice(0, 10);
    const newOrder = {
      id: Date.now(),
      date: today,
      items: items.filter((item) => item.name && item.quantity),
    };
    const existingOrders = JSON.parse(localStorage.getItem("ingredientOrders") || "[]");
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("ingredientOrders", JSON.stringify(updatedOrders));
    alert("Đã ghi đơn đặt nguyên liệu!");
    setItems([{ name: "", quantity: "", unit: "" }]);
    setShowModal(false);
  };

  // Kéo thả modal
  const startDrag = (e) => {
    isDragging.current = true;
    const modal = modalRef.current;
    offset.current = {
      x: e.clientX - modal.offsetLeft,
      y: e.clientY - modal.offsetTop,
    };
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const modal = modalRef.current;
    modal.style.left = `${e.clientX - offset.current.x}px`;
    modal.style.top = `${e.clientY - offset.current.y}px`;
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  useEffect(() => {
    if (showModal) {
      const modal = modalRef.current;
      modal.style.left = "calc(50vw - 24rem)";
      modal.style.top = "100px";
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center space-y-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
      >
        + Đặt nguyên liệu
      </button>

      {showModal && (
        <div className="fixed inset-0  bg-opacity-30 z-50 flex justify-center items-start">
          <div
            ref={modalRef}
            className="absolute bg-white border-2 border-black rounded-lg w-full max-w-3xl shadow-lg"
          >
            <div
              onMouseDown={startDrag}
              className="cursor-move bg-blue-500 text-white px-6 py-3 rounded-t-lg font-semibold"
            >
              Đặt nguyên liệu
            </div>

            <form onSubmit={handleSubmit}>
              <div
                className="p-6 space-y-4 overflow-y-auto"
                style={{ maxHeight: "60vh" }}
              >
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Tên nguyên liệu"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, "name", e.target.value)}
                      className="border border-black p-2 rounded text-black"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Số lượng"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, "quantity", e.target.value)}
                      className="border border-black p-2 rounded text-black"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Đơn vị"
                      value={item.unit}
                      onChange={(e) => handleItemChange(index, "unit", e.target.value)}
                      className="border border-black p-2 rounded text-black"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addItem}
                  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
                >
                  + Thêm nguyên liệu
                </button>
              </div>

              <div className="flex justify-end gap-2 px-6 pb-4 mt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Đóng
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Ghi đơn đặt hàng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lịch sử đơn đặt hàng */}
      <OrderHistory />
    </div>
  );
};

export default OrderIngredients;
