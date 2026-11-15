// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://talenceyouth.fr',
  // digiminds.html, servi par Netlify à l'adresse /digiminds ; les anciens liens en .html marchent toujours
  build: { format: 'file' },
  trailingSlash: 'never',
  image: {
    responsiveStyles: false,
  },
});
