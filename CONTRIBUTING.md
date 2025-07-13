# Contributing to Women Pioneers in STEM

Thank you for your interest in contributing to Women Pioneers in STEM! This project aims to inspire girls, young women, and educators by celebrating the achievements and stories of women who have been pioneers in Science, Technology, Engineering, and Mathematics.

## 📄 License Agreement

By contributing to this project, you agree that your contributions will be licensed under the same [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) as the rest of the project.

## 🖼️ Image Licensing Requirements

**IMPORTANT**: All images submitted to this project must be properly licensed for reuse. We only accept images that are:

- **Creative Commons licensed** (CC0, CC BY, CC BY-SA, etc.)
- **Public domain** (no copyright restrictions)
- **Open source** with appropriate attribution
- **Your own original work** that you're willing to license under CC BY 4.0

**We do NOT accept:**
- Copyrighted images without explicit permission
- Images from commercial stock photo sites (unless you own the rights)
- Screenshots or images from other websites without proper licensing
- AI-generated images unless you have the rights to use them commercially

**When adding images:**
1. **Verify the license** - Check that the image is actually CC licensed or public domain
2. **Provide attribution** - Include source and license information in your pull request
3. **Use descriptive filenames** - Name files as `firstname-lastname.jpg` (e.g., `ada-lovelace.jpg`)
4. **Optimize file size** - Keep images under 1MB when possible
5. **Use appropriate formats** - JPG for photos, PNG for graphics, SVG for icons

**Examples of acceptable sources:**
- Wikimedia Commons (check individual image licenses)
- Smithsonian Institution (public domain)
- Library of Congress (public domain)
- Your own photography of public domain works
- Original artwork you create

## How to Contribute

### Adding New Pioneer Profiles

**IMPORTANT EFFICIENCY NOTE**: Before spending time researching and writing metadata for a potential new pioneer, **always check if they are already included in the project**. Use `grep` or search the `js/pioneers/` directory to verify the pioneer's name is not already present. This saves significant time and prevents duplicate work.

1. **Fork the repository**
2. **Check for duplicates first** - Search the existing pioneers to ensure the person is not already included
3. **Add your pioneer to `js/pioneers/`** following the current data structure (see existing JSON files for reference). Each entry is an object with fields such as:
   - `name`, `photo`, `birthDate`, `deathDate`, `country`, `fields`, `roles`, `quote`, `summary`, `shortDescription`, `achievements`, `fun_fact`, and additional metadata (see `add-pioneer.js` for template)
   - Only **female** pioneers are accepted. No male pioneers will be included.
   - Each pioneer must be unique by name. The system deduplicates by name, but please avoid adding duplicates. (Currently 100 unique pioneers)
   - **Every pioneer must have a `shortDescription` field** with an engaging, student-friendly paragraph (2-3 sentences) explaining their impact and significance
   - **Real images are strongly preferred** - use JPG, WEBP, or PNG files when available. If no suitable image can be found, the diverse icon system will automatically provide appropriate fallback representation
   - Images should be placed in `images/` and use `.jpg`, `.png`, or `.svg` (see PROJECT-REFERENCE.md for details)
   - **Only valid, non-empty images are accepted. Do not add empty or broken image files.**
   - **All fields used in the data must have an explanation in the UI.**
   - **All images must be properly licensed for reuse** (see Image Licensing Requirements above)

3. **Required fields:** `name`, `fields`, `summary`
4. **Optional fields:** See the template in `add-pioneer.js` or existing entries

### Content Guidelines

- **Ensure biographical information is accurate and well-sourced**
- **Focus on achievements and impact that would inspire young women**
- **Include diverse representation across STEM fields, countries, and time periods**
- **Write in an engaging, accessible style appropriate for the target audience**
- **Verify information from reliable sources before submitting**
- **Remove any duplicate entries by name for clarity**
- **Verify image licensing before submitting** - include source and license information
- **Provide high-quality, comprehensive metadata** - Each pioneer should have complete information including achievements, quotes, and engaging descriptions that will inspire students

### Submitting Changes

1. Create a descriptive commit message
2. Submit a pull request with:
   - Clear description of changes
   - Reason for the addition/modification
   - Any relevant links or references
   - **Image source and license information** (if adding images)
   - Confirmation that you agree to CC BY 4.0 licensing
   - **Run linting and formatting tools before submitting your pull request.**

## Attribution Guidelines

When contributing:

- You will be credited in commit history
- Significant contributions may be acknowledged in documentation
- All contributions become part of the CC BY 4.0 licensed work
- You retain the right to be attributed for your specific contributions
- **Image sources will be properly attributed** in the project documentation

## Code of Conduct

- Be respectful and inclusive
- Focus on educational and inspirational value
- Ensure accuracy of information
- Help maintain code quality
- **Respect intellectual property rights** - only use properly licensed images
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
