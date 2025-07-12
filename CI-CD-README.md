# CI/CD Pipeline for Women Pioneers in STEM Project

This repository now includes a comprehensive CI/CD pipeline that automatically checks code quality and deploys to GitHub Pages.

## 🚀 CI/CD Features

### ✅ JavaScript Syntax Checking
- **Node.js Syntax Validation**: Checks all `.js` files for syntax errors
- **ESLint Integration**: Advanced linting with custom rules
- **HTML Validation**: Validates HTML structure and accessibility

### 🧪 Automated Testing
- **File Existence Checks**: Ensures all required files are present
- **URL Validation**: Tests external links and references
- **Build Verification**: Confirms the project can be built successfully

### 📦 Automatic Deployment
- **GitHub Pages**: Automatic deployment on successful CI
- **Custom Domain Support**: Works with existing CNAME configuration
- **Branch Protection**: Only deploys from main/master branch

## 📋 Pipeline Stages

### 1. Lint Stage
```bash
# JavaScript syntax check
node -c file.js

# ESLint validation
npm run lint

# HTML validation
npm run validate
```

### 2. Test Stage
```bash
# Run all tests
npm run ci

# Check required files
npm run check-syntax
```

### 3. Deploy Stage
- Only runs on main/master branch
- Deploys to GitHub Pages
- Supports custom domains via CNAME

## 🛠️ Local Development

### Prerequisites
```bash
npm install
```

### Available Scripts
```bash
# Start local development server
npm start

# Run syntax checks
npm run check-syntax

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Run full CI locally
npm run ci

# Validate HTML
npm run validate
```

## 🔧 Configuration

### ESLint Rules
- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Unused Variables**: Warning
- **Console Logs**: Allowed (for debugging)

### GitHub Actions
- **Triggers**: Push to main/master, Pull Requests
- **Node.js Version**: 18.x
- **Cache**: npm dependencies
- **Deployment**: Automatic to GitHub Pages

## 📊 Status Badges

Add these badges to your README.md:

```markdown
![CI/CD](https://github.com/{username}/{repo}/workflows/CI/CD%20Pipeline/badge.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2021-yellow)
![License](https://img.shields.io/badge/License-CC%20BY%204.0-blue)
```

## 🚨 Troubleshooting

### Common Issues

1. **ESLint Errors**
   ```bash
   npm run lint:fix
   ```

2. **Syntax Errors**
   ```bash
   npm run check-syntax
   ```

3. **Deployment Failures**
   - Check GitHub Pages settings
   - Verify CNAME file if using custom domain
   - Ensure all required files exist

### Debug Commands
```bash
# Check all JavaScript files
find . -name "*.js" -not -path "./node_modules/*" -exec node -c {} \;

# Validate HTML
html-validate index.html

# Test URLs
node test-urls.js
```

## 📈 Benefits

- **Quality Assurance**: Automatic code quality checks
- **Consistent Deployment**: Standardized deployment process
- **Error Prevention**: Catches issues before they reach production
- **Developer Experience**: Clear feedback on code quality
- **Automation**: Reduces manual deployment steps

## 🔄 Workflow

1. **Develop**: Make changes locally
2. **Test**: Run `npm run ci` locally
3. **Commit**: Push to main/master branch
4. **Automate**: CI/CD pipeline runs automatically
5. **Deploy**: Successful builds deploy to GitHub Pages

## 📞 Support

For issues with the CI/CD pipeline:
1. Check the GitHub Actions tab
2. Review the workflow logs
3. Run local tests with `npm run ci`
4. Create an issue with detailed error information

---

*This CI/CD setup ensures high code quality and reliable deployments for the Women Pioneers in STEM project.* 