/**
 * Scoring model for Digital Marketing Checklist
 * Each category contributes a weighted percentage to the final score.
 */

const weights = {
  accountSetup: 0.30,     // 30%
  contentEngagement: 0.25, // 25%
  adsPromotions: 0.15,    // 15%
  securityAuthority: 0.15, // 15%
  analyticsReporting: 0.15 // 15%
};

/**
 * Calculate weighted score
 * @param {Object} checklistResults - Object with category completion ratios
 * Example:
 * {
 *   accountSetup: 0.7,          // 70% of items complete
 *   contentEngagement: 0.5,
 *   adsPromotions: 0.3,
 *   securityAuthority: 0.75,
 *   analyticsReporting: 0.4
 * }
 * @returns {Number} Final score (0–100)
 */
export function calculateScore(checklistResults) {
  let total = 0;

  for (const category in weights) {
    const completion = checklistResults[category] || 0;
    total += completion * weights[category] * 100;
  }

  return Math.round(total);
}

/**
 * Get qualitative rating based on score
 * @param {Number} score
 * @returns {String} Rating
 */
export function getRating(score) {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Needs Improvement";
  return "Critical";
}
