import { calculateScore, getRating } from "../src/utils/scoring.js";

describe("Scoring Model", () => {
  test("calculates score correctly with full completion", () => {
    const results = {
      accountSetup: 1,
      contentEngagement: 1,
      adsPromotions: 1,
      securityAuthority: 1,
      analyticsReporting: 1
    };
    const score = calculateScore(results);
    expect(score).toBe(100);
    expect(getRating(score)).toBe("Excellent");
  });

  test("calculates score correctly with partial completion", () => {
    const results = {
      accountSetup: 0.5, // 50%
      contentEngagement: 0.5,
      adsPromotions: 0.5,
      securityAuthority: 0.5,
      analyticsReporting: 0.5
    };
    const score = calculateScore(results);
    expect(score).toBe(50); // Weighted average
    expect(getRating(score)).toBe("Needs Improvement");
  });

  test("handles missing categories gracefully", () => {
    const results = {
      accountSetup: 0.8,
      contentEngagement: 0.6
      // others missing
    };
    const score = calculateScore(results);
    expect(score).toBeGreaterThan(0);
    expect(getRating(score)).toMatch(/Good|Needs Improvement|Critical/);
  });

  test("returns Critical rating for very low score", () => {
    const results = {
      accountSetup: 0.1,
      contentEngagement: 0.1,
      adsPromotions: 0.1,
      securityAuthority: 0.1,
      analyticsReporting: 0.1
    };
    const score = calculateScore(results);
    expect(score).toBeLessThan(40);
    expect(getRating(score)).toBe("Critical");
  });
});
