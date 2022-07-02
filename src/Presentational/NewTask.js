import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="تکلیف جدید"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            placeholder="جزئیات..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <button type="submit">اضافه‌کن</button>
        </>
      )}
    </form>
  );
}
