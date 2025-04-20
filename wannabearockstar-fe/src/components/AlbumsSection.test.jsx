import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AlbumsSection from "./AlbumsSection";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Test Album",
          releaseYear: 2020,
          coverUrl: "http://example.com/test.jpg",
          description: "Test description",
        },
      ]),
  })
);

describe("AlbumsSection", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("renders loading text before albums are loaded", () => {
    render(<AlbumsSection />);
    expect(screen.getByText(/Loading albums/i)).toBeInTheDocument();
  });

  test("renders fetched albums", async () => {
    render(<AlbumsSection />);

    await waitFor(() =>
      expect(screen.getByText("Test Album")).toBeInTheDocument()
    );

    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByAltText("Test Album")).toBeInTheDocument();
  });
});
