# Female STEM Pioneers Project Reference

This project is a static web app that celebrates and highlights WOMEN pioneers in STEM (Science, Technology, Engineering, and Mathematics) fields. It features:

- A searchable, filterable, and sortable gallery of FEMALE STEM pioneers only
- Individual info cards with biography, achievements, quotes, fun facts, and inspirational resources
- Modern, responsive UI with category badges, section highlights, and accessible design
- Images for each female pioneer (photo, artistic, or symbolic if no photo exists)
- Data-driven: all pioneer info is managed in `js/pioneers.js` (currently 100+ unique pioneers)
- Easy to add new FEMALE pioneers via `js/pioneers.js`

## Adding New Pioneers

When adding new pioneers to the project, please ensure:

1. **About Paragraph Required**: Every pioneer must have a `shortDescription` field with an engaging, student-friendly paragraph (2-3 sentences) that explains their impact and significance
2. **Image Preference**: Real images (JPG, WEBP, PNG) are strongly preferred over placeholders. Only use `./images/placeholder.jpg` if no suitable image can be found
3. **Uniqueness**: Each pioneer must be unique by name - the system deduplicates by name automatically
4. **Complete Data**: Include all required fields: name, photo, birthDate, country, fields, roles, quote, summary, shortDescription, achievements, and references