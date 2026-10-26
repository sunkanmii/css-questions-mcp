// Snapshot of single-answer questions with explanations from the CSS-Questions bank.
// Regenerate from questions_and_answers_rows.csv rather than editing by hand.

export type Question = {
  id: number;
  topic: string;
  question: string;
  code: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    "id": 265,
    "topic": "view-transitions",
    "question": "Which property opts an element into a named View Transition?",
    "code": "",
    "answers": [
      "`transition-name`",
      "`view-transition-name`",
      "`animation-name`",
      "`contain-name`"
    ],
    "correctIndex": 1,
    "explanation": "view-transition-name assigns an element to a named transition group."
  },
  {
    "id": 267,
    "topic": "view-transitions",
    "question": "Classify `::view-transition-group(root)`.",
    "code": "",
    "answers": [
      "A view transition psuedo-element",
      "A transition psuedo-elemet",
      "A position pseudo-element",
      "Media feature"
    ],
    "correctIndex": 0,
    "explanation": "It is a pseudo-element created for styling a view transition group."
  },
  {
    "id": 268,
    "topic": "animations-and-transitions",
    "question": "What does `@starting-style` help with?",
    "code": "",
    "answers": [
      "It defines styles before a transition starts for newly rendered elements",
      "It starts JavaScript animations",
      "It resets cascade layers",
      "It prevents layout shift automatically"
    ],
    "correctIndex": 0,
    "explanation": "@starting-style gives CSS a before-change style for elements that did not exist in the previous frame."
  },
  {
    "id": 269,
    "topic": "animations-and-transitions",
    "question": "Which property allows discrete properties like `display` to transition?",
    "code": "",
    "answers": [
      "`transition-behavior`",
      "`animation-composition`",
      "`content-visibility`",
      "`timeline-scope`"
    ],
    "correctIndex": 0,
    "explanation": "transition-behavior: allow-discrete enables certain discrete transitions."
  },
  {
    "id": 271,
    "topic": "selectors-and-specificity",
    "question": "Classify `:has()`.",
    "code": "",
    "answers": [
      "A functional pseudo-class",
      "A Pseudo-class",
      "A CSS class",
      "A brand new CSS property"
    ],
    "correctIndex": 0,
    "explanation": ":has() is a functional pseudo-class."
  },
  {
    "id": 272,
    "topic": "selectors-and-specificity",
    "question": "Which selector styles a card only when it contains a checked checkbox?",
    "code": "",
    "answers": [
      "`.card:has(input:checked)`",
      "`.card::has(input:checked)`",
      "`.card has(input:checked)`",
      "`.card:contains(input:checked)`"
    ],
    "correctIndex": 0,
    "explanation": ":has() lets a parent match based on descendants."
  },
  {
    "id": 274,
    "topic": "performance",
    "question": "Guess the property: Which property skips rendering work for off-screen content?",
    "code": "",
    "answers": [
      "`contain-intrinsic-size`",
      "`content-visibility`",
      "`visibility`",
      "`overflow-clip-margin`"
    ],
    "correctIndex": 1,
    "explanation": "content-visibility can skip rendering work until content is needed."
  },
  {
    "id": 275,
    "topic": "performance",
    "question": "What does `contain-intrinsic-size` pair well with?",
    "code": "",
    "answers": [
      "`content-visibility: auto`",
      "`display: contents`",
      "`float: inline-start`",
      "`font-synthesis`",
      "`fonto-synthesis`"
    ],
    "correctIndex": 0,
    "explanation": "It provides a placeholder size while content-visibility skips rendering."
  },
  {
    "id": 276,
    "topic": "responsive-design-techniques",
    "question": "Which unit represents `1%` of the small viewport height?",
    "code": "",
    "answers": [
      "`svh`",
      "`lvh`",
      "`dvh`",
      "`vhc`"
    ],
    "correctIndex": 0,
    "explanation": "svh is based on the small viewport size."
  },
  {
    "id": 278,
    "topic": "responsive-design-techniques",
    "question": "Classify `@container`.",
    "code": "",
    "answers": [
      "At-rule that controls all display containers",
      "At-rule that manages all CSS contain elements",
      "At-rule that applies styles elements based on container's size or stylesd",
      "A pseudo-element that styles elements based on the containment context of that element. It is very similar to the pseudo-element `@media`"
    ],
    "correctIndex": 2,
    "explanation": "@container is an at-rule for container queries."
  },
  {
    "id": 279,
    "topic": "responsive-design-techniques",
    "question": "Which property names a query container?",
    "code": "",
    "answers": [
      "`container-name`",
      "`query-name`",
      "`contain-name`",
      "`container-id`"
    ],
    "correctIndex": 0,
    "explanation": "container-name gives a container a name for named container queries."
  },
  {
    "id": 280,
    "topic": "responsive-design-techniques",
    "question": "Which declaration makes an element queryable by inline size?",
    "code": "",
    "answers": [
      "`container-type: inline-size`",
      "`contain: inline`",
      "`query-type: width`",
      "`container: width-only`"
    ],
    "correctIndex": 0,
    "explanation": "container-type: inline-size enables inline-size container queries."
  },
  {
    "id": 281,
    "topic": "colors",
    "question": "Which color function is designed for perceptual color mixing?",
    "code": "",
    "answers": [
      "`color-mix()`",
      "`mix-color()`",
      "`blend()`",
      "`paint()`"
    ],
    "correctIndex": 0,
    "explanation": "color-mix() mixes colors in a chosen color space."
  },
  {
    "id": 284,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which property controls the color of selected text highlight?",
    "code": "",
    "answers": [
      "`selection-color`",
      "`::selection`",
      "`highlight-color`",
      "`text-highlight`"
    ],
    "correctIndex": 1,
    "explanation": "::selection is a pseudo-element used to style selected text."
  },
  {
    "id": 285,
    "topic": "layout",
    "question": "What does `scrollbar-gutter: stable` help prevent?",
    "code": "",
    "answers": [
      "Layout shift when scrollbars appear",
      "Slow animations",
      "Invalid selectors",
      "Font fallback"
    ],
    "correctIndex": 0,
    "explanation": "A stable scrollbar gutter reserves space so layout does not jump."
  },
  {
    "id": 286,
    "topic": "box-model-and-sizing",
    "question": "Which property clips overflow without creating a scroll container?",
    "code": "",
    "answers": [
      "`overflow: clip`",
      "`overflow: hidden-scroll`",
      "`clip-path: scroll`",
      "`display: clip`"
    ],
    "correctIndex": 0,
    "explanation": "overflow: clip clips overflow and does not create a scroll container."
  },
  {
    "id": 288,
    "topic": "modern-ui",
    "question": "Which HTML/CSS feature commonly pairs with `:popover-open`?",
    "code": "",
    "answers": [
      "Popover API",
      "Service Worker",
      "CSS Grid only",
      "Web Storage",
      "Open Popover API",
      "Service"
    ],
    "correctIndex": 0,
    "explanation": ":popover-open matches an element while its popover is open."
  },
  {
    "id": 291,
    "topic": "nesting",
    "question": "In nesting, what does `&` represent?",
    "code": ".button {\\n  &:hover {\\n    color: white;\\n  }\\n}",
    "answers": [
      "The parent selector",
      "The root element",
      "The previous property",
      "A layer name"
    ],
    "correctIndex": 0,
    "explanation": "& refers to the selector being nested inside."
  },
  {
    "id": 292,
    "topic": "nesting",
    "question": "Which nested CSS is valid?",
    "code": "",
    "answers": [
      "`.card { &:hover { transform: translateY(-2px); } }`",
      "`.card { hover& { color: red; } }`",
      "`.card { @nest hover &; }`",
      "`.card { :hover: &; }`"
    ],
    "correctIndex": 0,
    "explanation": "Native CSS nesting supports & for parent selector references."
  },
  {
    "id": 293,
    "topic": "typography",
    "question": "What does `text-wrap: balance` try to improve?",
    "code": "",
    "answers": [
      "Line breaks in headings and short blocks",
      "Font loading, line headings, and font formatting",
      "Line/writing formatting in all paragraphs and texts. Must have a `display: grid` set before use",
      "Grid alignment"
    ],
    "correctIndex": 0,
    "explanation": "text-wrap: balance balances line lengths, especially useful for headings."
  },
  {
    "id": 294,
    "topic": "typography",
    "question": "Which property can improve long-form paragraph wrapping?",
    "code": "",
    "answers": [
      "`text-wrap: pretty`",
      "`font-wrap: prose`",
      "`line-break: smooth`",
      "`wrap-mode: article`"
    ],
    "correctIndex": 0,
    "explanation": "text-wrap: pretty attempts nicer wrapping by avoiding poor last lines."
  },
  {
    "id": 296,
    "topic": "responsive-design-techniques",
    "question": "Which `clamp()` value is valid?",
    "code": "",
    "answers": [
      "`font-size: clamp(1rem, 2vw + 1rem, 3rem)`",
      "`font-size: clamp from 1rem to 3rem`",
      "`font-size: clamp[1rem, 3rem]`",
      "`font-size: clamp(auto)`"
    ],
    "correctIndex": 0,
    "explanation": "clamp(min, preferred, max) sets a bounded fluid value."
  },
  {
    "id": 297,
    "topic": "animations-and-transitions",
    "question": "Which property controls how animations combine when multiple animations affect the same property?",
    "code": "",
    "answers": [
      "`animation-composition`",
      "`animation-stack`",
      "`compose-animation`",
      "`transition-composition`"
    ],
    "correctIndex": 0,
    "explanation": "animation-composition controls replace/add/accumulate behavior for animations."
  },
  {
    "id": 298,
    "topic": "colors",
    "question": "What does `color-scheme` tell the browser?",
    "code": "",
    "answers": [
      "Which UI color schemes the page supports",
      "Which brand palette to download in CSS and what colors to import",
      "Which CSS layer wins",
      "Which image format to use"
    ],
    "correctIndex": 0,
    "explanation": "color-scheme lets the browser render built-in UI appropriately for light/dark support."
  },
  {
    "id": 301,
    "topic": "grid",
    "question": "Which one creates a subgrid?",
    "code": "",
    "answers": [
      "`grid-template-columns: subgrid`",
      "`display: subgrid`",
      "`grid: inherit-subgrid`",
      "`subgrid: columns`"
    ],
    "correctIndex": 0,
    "explanation": "Subgrid is used as a value for grid-template-columns or grid-template-rows."
  },
  {
    "id": 302,
    "topic": "grid",
    "question": "Which statement about subgrid is true?",
    "code": "",
    "answers": [
      "It lets nested grid items align to parent grid tracks",
      "It only works with flexbox",
      "It replaces media queries",
      "It requires JavaScript"
    ],
    "correctIndex": 0,
    "explanation": "Subgrid allows a child grid to participate in tracks from its parent grid."
  },
  {
    "id": 303,
    "topic": "supports",
    "question": "What does `@supports selector(:has(*))` test?",
    "code": "",
    "answers": [
      "Whether the browser supports `:has()` selectors",
      "Whether all selectors are valid",
      "Whether JavaScript is enabled",
      "Whether CSS nesting is enabled"
    ],
    "correctIndex": 0,
    "explanation": "@supports selector() can feature-detect selector support."
  },
  {
    "id": 304,
    "topic": "view-transitions",
    "question": "Which statement about nested view transition groups is true?",
    "code": "",
    "answers": [
      "They can let related elements animate within a parent transition structure",
      "They are only for SVG",
      "They require float layout",
      "They disable ::view-transition-old()"
    ],
    "correctIndex": 0,
    "explanation": "Nested view transition groups are useful when coordinating parent/child transition snapshots."
  },
  {
    "id": 305,
    "topic": "box-model-and-sizing",
    "question": "What does this CSS do to overflowing content?",
    "code": ".panel { overflow: clip; }",
    "answers": [
      "Clips overflow without creating a scroll container",
      "Creates a scroll container",
      "Adds an invisible scrollbar",
      "Only clips inline overflow"
    ],
    "correctIndex": 0,
    "explanation": "overflow: clip clips overflow and does not create a scroll container."
  },
  {
    "id": 306,
    "topic": "box-model-and-sizing",
    "question": "Which declaration lets content paint a little outside an overflow clip edge?",
    "code": "",
    "answers": [
      "`overflow-clip-margin: 12px`",
      "`clip-margin: 12px`",
      "`overflow-padding: 12px`",
      "`clip-path-margin: 12px`"
    ],
    "correctIndex": 0,
    "explanation": "overflow-clip-margin expands the clipping edge for overflow: clip."
  },
  {
    "id": 307,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which selector styles a dialog backdrop?",
    "code": "",
    "answers": [
      "`dialog::backdrop`",
      "`dialog:backdrop`",
      "`dialog::modal-backdrop`",
      "`dialog::behind`"
    ],
    "correctIndex": 0,
    "explanation": "::backdrop is the pseudo-element behind modal dialogs and popovers."
  },
  {
    "id": 308,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "This or that: which is best suited to styling open popovers?",
    "code": "",
    "answers": [
      "`:popover-open`",
      "`:open`"
    ],
    "correctIndex": 0,
    "explanation": ":popover-open is a pseudo-class. It uses one colon."
  },
  {
    "id": 309,
    "topic": "animations-and-transitions",
    "question": "Which rule gives a newly inserted popover a starting style for transition?",
    "code": "",
    "answers": [
      "`@starting-style { .toast { opacity: 0; } }`",
      "`@start-style { .toast { opacity: 0; } }`",
      "`@initial-style { .toast { opacity: 0; } }`",
      "`@before-style { .toast { opacity: 0; } }`"
    ],
    "correctIndex": 0,
    "explanation": "@starting-style provides before-change styles for elements entering the rendered tree."
  },
  {
    "id": 310,
    "topic": "animations-and-transitions",
    "question": "Which declaration allows discrete transitions such as display?",
    "code": "",
    "answers": [
      "`transition-behavior: allow-discrete`",
      "`transition-mode: discrete`",
      "`display-transition: allow`",
      "`animation-behavior: discrete`"
    ],
    "correctIndex": 0,
    "explanation": "transition-behavior: allow-discrete opts into supported discrete transitions."
  },
  {
    "id": 311,
    "topic": "selectors-and-specificity",
    "question": "What does this selector do?",
    "code": ".form:has(input:invalid) { border-color: crimson; }",
    "answers": [
      "Styles a form only when it contains an invalid input",
      "Styles every invalid input",
      "Styles only the last invalid field",
      "Invalid CSS"
    ],
    "correctIndex": 0,
    "explanation": ":has() can match a parent based on its descendants."
  },
  {
    "id": 312,
    "topic": "selectors-and-specificity",
    "question": "This or that: which is a valid relational selector?",
    "code": "",
    "answers": [
      "`.card:has(img)`",
      "`.card:has(.> &.img)`"
    ],
    "correctIndex": 0,
    "explanation": ":has() is a pseudo-class, not a pseudo-element."
  },
  {
    "id": 313,
    "topic": "responsive-design-techniques",
    "question": "Which declaration creates a named query container?",
    "code": "",
    "answers": [
      "`container: card / inline-size`",
      "`container-query: card inline-size`",
      "`container-name: inline-size / card`",
      "`query-container: card`"
    ],
    "correctIndex": 0,
    "explanation": "The container shorthand can set container-name and container-type."
  },
  {
    "id": 314,
    "topic": "responsive-design-techniques",
    "question": "Which @container rule targets the named container?",
    "code": "",
    "answers": [
      "`@container card (min-width: 36rem)`",
      "`@container-name card (min-width: 36rem)`",
      "`@media container(card >= 36rem)`",
      "@`query card min-width(36rem)`"
    ],
    "correctIndex": 0,
    "explanation": "Named container queries use @container <name> (<condition>)."
  },
  {
    "id": 315,
    "topic": "responsive-design-techniques",
    "question": "Which unit is based on the query container inline size?",
    "code": "",
    "answers": [
      "`cqi`",
      "`dvi`",
      "`svw`",
      "`rqi`",
      "`cqb`",
      "`container-inline-size`"
    ],
    "correctIndex": 0,
    "explanation": "cqi is 1% of a query container inline size."
  },
  {
    "id": 316,
    "topic": "nesting",
    "question": "Which line is valid native CSS nesting?",
    "code": "",
    "answers": [
      "`&:focus-visible { outline: 2px solid Highlight; }`",
      "`:focus-visible & { outline: 2px solid Highlight; }`",
      "`@nest &:focus-visible;`",
      "`hover &:focus`"
    ],
    "correctIndex": 0,
    "explanation": "The & token refers to the parent selector in CSS nesting."
  },
  {
    "id": 317,
    "topic": "nesting",
    "question": "This or that: which is valid CSS nesting?",
    "code": "",
    "answers": [
      "`.card { & > img { width: 100%; } }`",
      ".`card { img& { width: 100%; } }`"
    ],
    "correctIndex": 0,
    "explanation": "& can be used to build nested selectors from the parent selector."
  },
  {
    "id": 318,
    "topic": "view-transitions",
    "question": "Which property gives an element a named view transition snapshot?",
    "code": ".hero { view-transition-name: hero; }",
    "answers": [
      "`view-transition-name`",
      "`transition-view-name`",
      "`view-name`",
      "`snapshot-name`"
    ],
    "correctIndex": 0,
    "explanation": "view-transition-name opts an element into a named view transition snapshot."
  },
  {
    "id": 319,
    "topic": "view-transitions",
    "question": "Which value asks the browser to assign unique same-document transition names?",
    "code": "",
    "answers": [
      "`match-element`",
      "`auto-match`",
      "`unique`",
      "`match-all`"
    ],
    "correctIndex": 0,
    "explanation": "match-element lets the browser generate unique internal names for same-document transitions."
  },
  {
    "id": 320,
    "topic": "view-transitions",
    "question": "This or that: which selector targets a named transition group?",
    "code": "",
    "answers": [
      "`::view-transition-group(hero)`",
      "`::transition-group(.hero)`",
      "`::named-transition-group(hero)`"
    ],
    "correctIndex": 0,
    "explanation": "View transition groups are pseudo-elements, so they use double colons."
  },
  {
    "id": 321,
    "topic": "view-transitions",
    "question": "Which selector styles the old snapshot for the root transition?",
    "code": "",
    "answers": [
      "`::view-transition-old(root)`",
      "`::view-transition-before(root)`",
      "`:view-transition-old(root)",
      "`::old-view-transition(root)`"
    ],
    "correctIndex": 0,
    "explanation": "::view-transition-old() targets the old snapshot image."
  },
  {
    "id": 322,
    "topic": "view-transitions",
    "question": "Which at-rule enables cross-document view transitions for navigation?",
    "code": "",
    "answers": [
      "`@view-transition { navigation: auto; }`",
      "`@page-transition { navigation: auto; }`",
      "`@navigation-transition { enabled: true; }`",
      "`@view { transition: navigation; }`"
    ],
    "correctIndex": 0,
    "explanation": "@view-transition with navigation: auto enables cross-document view transitions where supported."
  },
  {
    "id": 323,
    "topic": "typography",
    "question": "Which declaration balances short heading lines?",
    "code": "",
    "answers": [
      "`text-wrap: balance`",
      "`text-align: balance`",
      "`line-wrap: balance`",
      "`wrap: balanced`"
    ],
    "correctIndex": 0,
    "explanation": "text-wrap: balance aims to balance line lengths in headings and short text."
  },
  {
    "id": 324,
    "topic": "typography",
    "question": "Which declaration tries to avoid poor last lines in paragraphs?",
    "code": "",
    "answers": [
      "`text-wrap: pretty`",
      "`text-wrap: avoid-orphans`",
      "`line-wrap: pretty`",
      "`widows-wrap: avoid`"
    ],
    "correctIndex": 0,
    "explanation": "text-wrap: pretty improves wrapping quality, especially awkward final lines."
  },
  {
    "id": 325,
    "topic": "colors",
    "question": "Which color syntax mixes cyan and white in OKLCH?",
    "code": "",
    "answers": [
      "`color-mix(in oklch, cyan 70%, white)`",
      "`mix(cyan 70%, white in oklch)`",
      "`oklch-mix(cyan, white, 70%)`",
      "`color-blend(oklch cyan white)`"
    ],
    "correctIndex": 0,
    "explanation": "color-mix() takes an interpolation color space after in."
  },
  {
    "id": 326,
    "topic": "colors",
    "question": "This or that: which is a valid modern CSS color function?",
    "code": "",
    "answers": [
      "`light-dark(white, black)`",
      "`dark-light(white, black)`"
    ],
    "correctIndex": 0,
    "explanation": "light-dark() selects a color based on the used color scheme."
  },
  {
    "id": 327,
    "topic": "css-variables-and-custom-properties",
    "question": "Which declaration registers a typed custom property?",
    "code": "",
    "answers": [
      "`@property --angle { syntax: \"<angle>\"; inherits: false; initial-value: 0deg; }`",
      "`@custom-property --angle { type: angle; initial: 0deg; }`",
      "`--angle: property(\"<angle>\")`",
      "`@var --angle { syntax: angle; }`"
    ],
    "correctIndex": 0,
    "explanation": "@property registers custom properties so they can be typed and animated predictably."
  },
  {
    "id": 328,
    "topic": "css-variables-and-custom-properties",
    "question": "Which declaration rotates using a registered custom property?",
    "code": "",
    "answers": [
      "`transform: rotate(var(--angle))`",
      "`rotate: --angle`",
      "`transform: rotate(--angle)`",
      "`animation-rotate: var(--angle)`"
    ],
    "correctIndex": 0,
    "explanation": "Registered custom properties are still used with var()."
  },
  {
    "id": 329,
    "topic": "performance",
    "question": "Which property controls whether the browser may skip off-screen rendering work?",
    "code": "",
    "answers": [
      "`content-visibility`",
      "`visibility`",
      "`render-skip`",
      "`contain-rendering`"
    ],
    "correctIndex": 0,
    "explanation": "content-visibility: auto can skip rendering work until content is near the viewport."
  },
  {
    "id": 330,
    "topic": "performance",
    "question": "Which declaration pairs well with `content-visibility: auto` to reserve size?",
    "code": "",
    "answers": [
      "`contain-intrinsic-size: auto 280px`",
      "`intrinsic-size: contain 280px`",
      "`content-size: 280px`",
      "`visibility-size: 280px`"
    ],
    "correctIndex": 0,
    "explanation": "contain-intrinsic-size provides a placeholder size while rendering is skipped."
  },
  {
    "id": 331,
    "topic": "animations-and-transitions",
    "question": "Which rule creates a scroll-driven animation timeline?",
    "code": "",
    "answers": [
      "`animation-timeline: scroll()`",
      "`scroll-timeline: auto`",
      "`timeline: scroll(root)`",
      "`animation-scroll: true`"
    ],
    "correctIndex": 0,
    "explanation": "animation-timeline can attach an animation to a scroll progress timeline."
  },
  {
    "id": 332,
    "topic": "animations-and-transitions",
    "question": "Which declaration names a view timeline?",
    "code": "",
    "answers": [
      "`view-timeline-name: --reveal`",
      "`timeline-view-name: --reveal`",
      "`scroll-view-name: --reveal`",
      "`animation-view-name: --reveal`"
    ],
    "correctIndex": 0,
    "explanation": "view-timeline-name names the view progress timeline for an element."
  },
  {
    "id": 333,
    "topic": "animations-and-transitions",
    "question": "This or that: which is valid animation range syntax?",
    "code": "",
    "answers": [
      "`animation-range: entry 0% cover 40%`",
      "`animation-range: from entry to cover 40%`"
    ],
    "correctIndex": 0,
    "explanation": "animation-range defines where an animation starts and ends along a timeline."
  },
  {
    "id": 334,
    "topic": "grid",
    "question": "Which value lets a child grid align to parent columns?",
    "code": "",
    "answers": [
      "`grid-template-columns: subgrid`",
      "`display: subgrid`",
      "`grid-columns: inherit",
      "`grid-template: parent`"
    ],
    "correctIndex": 0,
    "explanation": "subgrid is a value for grid-template-columns or grid-template-rows."
  },
  {
    "id": 335,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which selector targets the marker of a list item?",
    "code": "",
    "answers": [
      "`li::marker`",
      "`li:marker`",
      "`li::bullet`",
      "`li:before-marker`"
    ],
    "correctIndex": 0,
    "explanation": "::marker styles the marker box of list items."
  },
  {
    "id": 336,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "This or that: which is a pseudo-element?",
    "code": "",
    "answers": [
      "`::file-selector-button`",
      "`:file-selector-button`"
    ],
    "correctIndex": 0,
    "explanation": "::file-selector-button is a pseudo-element for file input buttons."
  },
  {
    "id": 337,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which pseudo-class matches keyboard-friendly focus display?",
    "code": "",
    "answers": [
      "`:focus-visible`",
      "`::focus-visible`",
      "`:keyboard-focus`",
      "`:focus-ring-only`"
    ],
    "correctIndex": 0,
    "explanation": ":focus-visible matches when focus indication should be visible."
  },
  {
    "id": 338,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which selector styles text targeted by a URL text fragment?",
    "code": "",
    "answers": [
      "`::target-text`",
      "`:target-text`",
      "`::selected-target`",
      "`:text-target`"
    ],
    "correctIndex": 0,
    "explanation": "::target-text styles text highlighted by scroll-to-text fragments."
  },
  {
    "id": 339,
    "topic": "layout",
    "question": "Which declaration reserves room for a scrollbar to avoid layout shift?",
    "code": "",
    "answers": [
      "`scrollbar-gutter: stable`",
      "`scrollbar-space: reserve`",
      "`overflow-gutter: stable`",
      "`gutter-scrollbar: always`"
    ],
    "correctIndex": 0,
    "explanation": "scrollbar-gutter: stable reserves space for the scrollbar gutter."
  },
  {
    "id": 340,
    "topic": "layout",
    "question": "Which declaration styles scrollbar thumb/track colors in Firefox and modern Baseline CSS?",
    "code": "",
    "answers": [
      "`scrollbar-color: #0891b2 transparent`",
      "`scrollbar-palette: #0891b2 transparent`",
      "`scrollbar-thumb-color: #0891b2`",
      "`scroll-color: #0891b2 transparent`"
    ],
    "correctIndex": 0,
    "explanation": "scrollbar-color sets thumb and track colors."
  },
  {
    "id": 341,
    "topic": "cascade",
    "question": "Which declaration scopes styles to a subtree?",
    "code": "",
    "answers": [
      "`@scope (.article) { h2 { color: rebeccapurple; } }`",
      "`@local (.article) { h2 { color: rebeccapurple; } }`",
      "`@inside (.article) { h2 { color: rebeccapurple; } }`",
      "`@tree-scope (.article) { h2 { color: rebeccapurple; } }`"
    ],
    "correctIndex": 0,
    "explanation": "@scope limits where selectors apply."
  },
  {
    "id": 342,
    "topic": "forms",
    "question": "This or that: This or that: which one is a real CSS property for styling form control accents?",
    "code": "",
    "answers": [
      "`accent-color`",
      "`color-accent`"
    ],
    "correctIndex": 0,
    "explanation": "accent-color is a property for form control accent colors."
  },
  {
    "id": 343,
    "topic": "colors",
    "question": "Which declaration lets form controls know the page supports dark UI?",
    "code": "",
    "answers": [
      "`color-scheme: light dark`",
      "`theme-color: light dark`",
      "`ui-scheme: auto`",
      "`form-color-scheme: dark`"
    ],
    "correctIndex": 0,
    "explanation": "color-scheme tells the browser which color schemes the page supports."
  },
  {
    "id": 344,
    "topic": "layout",
    "question": "Which declaration is a valid logical inset property?",
    "code": "",
    "answers": [
      "`inset-inline-start: 1rem`",
      "`left-inline: 1rem`",
      "`inline-left: 1rem`",
      "`inset-start-inline: 1rem`"
    ],
    "correctIndex": 0,
    "explanation": "inset-inline-start is a logical property that adapts to writing mode and direction."
  },
  {
    "id": 345,
    "topic": "view-transitions",
    "question": "A teammate says `view-transition-group` in notes and writes `::view-transition-group(card)` in CSS. What is the fair review?",
    "code": "",
    "answers": [
      "Both can be right: the official docs term is the group, the selector is the pseudo-element syntax",
      "Only `view-transition-group` is real CSS",
      "Only `::view-transition-group(card)` is real and the term is fake",
      "Both are fake unless JavaScript creates them"
    ],
    "correctIndex": 0,
    "explanation": "View transition groups are represented by ::view-transition-group() pseudo-elements in the generated transition tree."
  },
  {
    "id": 346,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "A designer wants custom search hits, not normal text selection. Which selector is the sharp one?",
    "code": "",
    "answers": [
      "`::highlight(search-hit)`",
      "`:highlight(search-hit)`",
      "`::selection(search-hit)`",
      "`:custom-highlight(search-hit)`"
    ],
    "correctIndex": 0,
    "explanation": "::highlight() styles a named custom highlight registered through the CSS Custom Highlight API."
  },
  {
    "id": 347,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Two selectors walk into a spellchecker. Which pair is real CSS?",
    "code": "",
    "answers": [
      "`::spelling-error` and `::grammar-error`",
      "`:spelling-error` and `:grammar-error`",
      "`::spell-error` and `::grammar-check`",
      "`:spellcheck-error` and `::grammar-error"
    ],
    "correctIndex": 0,
    "explanation": "Spelling and grammar highlights are pseudo-elements, so they use double colons."
  },
  {
    "id": 348,
    "topic": "typography",
    "question": "Which line is valid CSS and which one is wishful thinking?",
    "code": "",
    "answers": [
      "`text-wrap: pretty` is valid; `text-wrap: beautiful` is not",
      "`text-wrap: beautiful` is valid; `text-wrap: pretty` is not",
      "Both are valid aliases",
      "Both are invalid because wrapping is only controlled by white-space"
    ],
    "correctIndex": 0,
    "explanation": "text-wrap: pretty is a real value for improving wrapping quality. beautiful only sounds persuasive."
  },
  {
    "id": 349,
    "topic": "box-model-and-sizing",
    "question": "The design says \"clip overflow, but do not make a scroll container.\" Which declaration is the quiet winner?",
    "code": "",
    "answers": [
      "`overflow: clip`",
      "`overflow: clipped`",
      "`overflow: hidden scrollless`",
      "`clip-overflow: true`"
    ],
    "correctIndex": 0,
    "explanation": "overflow: clip clips overflow without creating a scroll container."
  },
  {
    "id": 350,
    "topic": "layout",
    "question": "You are naming the anchor source element for CSS anchor positioning. Which declaration belongs on the source?",
    "code": "",
    "answers": [
      "`anchor-name: --menu`",
      "`position-anchor: --menu`",
      "`anchor-target: --menu`",
      "`position-name: --menu`"
    ],
    "correctIndex": 0,
    "explanation": "anchor-name marks the source element. position-anchor is used by the positioned element that follows it."
  },
  {
    "id": 351,
    "topic": "layout",
    "question": "You are on the tooltip, not the button. Which declaration connects it to the named anchor?",
    "code": "",
    "answers": [
      "`position-anchor: --menu`",
      "`anchor-name: --menu`",
      "`anchor-source: --menu`",
      "`target-anchor: --menu`"
    ],
    "correctIndex": 0,
    "explanation": "position-anchor associates an absolute or fixed positioned element with an anchor name."
  },
  {
    "id": 352,
    "topic": "layout",
    "question": "The tooltip needs to sit against the anchor edge. Which one is the actual geometry function?",
    "code": "",
    "answers": [
      "`anchor(bottom)`",
      "`anchor-position(bottom)`",
      "`position-anchor(bottom)`",
      "`anchor-edge(bottom)`"
    ],
    "correctIndex": 0,
    "explanation": "The anchor() function can be used in inset properties to refer to anchor edges."
  },
  {
    "id": 353,
    "topic": "animations-and-transitions",
    "question": "You want opacity and display to transition together where supported. Which value is not pretending?",
    "code": "",
    "answers": [
      "`transition-behavior: allow-discrete`",
      "`transition-behavior: discrete`",
      "`transition-mode: allow-display`",
      "`display-transition: allow`"
    ],
    "correctIndex": 0,
    "explanation": "transition-behavior: allow-discrete opts supported discrete properties into transitions."
  },
  {
    "id": 354,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "A popover is currently showing. Which selector catches that state?",
    "code": "",
    "answers": [
      "`:popover-open`",
      "`::popover-open`",
      "`:open-popover`",
      "`::open-popover`"
    ],
    "correctIndex": 0,
    "explanation": ":popover-open is a pseudo-class for showing popover elements."
  },
  {
    "id": 355,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which selector is a real CSS pseudo-class for elements that can be opened and closed, but is easy to confuse with an attribute selector?",
    "code": "",
    "answers": [
      "`:open`",
      "`::open`",
      "`:opened`",
      "`open=true`"
    ],
    "correctIndex": 0,
    "explanation": ":open is a pseudo-class for elements that have an open state."
  },
  {
    "id": 356,
    "topic": "cascade",
    "question": "You want styles that only apply inside one subtree. Which at-rule actually exists?",
    "code": "",
    "answers": [
      "`@scope (.article) { h2 { ... } }`",
      "`@scoped (.article) { h2 { ... } }`",
      "`@local (.article) { h2 { ... } }`",
      "`@subtree (.article) { h2 { ... } }`"
    ],
    "correctIndex": 0,
    "explanation": "@scope limits selectors to a scoped subtree."
  },
  {
    "id": 357,
    "topic": "colors",
    "question": "Which color mix is written in the right order?",
    "code": "",
    "answers": [
      "`color-mix(in oklch, cyan 60%, white)`",
      "`color-mix(cyan 60%, white in oklch)`",
      "`mix-color(oklch, cyan 60%, white)`",
      "`oklch-mix(cyan 60%, white)`"
    ],
    "correctIndex": 0,
    "explanation": "color-mix() names the interpolation color space after the in keyword."
  },
  {
    "id": 358,
    "topic": "css-variables-and-custom-properties",
    "question": "You need a custom property that can animate as an angle. Which spell is CSS, not folklore?",
    "code": "",
    "answers": [
      "`@property --angle { syntax: \"<angle>\"; inherits: false; initial-value: 0deg; }`",
      "`@custom-property --angle { type: angle; initial: 0deg; }`",
      "`--angle: property(\"<angle>\")`",
      "`@var --angle { syntax: angle; }`"
    ],
    "correctIndex": 0,
    "explanation": "@property registers typed custom properties."
  },
  {
    "id": 359,
    "topic": "responsive-design-techniques",
    "question": "Which tiny unit looks fake until you remember container queries?",
    "code": "",
    "answers": [
      "`cqi`",
      "`iqc`",
      "`cqwq`",
      "`query-inline`"
    ],
    "correctIndex": 0,
    "explanation": "cqi is a container query length unit based on the query container inline size."
  },
  {
    "id": 360,
    "topic": "layout",
    "question": "The page jumps when scrollbars appear. Which declaration is the grown-up fix?",
    "code": "",
    "answers": [
      "`scrollbar-gutter: stable`",
      "`scrollbar-space: reserve`",
      "`overflow-gutter: stable`",
      "`gutter-scrollbar: always`"
    ],
    "correctIndex": 0,
    "explanation": "scrollbar-gutter: stable reserves space for the scrollbar gutter."
  },
  {
    "id": 361,
    "topic": "animations-and-transitions",
    "question": "Which line unlocks intrinsic-size transitions such as animating toward max-content?",
    "code": "",
    "answers": [
      "`interpolate-size: allow-keywords`",
      "`interpolate-size: intrinsic`",
      "`size-animation: intrinsic`",
      "`height-transition: auto`"
    ],
    "correctIndex": 0,
    "explanation": "interpolate-size: allow-keywords enables interpolation between length values and supported intrinsic sizing keywords."
  },
  {
    "id": 362,
    "topic": "forms",
    "question": "A search input should shrinkwrap and grow with its text. Which property is the real one?",
    "code": "",
    "answers": [
      "`field-sizing: content`",
      "`input-sizing: content`",
      "`form-sizing: auto`",
      "`field-size: fit-content`"
    ],
    "correctIndex": 0,
    "explanation": "field-sizing: content lets supported form controls size themselves to their contents."
  },
  {
    "id": 363,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which selector targets the collapsible content inside a details element?",
    "code": "",
    "answers": [
      "`::details-content`",
      "`::detail-content`",
      "`:details-content`",
      "`details::content`"
    ],
    "correctIndex": 0,
    "explanation": "::details-content represents the expandable and collapsible content of a details element."
  },
  {
    "id": 364,
    "topic": "typography",
    "question": "Which property trims extra font metric space from text boxes?",
    "code": "",
    "answers": [
      "`text-box-trim: trim-both`",
      "`text-trim: both`",
      "`font-box-trim: both`",
      "`line-box: trim`"
    ],
    "correctIndex": 0,
    "explanation": "text-box-trim works with text-box-edge to trim over and under edges from text content."
  },
  {
    "id": 365,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Why is the border in this rule the suspicious part?",
    "code": "::highlight(search-hit) {\n  background-color: yellow;\n  color: black;\n  border: 2px solid orange;\n}",
    "answers": [
      "Custom highlights only allow a limited set of paint-related properties",
      "The selector is invalid because highlight names cannot contain hyphens",
      "Only border applies to highlights, not background-color",
      "Custom highlights require :highlight, not ::highlight"
    ],
    "correctIndex": 0,
    "explanation": "::highlight() is real, but custom highlights only support a limited set of styling properties."
  },
  {
    "id": 366,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "What does this rule try to style?",
    "code": "textarea::spelling-error {\n  text-decoration: underline wavy crimson;\n}",
    "answers": [
      "Text the browser marks as misspelled in textarea",
      "The whole text on textarea whenever spellcheck is on",
      "The placeholder text only",
      "A custom highlight named spelling-error"
    ],
    "correctIndex": 0,
    "explanation": "::spelling-error targets text ranges that the browser identifies as misspelled."
  },
  {
    "id": 367,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "This selector looks like a linter plugin, but what is it really for?",
    "code": "p::grammar-error {\n  text-decoration: underline wavy orange;\n}",
    "answers": [
      "Text the browser marks as grammatically incorrect",
      "Every invalid form field",
      "A grammar class added by JavaScript",
      "Only text inside the grammar-error element"
    ],
    "correctIndex": 0,
    "explanation": "::grammar-error is a highlight pseudo-element for grammar-check ranges."
  },
  {
    "id": 368,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "Which part of the details element is affected?",
    "code": "details[open]::details-content {\n  padding-block: 0.75rem;\n  border-block-start: 1px solid currentColor;\n}",
    "answers": [
      "The expandable content after the summary",
      "Only the summary row",
      "The marker triangle only",
      "Every child including summary and marker"
    ],
    "correctIndex": 0,
    "explanation": "::details-content represents the collapsible content area of a details element."
  },
  {
    "id": 369,
    "topic": "layout",
    "question": "The tooltip still refuses to tether to the button. What is the missing ingredient?",
    "code": ".save-button {\n  anchor-name: --save;\n}\n\n.tooltip {\n  position-anchor: --save;\n  inset-block-start: anchor(bottom);\n}",
    "answers": [
      "The tooltip needs position: absolute or position: fixed",
      "The button needs display: anchor",
      "The tooltip needs anchor-name, not position-anchor",
      "anchor() only works in transform"
    ],
    "correctIndex": 0,
    "explanation": "position-anchor only matters for positioned elements, typically absolute or fixed."
  },
  {
    "id": 370,
    "topic": "layout",
    "question": "Which element is the anchor source in this snippet?",
    "code": ".avatar {\n  anchor-name: --profile-photo;\n}\n\n.menu {\n  position: fixed;\n  position-anchor: --profile-photo;\n  top: anchor(bottom);\n}",
    "answers": [
      ".avatar, because it declares anchor-name",
      ".menu, because it declares position-anchor",
      "Both elements are anchor sources",
      "Neither, because anchors require JavaScript"
    ],
    "correctIndex": 0,
    "explanation": "anchor-name defines the source anchor. position-anchor associates the positioned element to that source."
  },
  {
    "id": 371,
    "topic": "cascade",
    "question": "Which `<h2>` escapes this scoped rule?",
    "code": "@scope (.article) to (.note) {\n  h2 {\n    color: rebeccapurple;\n  }\n}",
    "answers": [
      "An `h2` inside `.note` inside `.article`",
      "An `h2` inside `.article` but outside `.note`",
      "An `h2` in a nested section inside `.article`",
      "No `h2` can escape once `.article` is scoped"
    ],
    "correctIndex": 0,
    "explanation": "The scope limit excludes matching inside the limit selector."
  },
  {
    "id": 372,
    "topic": "animations-and-transitions",
    "question": "Why does this help an entering toast animate instead of just appearing?",
    "code": ".toast {\n  opacity: 1;\n  transition: opacity 180ms ease;\n}\n\n@starting-style {\n  .toast {\n    opacity: 0;\n  }\n}",
    "answers": [
      "@starting-style supplies the before-change style for an element entering the rendered tree",
      "@starting-style delays the DOM insertion and causes poor web optimization when used on a webpage",
      "It forces opacity to inherit from body",
      "It makes display animatable by itself",
      "@starting-style supplies the after-change style for an element just entering and leaving the rendered tree"
    ],
    "correctIndex": 0,
    "explanation": "@starting-style defines starting styles for transitions when an element did not have a previous rendered state."
  },
  {
    "id": 373,
    "topic": "animations-and-transitions",
    "question": "What is `allow-discrete` doing here?",
    "code": ".menu {\n  opacity: 1;\n  display: block;\n  transition:\n    opacity 180ms ease,\n    display 180ms allow-discrete;\n}",
    "answers": [
      "It lets supported discrete properties such as display participate in the transition",
      "It turns display into a numeric property",
      "It disables the opacity transition",
      "It makes every property transition from 0% to 100%"
    ],
    "correctIndex": 0,
    "explanation": "allow-discrete opts supported discrete animated properties into transitions."
  },
  {
    "id": 374,
    "topic": "view-transitions",
    "question": "Which snapshot does this target?",
    "code": "::view-transition-old(root) {\n  animation-duration: 160ms;\n}",
    "answers": [
      "The old root snapshot during a view transition",
      "The new root snapshot after transition completes",
      "The live DOM root element",
      "Every element with view-transition-name: root"
    ],
    "correctIndex": 0,
    "explanation": "::view-transition-old(root) targets the old snapshot image for the root transition group."
  },
  {
    "id": 375,
    "topic": "view-transitions",
    "question": "What does .card mean in this view-transition selector?",
    "code": "::view-transition-group(.card) {\n  animation-duration: 420ms;\n}",
    "answers": [
      "A view transition class selector, not a normal DOM class selector",
      "Any DOM element with class=\"card\"",
      "A CSS module class generated at build time",
      "A class that only works with querySelectorAll"
    ],
    "correctIndex": 0,
    "explanation": "Inside view-transition pseudo-elements, a dot parameter can refer to a view-transition-class."
  },
  {
    "id": 376,
    "topic": "view-transitions",
    "question": "What feature is being enabled here?",
    "code": "@view-transition {\n  navigation: auto;\n}",
    "answers": [
      "Cross-document navigation view transitions where supported",
      "A CSS-only client-side router",
      "A browser cache refresh",
      "A transition for every anchor hover"
    ],
    "correctIndex": 0,
    "explanation": "@view-transition with navigation: auto enables cross-document view transitions in supporting browsers."
  },
  {
    "id": 377,
    "topic": "forms",
    "question": "What is the practical effect of this form-control rule?",
    "code": "textarea {\n  field-sizing: content;\n  min-block-size: 4lh;\n  max-block-size: 14lh;\n}",
    "answers": [
      "The textarea can size itself to its content within constraints",
      "The textarea becomes contenteditable",
      "The textarea inherits fieldset width only",
      "The textarea disables scrolling forever"
    ],
    "correctIndex": 0,
    "explanation": "field-sizing: content lets supported form controls shrinkwrap or grow to their content."
  },
  {
    "id": 378,
    "topic": "animations-and-transitions",
    "question": "Why can this panel animate toward max-content in supporting browsers?",
    "code": ":root {\n  interpolate-size: allow-keywords;\n}\n\n.panel {\n  block-size: 2.5rem;\n  overflow: clip;\n  transition: block-size 240ms ease;\n}\n\n.panel:focus-within {\n  block-size: max-content;\n}",
    "answers": [
      "interpolate-size opts intrinsic sizing keywords into length interpolation",
      "max-content becomes a number at CSS parse time. Consistent with its API structure and design",
      "transition-behavior controls intrinsic sizes as well as the interpolation values it inputs and outputs",
      "overflow: clip makes max-content animatable. Better than `color-mix()`"
    ],
    "correctIndex": 0,
    "explanation": "interpolate-size: allow-keywords enables interpolation between lengths and supported intrinsic sizing keywords."
  },
  {
    "id": 379,
    "topic": "typography",
    "question": "What is this typography rule trying to fix?",
    "code": ".headline {\n  text-box-trim: trim-both;\n  text-box-edge: cap alphabetic;\n}",
    "answers": [
      "Extra font metric space around text boxes",
      "Letter spacing between every glyph",
      "The browser default font family",
      "Text wrapping inside flex items"
    ],
    "correctIndex": 0,
    "explanation": "text-box-trim and text-box-edge help trim text box edges for tighter vertical rhythm."
  },
  {
    "id": 380,
    "topic": "pseudo-classes-and-pseudo-elements",
    "question": "What does this @supports check actually test?",
    "code": "@supports selector(::highlight(search-hit)) {\n  ::highlight(search-hit) {\n    background-color: gold;\n  }\n}",
    "answers": [
      "Whether the browser understands the ::highlight() selector syntax",
      "Whether JavaScript registered a highlight named search-hit",
      "Whether the user has selected text",
      "Whether background-color is allowed inside highlight rules"
    ],
    "correctIndex": 0,
    "explanation": "@supports selector(...) checks selector support, not runtime custom highlight registration."
  },
  {
    "id": 381,
    "topic": "selectors-and-specificity",
    "question": "Which element gets the visible outline style?",
    "code": ".field-shell:has(:focus-visible) {\n  outline: 2px solid Highlight;\n  outline-offset: 4px;\n}",
    "answers": [
      "The .field-shell when it contains keyboard-visible focus",
      "Only the focused input",
      "Every .field-shell after one field was focused once",
      "No element, because :has() cannot contain pseudo-classes"
    ],
    "correctIndex": 0,
    "explanation": ":has() can match a parent based on descendants, including useful focus states."
  },
  {
    "id": 382,
    "topic": "colors",
    "question": "What does color-scheme help the browser do here?",
    "code": ":root {\n  color-scheme: light dark;\n}",
    "answers": [
      "Render built-in controls and system colors for light and dark schemes",
      "Force every custom color to become dark-mode safe",
      "Change prefers-color-scheme for the user",
      "Make all images invert automatically"
    ],
    "correctIndex": 0,
    "explanation": "color-scheme tells the browser which color schemes the page supports for native UI and system colors."
  },
  {
    "id": 383,
    "topic": "performance",
    "question": "Why is contain-intrinsic-size paired with content-visibility here?",
    "code": ".feed-card {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 320px;\n}",
    "answers": [
      "It reserves a plausible size while off-screen rendering can be skipped",
      "It forces the card to always be 320px tall",
      "It prevents images from lazy-loading",
      "It creates a query container automatically"
    ],
    "correctIndex": 0,
    "explanation": "contain-intrinsic-size provides a placeholder size while content-visibility can skip rendering work."
  },
  {
    "id": 384,
    "topic": "cascade",
    "question": "Why might this component layer beat a reset even with simpler selectors?",
    "code": "@layer reset, base, components;\n\n@layer reset {\n  button {\n    all: unset;\n  }\n}\n\n@layer components {\n  .button {\n    display: inline-flex;\n  }\n}",
    "answers": [
      "Later cascade layers can outrank earlier layers before specificity is compared",
      "Layer names increase selector specificity",
      "The reset layer is ignored in dark mode",
      "Cascade layers only apply to custom properties"
    ],
    "correctIndex": 0,
    "explanation": "Cascade layer order is considered before selector specificity among layered author styles."
  }
];
