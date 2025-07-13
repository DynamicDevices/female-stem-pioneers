const { test, expect } = require('@playwright/test');

test.describe('Female STEM Pioneers Website', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('http://localhost:8000');
  });

  test('should load the homepage successfully', async ({ page }) => {
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/Female STEM Pioneers/);
    
    // Verify the main heading is present
    await expect(page.locator('h1')).toContainText('Female STEM Pioneers');
  });

  test('should display pioneer cards', async ({ page }) => {
    // Wait for pioneer cards to load
    await page.waitForSelector('.pioneer-card', { timeout: 10000 });
    
    // Check that multiple pioneer cards are displayed
    const pioneerCards = page.locator('.pioneer-card');
    await expect(pioneerCards).toHaveCount(107); // Total number of pioneers
    
    // Verify that at least one card has the expected structure
    const firstCard = pioneerCards.first();
    await expect(firstCard.locator('.pioneer-name')).toBeVisible();
    await expect(firstCard.locator('.pioneer-image')).toBeVisible();
  });

  test('should expand and collapse pioneer details', async ({ page }) => {
    // Wait for pioneer cards to load
    await page.waitForSelector('.pioneer-card', { timeout: 10000 });
    
    // Click on the first pioneer card to expand it
    const firstCard = page.locator('.pioneer-card').first();
    await firstCard.click();
    
    // Wait for the expanded content to appear
    await page.waitForSelector('.pioneer-details', { timeout: 5000 });
    
    // Verify that the details section is visible
    const detailsSection = firstCard.locator('.pioneer-details');
    await expect(detailsSection).toBeVisible();
    
    // Click again to collapse
    await firstCard.click();
    
    // Verify that the details section is hidden
    await expect(detailsSection).not.toBeVisible();
  });

  test('should have working search functionality', async ({ page }) => {
    // Wait for the search input to be available
    await page.waitForSelector('#search-input', { timeout: 5000 });
    
    // Type in a search term
    await page.fill('#search-input', 'Marie Curie');
    
    // Wait for search results to filter
    await page.waitForTimeout(1000);
    
    // Verify that Marie Curie's card is visible
    const marieCurieCard = page.locator('.pioneer-card').filter({ hasText: 'Marie Curie' });
    await expect(marieCurieCard).toBeVisible();
  });

  test('should have working filter functionality', async ({ page }) => {
    // Wait for filter controls to be available
    await page.waitForSelector('#field-filter', { timeout: 5000 });
    
    // Select a field filter
    await page.selectOption('#field-filter', 'Physics');
    
    // Wait for filtering to complete
    await page.waitForTimeout(1000);
    
    // Verify that filtered results are shown
    const visibleCards = page.locator('.pioneer-card:not([style*="display: none"])');
    await expect(visibleCards).toHaveCount.greaterThan(0);
  });

  test('should display pioneer images or fallback icons', async ({ page }) => {
    // Wait for pioneer cards to load
    await page.waitForSelector('.pioneer-card', { timeout: 10000 });
    
    // Check that all pioneer cards have either an image or fallback icon
    const pioneerImages = page.locator('.pioneer-image img, .pioneer-image svg');
    await expect(pioneerImages).toHaveCount(107);
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.pioneer-card')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('.pioneer-card')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('.pioneer-card')).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    
    // Verify that focus is visible on interactive elements
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should load all pioneer data without errors', async ({ page }) => {
    // Check for any console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
    
    // Verify no critical errors occurred
    expect(errors.length).toBe(0);
  });
}); 