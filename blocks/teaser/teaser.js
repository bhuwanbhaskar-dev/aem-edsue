/**
 * Adds a zoom effect to image using event listeners.
 *
 * When the CTA button is hovered over, the image zooms in.
 *
 * @param {HTMLElement} block represents the block's' DOM tree
 */
function addEventListeners(block) {
  block.querySelector('.button')?.addEventListener('mouseover', () => {
    block.querySelector('.image')?.classList.add('zoom');
  });

  block.querySelector('.button')?.addEventListener('mouseout', () => {
    block.querySelector('.image')?.classList.remove('zoom');
  });
}

/**
 * Entry point to block's JavaScript.
 * Must be exported as default and accept a block's DOM element.
 *
 * @param {HTMLElement} block represents the block's' DOM element/tree
 */
export default function decorate(block) {
  /* This JavaScript makes minor adjustments to the block's DOM */

  // Dress the DOM elements with semantic CSS classes so it's obvious what they are.
  // Add a class to the first picture element to target it with CSS
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('image-wrapper');
    // Use previously applied classes to target new elements
    picture.querySelector('img')?.classList.add('image');
  }

  // Mark the second/last div as the content area
  const content = block.querySelector(':scope > div:last-child');
  if (content) {
    content.classList.add('content');
  }

  // Mark the first H1-H6 as a title
  block.querySelector('h1,h2,h3,h4,h5,h6')?.classList.add('title');

  // Process each paragraph and mark it as terms-and-conditions if applicable
  block.querySelectorAll('p').forEach((p) => {
    const innerHTML = p.innerHTML?.trim();
    if (innerHTML?.startsWith('Terms and conditions:')) {
      p.classList.add('terms-and-conditions');
    }
  });

  // Add event listeners to the block
  addEventListeners(block);
}
