import { outfitCatalog } from "../data/outfitCatalog";

export function generateOutfit(personalInfo, stylePreferences) {
  const match = outfitCatalog.find(item =>
    item.gender === personalInfo.gender &&
    item.style === stylePreferences.preferredStyle &&
    item.occasion === stylePreferences.occasion &&
    item.bodyType === personalInfo.bodyType
  );

  if (!match) {
    return {
      message: "No perfect match found. Showing a generic recommendation.",
      fallback: true
    };
  }

  return match.outfit;
}
