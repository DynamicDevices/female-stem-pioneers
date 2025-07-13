# Contributing to Women Pioneers in STEM

Thank you for your interest in contributing to Women Pioneers in STEM! This project aims to inspire girls, young women, and educators by celebrating the achievements and stories of women who have been pioneers in Science, Technology, Engineering, and Mathematics.

## 📄 License Agreement

By contributing to this project, you agree that your contributions will be licensed under the same [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) as the rest of the project.

## How to Contribute

### Adding New Pioneer Profiles

1. **Fork the repository**
2. **Add your pioneer to `js/pioneers.js`** following the current data structure (see existing entries for reference). Each entry is an object with fields such as:
   - `name`, `photo`, `birthDate`, `deathDate`, `country`, `fields`, `roles`, `quote`, `summary`, `shortDescription`, `achievements`, `fun_fact`, and additional metadata (see `add-pioneer.js` for template)
   - Only **female** pioneers are accepted. No male pioneers will be included.
   - Each pioneer must be unique by name. The system deduplicates by name, but please avoid adding duplicates. (Currently 100+ unique pioneers)
   - **Every pioneer must have a `shortDescription` field** with an engaging, student-friendly paragraph (2-3 sentences) explaining their impact and significance
   - **Real images are strongly preferred** - use JPG, WEBP, or PNG files when available. Only use `./images/placeholder.jpg` if no suitable image can be found
   - Images should be placed in `images/` and use `.jpg`, `.png`, or `.svg` (see PROJECT-REFERENCE.md for details)
   - **Only valid, non-empty images are accepted. Do not add empty or broken image files.**
   - **All fields used in the data must have an explanation in the UI.**

3. **Required fields:** `name`, `fields`, `summary`
4. **Optional fields:** See the template in `add-pioneer.js` or existing entries

### Content Guidelines

- Ensure biographical information is accurate and well-sourced
- Focus on achievements and impact that would inspire young women
- Include diverse representation across STEM fields, countries, and time periods
- Write in an engaging, accessible style appropriate for the target audience
- Verify information from reliable sources before submitting
- Remove any duplicate entries by name for clarity

### Submitting Changes

1. Create a descriptive commit message
2. Submit a pull request with:
   - Clear description of changes
   - Reason for the addition/modification
   - Any relevant links or references
   - Confirmation that you agree to CC BY 4.0 licensing
   - **Run linting and formatting tools before submitting your pull request.**

## Attribution Guidelines

When contributing:

- You will be credited in commit history
- Significant contributions may be acknowledged in documentation
- All contributions become part of the CC BY 4.0 licensed work
- You retain the right to be attributed for your specific contributions

## Code of Conduct

- Be respectful and inclusive
- Focus on educational and inspirational value
- Ensure accuracy of information
- Help maintain code quality
- Respect intellectual property rights
- Support the mission of inspiring girls and young women in STEM

## Types of Contributions Welcome

- **New pioneer profiles** - Add women who have made significant contributions to STEM
- **Content improvements** - Enhance existing profiles with more details or better writing
- **Educator resources** - Add lesson plans, discussion prompts, or classroom activities
- **Accessibility** - Enhance usability features for diverse learners
- **Performance** - Optimize loading and functionality
- **Translations** - Help make content accessible globally
- **Design improvements** - Enhance the visual appeal and user experience

## For Educators

We especially welcome contributions from educators who can:

- Suggest pioneer profiles that work well in classroom settings
- Share lesson ideas that use these profiles effectively
- Provide feedback on how to make content more engaging for students
- Contribute resources for different age groups and learning styles

## Questions?

Open an issue for questions or suggestions! We're here to help make STEM education more inspiring and accessible for girls and young women.

---

_By contributing, you're helping inspire the next generation of women in STEM under Creative Commons licensing._
