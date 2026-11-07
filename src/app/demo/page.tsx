"use client";
import { useState } from "react";

type TabType = "read" | "wishlist";

const books = {
  read: [
    { name: "Book A", pages: 192, rating: 4.5 },
    { name: "Book B", pages: 281, rating: 4.8 },
  ],
  wishlist: [
    { name: "Book C", pages: 150, rating: 4.0 },
    { name: "Book D", pages: 250, rating: 5.0 },
  ],
};

const TabDemo = () => {
  const [activeTab, setActiveTab] = useState<TabType>("read");

  const activeBooks = books[activeTab];
  const totalPages = activeBooks.reduce((sum, b) => sum + b.pages, 0);
  const totalRating = activeBooks.reduce((sum, b) => sum + b.rating, 0);

  return (
    <div className="p-6">
      <p className="mb-3">activeTab = {activeTab}</p>

      <div className="tabs tabs-border mb-4">
        <input
          type="radio"
          name="demo_tabs"
          className="tab"
          aria-label="Read"
          checked={activeTab === "read"}
          onChange={() => setActiveTab("read")}
        />
        <input
          type="radio"
          name="demo_tabs"
          className="tab"
          aria-label="Wishlist"
          checked={activeTab === "wishlist"}
          onChange={() => setActiveTab("wishlist")}
        />
      </div>

      <p>Books: {activeBooks.length}</p>
      <p>Total pages: {totalPages}</p>
      <p>Total rating: {totalRating.toFixed(1)}</p>

      {activeBooks.map((b) => (
        <div key={b.name} className="border p-2 my-2">
          {b.name} - {b.pages} pages - {b.rating}
        </div>
      ))}
    </div>
  );
};

export default TabDemo;