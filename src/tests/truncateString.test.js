import { truncateString } from "../utils/truncateString";

const textTest1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat dapibus euismod. Aenean rhoncus dapibus dui, non viverra ligula bibendum eu. Proin et neque iaculis mi ornare rutrum ac et mauris. Duis tincidunt aliquet condimentum. Suspendisse gravida enim bibendum enim pellentesque, non dictum felis elementum. Nulla volutpat mauris felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis sem est. Aenean blandit, lacus ac faucibus ornare, turpis tortor ullamcorper dolor, at viverra eros risus ut nisl. Proin at orci eget dui ullamcorper congue vel et lorem. Aenean tempor velit nisl, vel facilisis arcu ultrices a. Etiam eget eros in elit efficitur elementum. Donec sed enim arcu. In nec finibus magna."
const textTruncateTest1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat dapibus euismod. Aenean rhoncus dapibus dui, non viverra ligula bibendum eu. Proin et neque iaculis mi ornare rutrum ac et mauris. Duis tincidunt aliquet condimentum. Suspendisse gravi..."

const textTest2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat dapibus euismod. Aenean rhoncus dapibus dui, non viverra ligula bibendum eu. Proin et neque iaculis mi ornare rutrum ac et mauris."
const textTruncateTest2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat dapibus euismod. Aenean rhoncus dapibus dui, non viverra ligula bibendum eu. Proin et neque iaculis mi ornare rutrum ac et mauris."


test(`The trucate text of ${textTest1} is ${textTruncateTest1}`, () => {
    expect(truncateString(textTest1)).toBe(textTruncateTest1);
});

test(`The truncate text of ${textTest2} is ${textTruncateTest2}`, () => {
    expect(truncateString(textTest2)).toBe(textTruncateTest2);
});