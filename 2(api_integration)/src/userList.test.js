// src/UserList.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; //  for custom matchers
import UserList from "./userList";

// Mocking the global fetch function
global.fetch = jest.fn();

// Mocking react-hot-toast
jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
}));

describe("UserList component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear the mock after each test
  });

  test("renders user list when API call succeeds", async () => {
    // Mock a successful API response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
      ],
    });

    // Render the component
    render(<UserList />);

    // Wait for the fetch and check if user names are rendered
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
      expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
      expect(screen.getByText("Clementine Bauch")).toBeInTheDocument();
    });
  });

  test("renders error message when API call fails", async () => {
    // Mock a failed API response
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    // Wait for error handling and assert that toast was called with the error message
    await waitFor(() => expect(require('react-hot-toast').error).toHaveBeenCalledWith("Failed to fetch"));
  });
});
