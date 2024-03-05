document.addEventListener("DOMContentLoaded", function() {
    const priceSlider = document.getElementById("priceSlider");
    const priceValue = document.getElementById("priceValue");
    const billingPeriod = document.getElementById("billingPeriod");
    const pageviews = document.getElementById("pageviews");

    const pageViewRanges = ["10K", "50K", "100K", "500K", "1M"];
    const monthlyPrices = [8, 12, 16, 24, 36];

    function updatePrices() {
        const selectedIndex = parseInt(priceSlider.value);
        const monthlyPrice = monthlyPrices[selectedIndex];
        const pageView = pageViewRanges[selectedIndex];

        // Update view count
        pageviews.textContent = pageView;

        // Calculate monthly and annual prices
        let monthlyTotal = monthlyPrice;
        let annualTotal = 0;

        if (billingType.checked) {
            monthlyTotal = monthlyPrice * 12 * 0.75;
            annualTotal = monthlyPrice * 12;
            priceValue.textContent = monthlyTotal;
            billingPeriod.textContent = '/annual';
        } else {
            monthlyTotal = monthlyPrice;
            annualTotal = monthlyPrice * 12;
            priceValue.textContent = monthlyTotal;
            billingPeriod.textContent = '/month';
        }
    }

  

    // Event listeners
    priceSlider.addEventListener("input", () => {
        updatePrices();
        updateSliderBackground();
    });

    const billingType = document.getElementById("billingType");
    billingType.addEventListener("change", updatePrices);

    // Initial updates
    updatePrices();
    updateSliderBackground();
});


 function updateSliderBackground() {
    const priceSlider = document.getElementById("priceSlider");
    const sliderValue = (priceSlider.value - priceSlider.min) / (priceSlider.max - priceSlider.min) * 100;
    priceSlider.style.background = `linear-gradient(to right, #10dac6 ${sliderValue}%, #d1daf5 ${sliderValue}%)`;
}