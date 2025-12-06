# COMPLETE LAYOUT DOCUMENTATION
## Products (Collection) Page & Contact Page

---

# TABLE OF CONTENTS
1. [PRODUCTS/COLLECTION PAGE](#products-collection-page)
   - Hero Banner Section
   - Products Grid Section
   - Bundle Section
   - Lifestyle Gallery Section
   - Trust Bar Section
2. [CONTACT PAGE](#contact-page)
   - Hero Section
   - Contact Information & Form Section

---

# PRODUCTS / COLLECTION PAGE

## SECTION 1: PAGE HERO BANNER
**File:** `client/pages/Products.tsx` (Lines 13-42)

### Layout Structure
- **Container Type:** Full-width relative positioned section
- **Height:** 
  - Mobile: `h-64` (256px)
  - Small screens: `sm:h-80` (320px)
  - Medium & up: `md:h-96` (384px)
- **Overflow:** Hidden
- **Background Color:** `#1c1917` (Dark Stone)

### Background Image
- **Image URL:** Builder.io asset (Products banner image)
- **Dimensions:** 1200px width × 400px height
- **Object Fit:** Cover
- **Position:** Absolute (inset-0 - covers full section)
- **Overlay:** Black overlay with 30% opacity (`bg-black/30`)

### Content Container
- **Type:** Flex column, centered
- **Padding:**
  - Horizontal: `px-4` (16px mobile) | `sm:px-6` (24px) | `lg:px-8` (32px)
  - Vertical: Centered with flex
- **Text Alignment:** Center
- **Z-index:** `z-10` (above overlay)
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto` (centered)

### Content Elements

#### Label (Breadcrumb)
- **Font Size:** `text-xs` (12px)
- **Font Weight:** `font-light` (300)
- **Letter Spacing:** `tracking-widest` (0.15em)
- **Text Transform:** Uppercase
- **Color:** `text-stone-300` (Light gray/beige)
- **Margin Bottom:** `mb-4` (16px)
- **Translation Key:** `products.pageLabel` (Default: "Products")

#### Main Heading
- **Font Size:** 
  - Mobile: `text-4xl` (36px)
  - Small: `sm:text-5xl` (48px)
  - Medium: `md:text-6xl` (60px)
- **Font Weight:** `font-light` (300)
- **Letter Spacing:** `tracking-tight` (-0.025em)
- **Color:** `text-white`
- **Margin Bottom:** `mb-4` (16px)
- **Line Height:** Default
- **Translation Key:** `products.pageHeading` (Default: "Our Handmade Pillows")

#### Subheading/Description
- **Font Size:**
  - Mobile: `text-sm` (14px)
  - Small: `sm:text-base` (16px)
  - Medium: `md:text-lg` (18px)
- **Font Weight:** `font-light` (300)
- **Color:** `text-white/90` (90% opacity white)
- **Max Width:** `max-w-2xl` (672px)
- **Margin:** `mx-auto` (centered)
- **Translation Key:** `products.pageDescription`

---

## SECTION 2: PRODUCTS GRID
**File:** `client/pages/Products.tsx` (Lines 43-77)

### Section Container
- **Padding:**
  - Vertical: `py-16` (64px mobile) | `md:py-24` (96px desktop)
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Background:** `bg-white`
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`

### Section Header
- **Container:** Text centered
- **Margin Bottom:** `mb-12` (48px) | `md:mb-16` (64px)

#### Section Heading
- **Font Size:** `text-3xl` (30px) | `md:text-4xl` (36px)
- **Font Weight:** `font-light` (300)
- **Letter Spacing:** `tracking-tight`
- **Color:** `text-stone-900`
- **Margin Bottom:** `mb-4` (16px)
- **Translation Key:** `products.collectionHeading` (Default: "Our Collection")

#### Section Description
- **Font Size:** Default (16px)
- **Font Weight:** `font-light` (300)
- **Color:** `text-stone-600`
- **Max Width:** `max-w-2xl` (672px)
- **Margin:** `mx-auto`
- **Translation Key:** `products.collectionDescription`

### Products Grid Layout
- **Grid Type:** CSS Grid
- **Columns:**
  - Mobile: `grid-cols-1` (1 column)
  - Large: `lg:grid-cols-3` (3 columns)
- **Gap:** `gap-8` (32px) | `md:gap-10` (40px)
- **Margin Bottom:** `mb-20` (80px)

### Individual Product Card (Link Wrapper)
- **Component:** ProductCard component (see ProductCard.tsx details)
- **Link Styling:**
  - Group: `group` (for child transitions)
  - Cursor: `cursor-pointer`
  - Transition: `transition duration-300`

---

## PRODUCT CARD COMPONENT DETAILS
**File:** `client/components/ProductCard.tsx`

### Card Container
- **Type:** Div with hover group
- **Mouse Events:** Hover triggers image rotation

### Image Container
- **Height:**
  - Mobile: `h-64` (256px)
  - Small: `sm:h-80` (320px)
  - Medium: `md:h-96` (384px)
- **Gradient Background:** `bg-gradient-to-br from-stone-100 to-stone-50` (light beige gradient)
- **Border Radius:** `rounded-lg` (8px)
- **Overflow:** Hidden
- **Margin Bottom:** `mb-6` (24px)
- **Shadow:** `shadow-sm` default | `hover:shadow-2xl` on hover
- **Transition:** `transition duration-300`

### Image Stack
- **Behavior:** Multiple images cycle on hover every 2000ms (2 seconds)
- **Opacity Transition:** `duration-500` between images
- **Indicator Dots:**
  - Position: Bottom center
  - Style: Small circles (h-1.5, w-1.5)
  - Active dot: `w-6` (wider)
  - Colors: White for active, white/50 for inactive
  - Gap: `gap-1` (4px)

### Product Title
- **Font Size:** `text-xl` (20px)
- **Color:** `text-stone-900`
- **Font Weight:** `font-light` (300)
- **Margin Bottom:** `mb-2` (8px)

### Product Description
- **Font Size:** `text-sm` (14px)
- **Color:** `text-stone-600`
- **Font Weight:** `font-light` (300)
- **Margin Bottom:** `mb-4` (16px)

### Price & CTA Row
- **Layout:** Flex, space-between
- **Alignment:** Items center, justify-between

#### Price
- **Font Size:** `text-lg` (18px)
- **Color:** `text-stone-900`
- **Font Weight:** Default

#### Arrow Icon
- **Size:** 18px
- **Color:** `text-stone-700`
- **Transition:** `group-hover:translate-x-1` (1px right on hover)
- **Duration:** `transition` (smooth)

---

## SECTION 3: BUNDLE SECTION
**File:** `client/pages/Products.tsx` (Lines 79-234)

### Section Container
- **Padding:**
  - Vertical: `py-20` (80px mobile) | `md:py-28` (112px desktop)
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Background:** `bg-white`
- **Border Top:** `border-t border-stone-200`
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`

### Section Header
- **Text Alignment:** Center
- **Margin Bottom:** `mb-16` (64px) | `md:mb-20` (80px)

#### Label
- **Font Size:** `text-xs` (12px)
- **Font Weight:** `font-light` (300)
- **Letter Spacing:** `tracking-widest` (0.15em)
- **Text Transform:** Uppercase
- **Color:** `text-stone-600`
- **Margin Bottom:** `mb-3` (12px)

#### Main Heading
- **Font Size:** `text-4xl` (36px) | `md:text-5xl` (48px)
- **Font Weight:** `font-light` (300)
- **Letter Spacing:** `tracking-tight`
- **Color:** `text-stone-900`
- **Margin Bottom:** `mb-6` (24px)

#### Description
- **Font Size:** `text-lg` (18px)
- **Font Weight:** `font-light` (300)
- **Color:** `text-stone-600`
- **Max Width:** `max-w-2xl` (672px)
- **Margin:** `mx-auto`

### Bundle Options Grid (2 Cards)
- **Grid:** 1 column mobile, 2 columns on medium screens (`grid-cols-1 md:grid-cols-2`)
- **Gap:** `gap-8` (32px) | `md:gap-6` (24px)
- **Max Width:** `max-w-4xl` (896px)
- **Margin:** `mx-auto`

#### Card 1: Cover Only Option
- **Container:**
  - Padding: `p-8` (32px) | `md:p-10` (40px)
  - Border: `border border-stone-200`
  - Hover: `hover:border-stone-400`
  - Background Gradient: `bg-gradient-to-br from-stone-50 to-white`
  - Border Radius: `rounded-lg` (8px)
  - Layout: Flex column, `h-full` height to match sibling
  - Overflow: Hidden

- **Label:**
  - Font Size: `text-xs` (12px)
  - Font Weight: `font-light` (300)
  - Letter Spacing: `tracking-widest`
  - Text Transform: Uppercase
  - Color: `text-stone-500`
  - Margin Bottom: `mb-8` (32px)

- **Heading:**
  - Font Size: `text-2xl` (24px) | `md:text-3xl` (30px)
  - Font Weight: `font-light` (300)
  - Color: `text-stone-900`
  - Margin Bottom: `mb-3` (12px)
  - Text: "Putekasse alene"

- **Description:**
  - Font Size: `text-sm` (14px)
  - Font Weight: `font-light` (300)
  - Color: `text-stone-600`
  - Margin Bottom: `mb-8` (32px)
  - Line Height: `leading-relaxed`

- **Price Section:**
  - Margin Top: `mt-auto` (push to bottom)
  - Spacing: `space-y-6` (24px gap)
  
  - Price Display:
    - Flex items-baseline
    - Gap: `gap-2` (8px)
    - Amount: `text-4xl` (36px), `font-light`, `text-stone-900`
    - Currency: `text-sm` (14px), `text-stone-500`
    - Value: "599 kr"

- **Button:**
  - Width: `w-full` (100%)
  - Padding: `px-6 py-4` (24px × 16px)
  - Background: `bg-stone-900`
  - Hover: `hover:bg-stone-800`
  - Text Color: `text-white`
  - Font Weight: `font-light`
  - Text Transform: Uppercase
  - Letter Spacing: `tracking-wider`
  - Font Size: `text-sm` (14px)
  - Border Radius: `rounded-sm` (4px)
  - Transition: `transition duration-300`
  - Text: "Velg"

#### Card 2: With Pillow Option
- **Container:**
  - Padding: `p-8` (32px) | `md:p-10` (40px)
  - Border: `border-2 border-stone-900` (thicker border, emphasized)
  - Background Gradient: `bg-gradient-to-br from-stone-900 to-stone-800` (dark)
  - Border Radius: `rounded-lg` (8px)
  - Layout: Flex column, `h-full` height
  - Overflow: Hidden
  - Position: Relative

- **Badge (Top Right):**
  - Position: Absolute `top-6 right-6` (24px from edges)
  - Background: `bg-stone-700`
  - Text Color: `text-white`
  - Padding: `px-4 py-2` (16px × 8px)
  - Font Size: `text-xs` (12px)
  - Font Weight: `font-light`
  - Letter Spacing: `tracking-wider`
  - Text Transform: Uppercase
  - Border Radius: `rounded-full` (full circle)
  - Text: "Populær" (Popular)

- **Label:**
  - Font Size: `text-xs` (12px)
  - Font Weight: `font-light`
  - Letter Spacing: `tracking-widest`
  - Text Transform: Uppercase
  - Color: `text-stone-400`
  - Margin Bottom: `mb-8` (32px)

- **Heading:**
  - Font Size: `text-2xl` (24px) | `md:text-3xl` (30px)
  - Font Weight: `font-light`
  - Color: `text-white`
  - Margin Bottom: `mb-3` (12px)
  - Text: "Med innerpute"

- **Description:**
  - Font Size: `text-sm` (14px)
  - Font Weight: `font-light`
  - Color: `text-stone-300`
  - Margin Bottom: `mb-8` (32px)
  - Line Height: `leading-relaxed`

- **Price Section:**
  - Margin Top: `mt-auto`
  - Spacing: `space-y-6` (24px)
  
  - Price Container:
    - Margin Bottom: `mb-2` (8px)
    - Flex items-baseline
    - Gap: `gap-2` (8px)
  
  - Price:
    - Amount: `text-4xl` (36px), `font-light`, `text-white`
    - Currency: `text-sm` (14px), `text-stone-400`
    - Value: "1099 kr"
  
  - Savings:
    - Font Size: `text-sm` (14px)
    - Color: `text-stone-400`
    - Font Weight: `font-light`
    - Text: "Spar 100 kr"

- **Button:**
  - Width: `w-full` (100%)
  - Padding: `px-6 py-4` (24px × 16px)
  - Background: `bg-white`
  - Hover: `hover:bg-stone-50`
  - Text Color: `text-stone-900`
  - Font Weight: `font-light`
  - Text Transform: Uppercase
  - Letter Spacing: `tracking-wider`
  - Font Size: `text-sm` (14px)
  - Border Radius: `rounded-sm` (4px)
  - Transition: `transition duration-300`
  - Text: "Velg"

### Bundle Deals - Buy More Save More
**Sub-Section Container:**
- **Margin Top:** `mt-20` (80px)
- **Padding Top:** `pt-20` (80px)
- **Border Top:** `border-t border-stone-200`

**Header:**
- Text Alignment: Center
- Margin Bottom: `mb-12` (48px)

- Heading:
  - Font Size: `text-3xl` (30px) | `md:text-4xl` (36px)
  - Font Weight: `font-light`
  - Letter Spacing: `tracking-tight`
  - Color: `text-stone-900`
  - Margin Bottom: `mb-4` (16px)
  - Text: "Kjøp flere og spar!"

- Description:
  - Font Size: Default (16px)
  - Font Weight: `font-light`
  - Color: `text-stone-600`

**Grid Layout:**
- Columns: 1 mobile, 2 on medium (`grid-cols-1 md:grid-cols-2`)
- Gap: `gap-6` (24px)
- Max Width: `max-w-2xl` (672px)
- Margin: `mx-auto`

#### Card: Buy 2 Pillows
- **Container:**
  - Border: `border border-stone-200`
  - Hover: `hover:border-stone-900`
  - Background: `bg-white`
  - Padding: `p-8` (32px)
  - Border Radius: `rounded-lg` (8px)
  - Position: Relative
  - Layout: Flex column, justify-between
  - Height: `h-full`

- **Content Section:**
  - Margin Bottom: `mb-6` (24px)

  - Heading:
    - Font Size: `text-xl` (20px)
    - Font Weight: `font-light`
    - Color: `text-stone-900`
    - Margin Bottom: `mb-2` (8px)
    - Text: "Kjøp 2 puter"

  - Savings Badge:
    - Background: `bg-emerald-50` (light green)
    - Inline Block
    - Padding: `px-4 py-2` (16px × 8px)
    - Border Radius: `rounded-sm` (4px)
    - Text:
      - Font Size: `text-sm` (14px)
      - Color: `text-emerald-700`
      - Font Weight: `font-light`
      - Content: "Spar ca. 399 kr"

- **Price & CTA Section:**
  - Spacing: `space-y-4` (16px)

  - Price:
    - Flex items-baseline
    - Justify center
    - Gap: `gap-2` (8px)
    - Amount: `text-3xl` (30px), `font-light`, `text-stone-900`
    - Currency: `text-sm` (14px), `text-stone-500`, `font-light`
    - Value: "2 499 kr"

  - Button:
    - Width: `w-full`
    - Padding: `px-6 py-3` (24px × 12px)
    - Background: `bg-stone-900`
    - Hover: `hover:bg-stone-800`
    - Text Color: `text-white`
    - Font Weight: `font-light`
    - Text Transform: Uppercase
    - Letter Spacing: `tracking-wider`
    - Font Size: `text-xs` (12px)
    - Border Radius: `rounded-sm` (4px)
    - Transition: `transition duration-300`
    - Text: "Velg bundle"

#### Card: Buy 3 Pillows (Best Value)
- **Container:**
  - Border: `border-2 border-stone-900` (thicker, emphasized)
  - Background: `bg-stone-900` (dark)
  - Padding: `p-8` (32px)
  - Border Radius: `rounded-lg` (8px)
  - Position: Relative
  - Layout: Flex column, justify-between
  - Height: `h-full`

- **Badge (Top Right):**
  - Position: Absolute `top-4 right-4` (16px from edges)
  - Background: `bg-emerald-500`
  - Text Color: `text-white`
  - Padding: `px-3 py-1` (12px × 4px)
  - Font Size: `text-xs` (12px)
  - Font Weight: `font-light`
  - Letter Spacing: `tracking-wider`
  - Text Transform: Uppercase
  - Border Radius: `rounded-full`
  - Text: "Beste verdi" (Best Value)

- **Content Section:**
  - Margin Bottom: `mb-6` (24px)

  - Heading:
    - Font Size: `text-xl` (20px)
    - Font Weight: `font-light`
    - Color: `text-white`
    - Margin Bottom: `mb-2` (8px)
    - Text: "Kjøp 3 puter"

  - Savings Badge:
    - Background: `bg-emerald-600` (darker green)
    - Inline Block
    - Padding: `px-4 py-2` (16px × 8px)
    - Border Radius: `rounded-sm` (4px)
    - Text:
      - Font Size: `text-sm` (14px)
      - Color: `text-white`
      - Font Weight: `font-light`
      - Content: "Spar ca. 899 kr"

- **Price & CTA Section:**
  - Spacing: `space-y-4` (16px)

  - Price:
    - Flex items-baseline
    - Justify center
    - Gap: `gap-2` (8px)
    - Amount: `text-3xl` (30px), `font-light`, `text-white`
    - Currency: `text-sm` (14px), `text-stone-400`, `font-light`
    - Value: "3 499 kr"

  - Button:
    - Width: `w-full`
    - Padding: `px-6 py-3` (24px × 12px)
    - Background: `bg-white`
    - Hover: `hover:bg-stone-50`
    - Text Color: `text-stone-900`
    - Font Weight: `font-light`
    - Text Transform: Uppercase
    - Letter Spacing: `tracking-wider`
    - Font Size: `text-xs` (12px)
    - Border Radius: `rounded-sm` (4px)
    - Transition: `transition duration-300`
    - Text: "Velg bundle"

---

## SECTION 4: LIFESTYLE GALLERY
**File:** `client/pages/Products.tsx` (Lines 236-307)

### Section Container
- **Padding:**
  - Vertical: `py-20` (80px) | `md:py-32` (128px)
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Background Gradient:** `bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950` (dark diagonal gradient)
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`

### Section Header
- **Text Alignment:** Center
- **Margin Bottom:** `mb-16` (64px) | `md:mb-20` (80px)

#### Label
- **Font Size:** `text-xs` (12px)
- **Font Weight:** `font-light`
- **Letter Spacing:** `tracking-widest`
- **Text Transform:** Uppercase
- **Color:** `text-stone-400`
- **Margin Bottom:** `mb-4` (16px)
- **Translation Key:** `products.lifestyleLabel` (Default: "Lifestyle")

#### Main Heading
- **Font Size:** `text-4xl` (36px) | `md:text-5xl` (48px)
- **Font Weight:** `font-light`
- **Letter Spacing:** `tracking-tight`
- **Color:** `text-white`
- **Margin Bottom:** `mb-6` (24px)
- **Translation Key:** `products.lifestyleHeading` (Default: "VillaBella Lifestyle")

#### Description
- **Font Size:** `text-lg` (18px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-300`
- **Max Width:** `max-w-2xl` (672px)
- **Margin:** `mx-auto`
- **Translation Key:** `products.lifestyleDescription`

### Masonry Gallery Layout
- **Layout Type:** CSS Columns (Masonry)
- **Columns:**
  - Mobile: `columns-1` (1 column)
  - Medium: `md:columns-2` (2 columns)
  - Large: `lg:columns-3` (3 columns)
- **Gap:** `gap-8` (32px)
- **Space Between:** `space-y-8` (32px vertical spacing)

### Gallery Image Cards (6 total)
- **Container:**
  - Break: `break-inside-avoid` (prevents breaking in middle)
  - Overflow: Hidden
  - Border Radius: `rounded-lg` (8px)
  - Shadow: `shadow-2xl`
  - Hover Shadow: `hover:shadow-stone-900/30`
  - Transition: `transition duration-500`

- **Image:**
  - Width: `w-full` (full container width)
  - Height: `h-auto` (maintains aspect ratio)
  - Object Fit: Cover
  - Hover: `hover:scale-105` (5% zoom on hover)
  - Transition: `transition duration-500`
  - Dimensions: 600px width × 700px height

### Images in Gallery:
1. Rattan Chair - VillaBella Cushion
2. Beach Peacock - Cushion at Beach
3. Tote Bag Detail - with Cushion
4. Close-up Mosaic Design
5. Olive Branch Detail - Cushion with Olive
6. Palm Tree Lifestyle - Tote Bag in Tropical Setting

---

## SECTION 5: TRUST BAR
**File:** `client/pages/Products.tsx` (Lines 309-376)

### Section Container
- **Padding:**
  - Vertical: `py-20` (80px) | `md:py-28` (112px)
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Background Gradient:** `bg-gradient-to-br from-stone-50 to-stone-100` (light gradient)
- **Border Top:** `border-t border-stone-200`
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`

### Section Header
- **Text Alignment:** Center
- **Margin Bottom:** `mb-12` (48px) | `md:mb-16` (64px)

#### Heading
- **Font Size:** `text-2xl` (24px) | `md:text-3xl` (30px)
- **Font Weight:** `font-light`
- **Letter Spacing:** `tracking-tight`
- **Color:** `text-stone-900`
- **Margin Bottom:** `mb-2` (8px)
- **Translation Key:** `products.whyChoose` (Default: "Why Choose VillaBella")

#### Description
- **Font Size:** Default (16px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-600`
- **Max Width:** `max-w-xl` (448px)
- **Margin:** `mx-auto`
- **Translation Key:** `products.whyChooseDesc`

### Trust Items Grid
- **Grid:** 4 columns on medium screens (`md:grid-cols-4`)
- **Fallback:** 1 column mobile (`grid-cols-1`)
- **Gap:** `gap-8` (32px)

### Individual Trust Item (4 total)
1. Delivery
2. Made in Europe
3. Returns
4. Norwegian Shop

#### Item Container
- **Layout:** Flex column
- **Text Alignment:** Center
- **Spacing:** `space-y-4` (16px between elements)

#### Icon Container
- **Display:** Flex, justify center
- **Width:** `w-16` (64px)
- **Height:** `h-16` (64px)
- **Background Color:** `bg-stone-900`
- **Border Radius:** `rounded-full` (perfect circle)
- **Display:** Flex items center justify center
- **Border:** `border border-stone-700`

#### Icon
- **Size:** 28px
- **Color:** `text-stone-100`
- **Icons Used:** Truck, Leaf, RotateCcw, CheckCircle (from Lucide)

#### Title
- **Font Size:** `text-lg` (18px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-900`
- **Translation Keys:** 
  - `trust.delivery`, `trust.madeInEurope`, `trust.returns`, `trust.norwegianShop`

#### Description
- **Font Size:** `text-sm` (14px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-600`
- **Translation Keys:** 
  - `trust.deliveryDesc`, `trust.madeInEuropeDesc`, `trust.returnsDesc`, `trust.norwegianShopDesc`

---

# CONTACT PAGE

## SECTION 1: HERO SECTION
**File:** `client/pages/Contact.tsx` (Lines 22-53)

### Section Container
- **Layout:** Relative positioned
- **Padding:**
  - Vertical: `py-20` (80px mobile) | `md:py-32` (128px desktop)
  - Horizontal: Controlled by inner container
- **Overflow:** Hidden

### Background
- **Background Color:** `#1c1917` (Dark Stone)
- **Background Image:** Textured pattern (repeating)
- **Background Size:** Auto
- **Background Position:** 0 0
- **Background Repeat:** Repeat
- **Background Attachment:** Scroll

### Overlay
- **Position:** Absolute, full coverage (`inset-0`)
- **Gradient:** `bg-gradient-to-br from-stone-900/90 to-stone-950/90`
- **Pointer Events:** None (non-interactive)

### Content Container
- **Position:** Relative
- **Z-index:** `z-10` (above overlay)
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`
- **Padding:**
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Layout:** Flex column
- **Text Alignment:** Center

#### Main Heading
- **Font Size:** `text-5xl` (48px) | `md:text-6xl` (60px)
- **Font Weight:** `font-light`
- **Letter Spacing:** `tracking-tight`
- **Color:** `text-white`
- **Margin Bottom:** `mb-6` (24px)
- **Translation Key:** `contact.title` (Default: "Get in Touch")

#### Subtitle
- **Font Size:** `text-lg` (18px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-300`
- **Max Width:** `max-w-2xl` (672px)
- **Margin:** `mx-auto`
- **Translation Key:** `contact.subtitle`

---

## SECTION 2: CONTACT INFORMATION & FORM
**File:** `client/pages/Contact.tsx` (Lines 54-210)

### Section Container
- **Padding:**
  - Vertical: `py-20` (80px mobile) | `md:py-32` (128px desktop)
  - Horizontal: `px-4` (16px) | `sm:px-6` (24px) | `lg:px-8` (32px)
- **Background:** `bg-white`
- **Max Width:** `max-w-7xl` (1280px)
- **Margin:** `mx-auto`

### Main Grid
- **Grid Layout:** 3 columns on large screens
- **Column Span:** 1st col spans 1, 2nd spans 2 on large screens
- **Fallback:** 1 column mobile (`grid-cols-1 lg:grid-cols-3`)
- **Gap:** `gap-12` (48px)
- **Margin Bottom:** `mb-16` (64px)

---

### LEFT COLUMN: CONTACT INFORMATION (3 Cards)

#### Contact Info Card Container
- **Spacing:** `space-y-8` (32px between cards)

#### Individual Contact Item (Email, Phone, Address)

**Icon & Title Row:**
- **Layout:** Flex, items center
- **Gap:** `gap-4` (16px)
- **Margin Bottom:** `mb-4` (16px)

##### Icon Container
- **Width:** `w-12` (48px)
- **Height:** `h-12` (48px)
- **Background:** `bg-stone-900`
- **Border:** `border border-stone-700`
- **Border Radius:** `rounded-full` (circle)
- **Display:** Flex items center justify center

##### Icon
- **Size:** 24px
- **Color:** `text-stone-100`
- **Icons:** Mail, Phone, MapPin (from Lucide)

##### Title
- **Font Size:** `text-lg` (18px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-900`
- **Translation Keys:** `contact.email`, `contact.phone`, `contact.address`

**Contact Details:**
- **Main Info:**
  - Font Size: Default (16px)
  - Color: `text-stone-600`
  - Font Weight: `font-light`
  - Margin Left: `ml-16` (64px - aligns under text, not icon)
  - Content Examples:
    - Email: "hello@villabella.no"
    - Phone: "+47 99 99 99 99"
    - Address: "Ferner Jacobsens gate 15" / "0553 Oslo, Norway"

- **Sub Info (Email/Phone):**
  - Font Size: `text-sm` (14px)
  - Color: `text-stone-500`
  - Font Weight: `font-light`
  - Margin Left: `ml-16` (64px)
  - Margin Top: `mt-1` (4px)
  - Content Examples:
    - Email: "We'll respond within 24 hours"
    - Phone: "Monday - Friday, 10am - 6pm CET"

---

### RIGHT COLUMN: CONTACT FORM (Spans 2 columns)

#### Form Container
- **Layout:** Form element
- **Spacing:** `space-y-6` (24px between fields)

#### Form Field (4 total: Name, Email, Subject, Message)

**Label:**
- **Display:** Block
- **Font Size:** `text-sm` (14px)
- **Font Weight:** `font-light`
- **Color:** `text-stone-900`
- **Margin Bottom:** `mb-2` (8px)
- **Text Content:** Translated based on field type

**Text Input (Name, Email, Subject):**
- **Width:** `w-full` (100%)
- **Padding:**
  - Horizontal: `px-6` (24px)
  - Vertical: `py-4` (16px)
- **Border:** `border border-stone-300`
- **Border Radius:** `rounded-sm` (4px)
- **Font Weight:** `font-light`
- **Font Color:** `text-stone-900`
- **Placeholder Color:** `placeholder-stone-400`
- **Focus State:**
  - Outline: None
  - Ring: `focus:ring-2 focus:ring-stone-400`
- **Transition:** `transition`
- **Type Attributes:**
  - Name field: `type="text"`
  - Email field: `type="email"`, required
  - Subject field: `type="text"`
- **Placeholders:** Translated keys `contact.namePlaceholder`, etc.

**Textarea (Message):**
- **Width:** `w-full` (100%)
- **Padding:**
  - Horizontal: `px-6` (24px)
  - Vertical: `py-4` (16px)
- **Border:** `border border-stone-300`
- **Border Radius:** `rounded-sm` (4px)
- **Font Weight:** `font-light`
- **Font Color:** `text-stone-900`
- **Placeholder Color:** `placeholder-stone-400`
- **Focus State:**
  - Outline: None
  - Ring: `focus:ring-2 focus:ring-stone-400`
- **Transition:** `transition`
- **Rows:** 6 (default height)
- **Resize:** `resize-none` (fixed size)
- **Placeholder:** Translated key `contact.messagePlaceholder`

#### Submit Button
- **Width:** `w-full` (100%)
- **Padding:**
  - Horizontal: `px-8` (32px)
  - Vertical: `py-4` (16px)
- **Background:** `bg-stone-900`
- **Hover:** `hover:bg-stone-800`
- **Text Color:** `text-white`
- **Font Weight:** `font-light`
- **Text Transform:** Uppercase
- **Letter Spacing:** `tracking-wider`
- **Font Size:** `text-sm` (14px)
- **Border Radius:** `rounded-sm` (4px)
- **Transition:** `transition duration-300`
- **Layout:** Flex items center, `justify-center`
- **Gap between icon and text:** `gap-2` (8px)
- **Icon:** ArrowRight (size 16px) - appears after text
- **Translation Key:** `contact.sendMessage` (Default: "Send Message")

---

## COLOR PALETTE REFERENCE

### Primary Colors
- **Dark Stone:** `#1c1917` (rgb(28, 25, 23))
- **Stone 900:** `#1c1917`
- **Stone 950:** `#0c0808`
- **White:** `#ffffff`

### Gray/Stone Palette
- **Stone 50:** `#faf9f8`
- **Stone 100:** `#f5f3f1`
- **Stone 200:** `#e7e5e4`
- **Stone 300:** `#d6d3d1`
- **Stone 400:** `#a8a29e`
- **Stone 500:** `#78716b`
- **Stone 600:** `#57534e`
- **Stone 700:** `#44403c`
- **Stone 800:** `#292524`

### Accent Colors
- **Emerald 50:** `#f0fdf4` (light green background)
- **Emerald 500:** `#10b981` (bright green badge)
- **Emerald 600:** `#059669` (darker green badge)
- **Emerald 700:** `#047857` (text on green background)

---

## FONT SPECIFICATIONS

### Font Family
- **Primary Font:** Playfair Display, serif
- **Fallback:** Serif

### Font Weights Used
- **Light:** 300
- **Regular:** 400 (default)
- **Bold:** 600-700 (not commonly used, minimalist design)

### Font Size Scale
- `text-xs` = 12px
- `text-sm` = 14px
- `text-base` = 16px (default)
- `text-lg` = 18px
- `text-xl` = 20px
- `text-2xl` = 24px
- `text-3xl` = 30px
- `text-4xl` = 36px
- `text-5xl` = 48px
- `text-6xl` = 60px

### Letter Spacing
- `tracking-tight` = -0.025em
- `tracking-wide` = 0.025em
- `tracking-wider` = 0.05em
- `tracking-widest` = 0.15em

### Line Height
- `leading-relaxed` = 1.625 (comfortable reading)
- Default = 1.5

---

## SPACING & GAPS REFERENCE

### Padding/Margin Units (Tailwind Scale)
- 1 = 4px
- 2 = 8px
- 3 = 12px
- 4 = 16px
- 6 = 24px
- 8 = 32px
- 10 = 40px
- 12 = 48px
- 16 = 64px
- 20 = 80px
- 24 = 96px
- 28 = 112px
- 32 = 128px

### Gap/Space Values
- `gap-1` = 4px
- `gap-2` = 8px
- `gap-4` = 16px
- `gap-6` = 24px
- `gap-8` = 32px
- `gap-12` = 48px
- `space-y-4` = 16px vertical
- `space-y-6` = 24px vertical
- `space-y-8` = 32px vertical

---

## RESPONSIVE BREAKPOINTS

### Tailwind Breakpoints Used
- **Mobile First:** Default (0px+)
- **Small (sm):** 640px+
- **Medium (md):** 768px+
- **Large (lg):** 1024px+
- **Extra Large (xl):** 1280px+
- **2XL (2xl):** 1536px+

### Max Width Container
- **`max-w-7xl`:** 1280px (primary container width for both pages)

---

## TRANSITIONS & ANIMATIONS

### Transition Durations
- `duration-300` = 300ms (most common)
- `duration-500` = 500ms (image fades, gallery)

### Transition Effects Used
- Opacity transitions on images
- Scale/zoom on hover (`hover:scale-105`)
- Color changes on hover
- Border color changes
- Shadow changes

### Hover Effects
- Icons: `group-hover:translate-x-1` (1px right movement)
- Images: `hover:scale-105` (5% zoom)
- Cards: Border color and shadow changes
- Buttons: Background color change

---

## ACCESSIBILITY NOTES

- **Links:** Using React Router Link components for navigation
- **Forms:** All inputs have associated labels
- **Icons:** Using Lucide React icons with proper sizing
- **Color Contrast:** High contrast between text and backgrounds
- **Aria Labels:** Buttons have `aria-label` attributes where needed
- **Semantic HTML:** Using proper heading hierarchy (h1, h2, h3, h4)

---

## SUMMARY TABLE: KEY MEASUREMENTS

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero Height | 256px | 320px | 384px |
| Product Grid Cols | 1 | 1 | 3 |
| Bundle Grid Cols | 1 | 2 | 2 |
| Gallery Cols | 1 | 2 | 3 |
| Trust Grid Cols | 1 | 4 | 4 |
| Contact Form Cols | 1 | 1 | 3 |
| Container Padding | 16px | 24px | 32px |
| Section Padding Y | 64px | 96px | 96-128px |
| Main Container Width | 100% | 100% | 1280px |

---

**End of Documentation**
