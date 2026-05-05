import { loadChecklist, getCompletionRatio } from "../src/utils/checklistLoader.js";

// Mock fetch for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () =>
      Promise.resolve(`
- [x] Profile picture uploaded
- [ ] Verified badge applied
- [x] Business hours updated
`)
  })
);

describe("Checklist Loader", () => {
  test("parses checklist items correctly", async () => {
    const items = await loadChecklist("checklists/facebook-page.md");

    expect(items.length).toBe(3);
    expect(items[0]).toEqual({
      text: "Profile picture uploaded",
      completed: true
    });
    expect(items[1]).toEqual({
      text: "Verified badge applied",
      completed: false
    });
  });

  test("calculates completion ratio correctly", async () => {
    const items = await loadChecklist("checklists/facebook-page.md");
    const ratio = getCompletionRatio(items);

    // 2 completed out of 3 items = 0.666...
    expect(ratio).toBeCloseTo(0.67, 2);
  });

  test("handles empty checklist gracefully", () => {
    const ratio = getCompletionRatio([]);
    expect(ratio).toBe(0);
  });
});
