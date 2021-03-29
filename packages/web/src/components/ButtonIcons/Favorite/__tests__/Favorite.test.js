import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Favorite from "../Favorite";

describe("<Favorite />", () => {
  it("renders a button with the required props", () => {
    const { getByRole } = render(<Favorite handleClick={() => {}} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("renders a button with the default aria label", () => {
    const { getByLabelText } = render(<Favorite handleClick={() => {}} />);
    expect(getByLabelText(/save as favorite/i)).toBeInTheDocument();
  });

  it("renders a button with an aria label", () => {
    const { getByLabelText } = render(
      <Favorite ariaLabel="save song" handleClick={() => {}} />,
    );
    expect(getByLabelText(/save song/i)).toBeInTheDocument();
  });

  it("sets the handleClick callback as a click listener", async () => {
    const clickCb = jest.fn();

    const { getByLabelText } = render(
      <Favorite ariaLabel="save song" handleClick={clickCb} />,
    );

    const sut = getByLabelText(/save song/i);
    userEvent.click(sut);
    expect(clickCb).toHaveBeenCalled();
  });

  it("forwards all the ...props", async () => {
    const { getByLabelText, container } = render(
      <Favorite
        id="test_id"
        disabled
        ariaLabel="save song"
        handleClick={() => {}}
      />,
    );

    const sut = getByLabelText(/save song/i);
    expect(container.querySelector("#test_id")).toBeInTheDocument();
    expect(sut).toBeDisabled();
  });
});
