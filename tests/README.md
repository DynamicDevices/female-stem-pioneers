# UI Tests for Female STEM Pioneers

This directory contains Playwright UI tests for the Female STEM Pioneers website.

## Test Structure

- `ui.spec.js` - Main UI test suite covering:
  - Homepage loading
  - Pioneer card rendering
  - Expand/collapse functionality
  - Search and filter functionality
  - Responsive design
  - Accessibility features
  - Error-free loading

## Running Tests

### Local Development
```bash
# Run all tests
npm test

# Run tests with UI (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test tests/ui.spec.js
```

### CI/CD
Tests run automatically in GitHub Actions on:
- Every push to main/master
- Every pull request

## Test Configuration

- **Base URL**: `http://localhost:8000`
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Server**: Automatically starts Python HTTP server on port 8000
- **Timeouts**: 10-12 seconds for element waits, 120 seconds for server startup

## Test Coverage

### Core Functionality
- ✅ Homepage loads successfully
- ✅ All 107 pioneer cards render
- ✅ Pioneer details expand/collapse
- ✅ Search functionality works
- ✅ Filter functionality works
- ✅ Images/fallback icons display

### Responsive Design
- ✅ Mobile viewport (375x667)
- ✅ Tablet viewport (768x1024)
- ✅ Desktop viewport (1920x1080)

### Accessibility
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ No console errors

## Adding New Tests

1. Create new test files in the `tests/` directory
2. Follow the existing pattern in `ui.spec.js`
3. Use descriptive test names
4. Include appropriate waits and assertions
5. Test both success and error scenarios

## Debugging Tests

```bash
# Run tests in debug mode
npx playwright test --debug

# Show test report
npx playwright show-report

# Run specific test with trace
npx playwright test --trace on
```

## CI Integration

The tests are integrated into the GitHub Actions CI/CD pipeline:
- Runs on Ubuntu latest
- Installs Playwright browsers automatically
- Runs in headless mode
- Fails the build if tests fail
- Generates HTML reports for debugging 