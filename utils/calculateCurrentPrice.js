export function calculateCurrentPrice(originalPrice, discountPercentage) {
    if (originalPrice >= 0 && discountPercentage >= 0 && discountPercentage <= 100) {
        const discountAmount = Math.floor((originalPrice * discountPercentage) / 100);
        const currentPrice = originalPrice - discountAmount;
        return currentPrice;
    } else {
        console.error("Original price and discount percentage must be greater than or equal to 0, and discount percentage must be less than or equal to 100.");
        return null;
    }
}