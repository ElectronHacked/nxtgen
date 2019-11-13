export interface IAntThemeVars {
  // The prefix to use on all css classes from ant.
  '$ant-prefix': any;

  // An override for the html selector for theme prefixes
  '$html-selector': any;

  // -------- Colors -----------
  '$primary-color': any;
  '$info-color': any;
  '$success-color': any;
  '$processing-color': any;
  '$error-color': any;
  '$highlight-color': any;
  '$warning-color': any;
  '$normal-color': any;
  $white: any;
  $black: any;

  // Color used by default to control hover and active backgrounds and for
  // alert info backgrounds.
  '$primary-1': any; // replace tint('$primary-color, 90%)
  '$primary-2': any; // replace tint('$primary-color, 80%)
  '$primary-3': any; // unused
  '$primary-4': any; // unused
  '$primary-5': any; // color used to control the text color in many active and hover states, replace tint('$primary-color, 20%)
  '$primary-6': any; // color used to control the text color of active buttons, don't use, use '$primary-color
  '$primary-7': any; // replace shade('$primary-color, 5%)
  '$primary-8': any; // unused
  '$primary-9': any; // unused
  '$primary-10': any; // unused

  // Base Scaffolding Variables
  // ---

  // Background color for `<body>`
  '$body-background': any;
  // Base background color for most components
  '$component-background': any;
  '$font-family': any;
  '$code-family': any;
  '$text-color': any;
  '$text-color-secondary': any;
  '$text-color-inverse': any;
  '$icon-color': any;
  '$icon-color-hover': any;
  '$heading-color': any;
  '$heading-color-dark': any;
  '$text-color-dark': any;
  '$text-color-secondary-dark': any;
  '$text-selection-bg': any;
  '$font-variant-base': any;
  '$font-feature-settings-base': any;
  '$font-size-base': any;
  '$font-size-lg': any;
  '$font-size-sm': any;
  '$heading-1-size': any;
  '$heading-2-size': any;
  '$heading-3-size': any;
  '$heading-4-size': any;
  '$line-height-base': any;
  '$border-radius-base': any;
  '$border-radius-sm': any;

  // vertical paddings
  '$padding-lg': any; // containers
  '$padding-md': any; // small containers and buttons
  '$padding-sm': any; // Form controls and items
  '$padding-xs': any; // small items

  // vertical padding for all form controls
  '$control-padding-horizontal': any;
  '$control-padding-horizontal-sm': any;

  // The background colors for active and hover states for things like
  // list items or table cells.
  '$item-active-bg': any;
  '$item-hover-bg': any;

  // ICONFONT
  '$iconfont-css-prefix': any;

  // LINK
  '$link-color': any;
  '$link-hover-color': any;
  '$link-active-color': any;
  '$link-decoration': any;
  '$link-hover-decoration': any;

  // Animation
  '$ease-base-out': any;
  '$ease-base-in': any;
  '$ease-out': any;
  '$ease-in': any;
  '$ease-in-out': any;
  '$ease-out-back': any;
  '$ease-in-back': any;
  '$ease-in-out-back': any;
  '$ease-out-circ': any;
  '$ease-in-circ': any;
  '$ease-in-out-circ': any;
  '$ease-out-quint': any;
  '$ease-in-quint': any;
  '$ease-in-out-quint': any;

  // Border color
  '$border-color-base': any; // base border outline a component
  '$border-color-split': any; // split border inside a component
  '$border-color-inverse': any;
  '$border-width-base': any; // width of the border for a component
  '$border-style-base': any; // style of a components border

  // Outline
  '$outline-blur-size': any;
  '$outline-width': any;
  '$outline-color': any;

  '$background-color-light': any; // background of header and selected item
  '$background-color-base': any; // Default grey background color

  // Disabled states
  '$disabled-color': any;
  '$disabled-bg': any;
  '$disabled-color-dark': any;

  // Shadow
  '$shadow-color': any;
  '$shadow-color-inverse': any;
  '$box-shadow-base': any;
  '$shadow-1-up': any;
  '$shadow-1-down': any;
  '$shadow-1-left': any;
  '$shadow-1-right': any;
  '$shadow-2': any;

  // Buttons
  '$btn-font-weight': any;
  '$btn-border-radius-base': any;
  '$btn-border-radius-sm': any;
  '$btn-border-width': any;
  '$btn-border-style': any;
  '$btn-shadow': any;
  '$btn-primary-shadow': any;
  '$btn-text-shadow': any;

  '$btn-primary-color': any;
  '$btn-primary-bg': any;

  '$btn-default-color': any;
  '$btn-default-bg': any;
  '$btn-default-border': any;

  '$btn-danger-color': any;
  '$btn-danger-bg': any;
  '$btn-danger-border': any;

  '$btn-disable-color': any;
  '$btn-disable-bg': any;
  '$btn-disable-border': any;

  '$btn-padding-base': any;
  '$btn-font-size-lg': any;
  '$btn-font-size-sm': any;
  '$btn-padding-lg': any;
  '$btn-padding-sm': any;

  '$btn-height-base': any;
  '$btn-height-lg': any;
  '$btn-height-sm': any;

  '$btn-circle-size': any;
  '$btn-circle-size-lg': any;
  '$btn-circle-size-sm': any;

  '$btn-square-size': any;
  '$btn-square-size-lg': any;
  '$btn-square-size-sm': any;

  '$btn-group-border': any;

  // Checkbox
  '$checkbox-size': any;
  '$checkbox-color': any;
  '$checkbox-check-color': any;
  '$checkbox-border-width': any;

  // Descriptions
  '$descriptions-bg': any;

  // Dropdown
  '$dropdown-selected-color': any;

  // Empty
  '$empty-font-size': any;

  // Radio
  '$radio-size': any;
  '$radio-dot-color': any;

  // Radio buttons
  '$radio-button-bg': any;
  '$radio-button-checked-bg': any;
  '$radio-button-color': any;
  '$radio-button-hover-color': any;
  '$radio-button-active-color': any;

  // Media queries breakpoints
  // Extra small screen / phone
  '$screen-xs': any;
  '$screen-xs-min': any;

  // Small screen / tablet
  '$screen-sm': any;
  '$screen-sm-min': any;

  // Medium screen / desktop
  '$screen-md': any;
  '$screen-md-min': any;

  // Large screen / wide desktop
  '$screen-lg': any;
  '$screen-lg-min': any;

  // Extra large screen / full hd
  '$screen-xl': any;
  '$screen-xl-min': any;

  // Extra extra large screen / large desktop
  '$screen-xxl': any;
  '$screen-xxl-min': any;

  // provide a maximum
  '$screen-xs-max': any;
  '$screen-sm-max': any;
  '$screen-md-max': any;
  '$screen-lg-max': any;
  '$screen-xl-max': any;

  // Grid system
  '$grid-columns': any;
  '$grid-gutter-width': any;

  // Layout
  '$layout-body-background': any;
  '$layout-header-background': any;
  '$layout-footer-background': any;
  '$layout-header-height': any;
  '$layout-header-padding': any;
  '$layout-footer-padding': any;
  '$layout-sider-background': any;
  '$layout-trigger-height': any;
  '$layout-trigger-background': any;
  '$layout-trigger-color': any;
  '$layout-zero-trigger-width': any;
  '$layout-zero-trigger-height': any;
  // Layout light theme
  '$layout-sider-background-light': any;
  '$layout-trigger-background-light': any;
  '$layout-trigger-color-light': any;

  // z-index list, order by `z-index`
  '$zindex-table-fixed': any;
  '$zindex-affix': any;
  '$zindex-back-top': any;
  '$zindex-badge': any;
  '$zindex-picker-panel': any;
  '$zindex-popup-close': any;
  '$zindex-modal': any;
  '$zindex-modal-mask': any;
  '$zindex-message': any;
  '$zindex-notification': any;
  '$zindex-popover': any;
  '$zindex-dropdown': any;
  '$zindex-picker': any;
  '$zindex-tooltip': any;

  // Animation
  '$animation-duration-slow': any; // Modal
  '$animation-duration-base': any;
  '$animation-duration-fast': any; // Tooltip

  //CollapsePanel
  '$collapse-panel-border-radius': any;

  //Dropdown
  '$dropdown-vertical-padding': any;
  '$dropdown-font-size': any;
  '$dropdown-line-height': any;

  // Form
  // ---
  '$label-required-color': any;
  '$label-color': any;
  '$form-warning-input-bg': any;
  '$form-item-margin-bottom': any;
  '$form-item-trailing-colon': any;
  '$form-vertical-label-padding': any;
  '$form-vertical-label-margin': any;
  '$form-error-input-bg': any;

  // Input
  // ---
  '$input-height-base': any;
  '$input-height-lg': any;
  '$input-height-sm': any;
  '$input-padding-horizontal': any;
  '$input-padding-horizontal-base': any;
  '$input-padding-horizontal-sm': any;
  '$input-padding-horizontal-lg': any;
  '$input-padding-vertical-base': any;
  '$input-padding-vertical-sm': any;
  '$input-padding-vertical-lg': any;
  '$input-placeholder-color': any;
  '$input-color': any;
  '$input-border-color': any;
  '$input-bg': any;
  '$input-number-handler-active-bg': any;
  '$input-number-handler-hover-bg': any;
  '$input-number-handler-bg': any;
  '$input-number-handler-border-color': any;
  '$input-addon-bg': any;
  '$input-hover-border-color': any;
  '$input-disabled-bg': any;
  '$input-outline-offset': any;

  // Select
  // ---
  '$select-border-color': any;
  '$select-item-selected-font-weight': any;
  '$select-dropdown-bg': any;
  '$select-item-selected-bg': any;
  '$select-item-active-bg': any;

  // Anchor
  // ---
  '$anchor-border-color': any;

  // Tooltip
  // ---
  // Tooltip max width
  '$tooltip-max-width': any;
  // Tooltip text color
  '$tooltip-color': any;
  // Tooltip background color
  '$tooltip-bg': any;
  // Tooltip arrow width
  '$tooltip-arrow-width': any;
  // Tooltip distance with trigger
  '$tooltip-distance': any;
  // Tooltip arrow color
  '$tooltip-arrow-color': any;

  // Popover
  // ---
  // Popover body background color
  '$popover-bg': any;
  // Popover text color
  '$popover-color': any;
  // Popover maximum width
  '$popover-min-width': any;
  // Popover arrow width
  '$popover-arrow-width': any;
  // Popover arrow color
  '$popover-arrow-color': any;
  // Popover outer arrow width
  // Popover outer arrow color
  '$popover-arrow-outer-color': any;
  // Popover distance with trigger
  '$popover-distance': any;

  // Modal
  // --
  '$modal-body-padding': any;
  '$modal-header-bg': any;
  '$modal-footer-bg': any;
  '$modal-footer-border-color-split': any;
  '$modal-mask-bg': any;

  // Progress
  // --
  '$progress-default-color': any;
  '$progress-remaining-color': any;
  '$progress-text-color': any;
  '$progress-radius': any;

  // Menu
  // ---
  '$menu-inline-toplevel-item-height': any;
  '$menu-item-height': any;
  '$menu-collapsed-width': any;
  '$menu-bg': any;
  '$menu-popup-bg': any;
  '$menu-item-color': any;
  '$menu-highlight-color': any;
  '$menu-item-active-bg': any;
  '$menu-item-active-border-width': any;
  '$menu-item-group-title-color': any;
  '$menu-icon-size': any;
  '$menu-icon-size-lg': any;

  '$menu-item-vertical-margin': any;
  '$menu-item-font-size': any;
  '$menu-item-boundary-margin': any;
  '$menu-icon-size': any;
  '$menu-icon-size-lg': any;
  '$menu-dark-selected-item-icon-color': any;
  '$menu-dark-selected-item-text-color': any;
  '$dark-menu-item-hover-bg': any;

  // dark theme
  '$menu-dark-color': any;
  '$menu-dark-bg': any;
  '$menu-dark-arrow-color': any;
  '$menu-dark-submenu-bg': any;
  '$menu-dark-highlight-color': any;
  '$menu-dark-item-active-bg': any;
  '$menu-dark-selected-item-icon-color': any;
  '$menu-dark-selected-item-text-color': any;
  '$menu-dark-item-hover-bg': any;
  // Spin
  // ---
  '$spin-dot-size-sm': any;
  '$spin-dot-size': any;
  '$spin-dot-size-lg': any;

  // Table
  // --
  '$table-header-bg': any;
  '$table-header-color': any;
  '$table-header-sort-bg': any;
  '$table-body-sort-bg': any;
  '$table-row-hover-bg': any;
  '$table-selected-row-color': any;
  '$table-selected-row-bg': any;
  '$table-body-selected-sort-bg': any;
  '$table-selected-row-hover-bg': any;
  '$table-expanded-row-bg': any;
  '$table-padding-vertical': any;
  '$table-padding-horizontal': any;
  '$table-border-radius-base': any;
  '$table-footer-bg': any;
  '$table-footer-color': any;

  // Tag
  // --
  '$tag-default-bg': any;
  '$tag-default-color': any;
  '$tag-font-size': any;

  // TimePicker
  // ---
  '$time-picker-panel-column-width': any;
  '$time-picker-panel-width': any;
  '$time-picker-selected-bg': any;

  // Carousel
  // ---
  '$carousel-dot-width': any;
  '$carousel-dot-height': any;
  '$carousel-dot-active-width': any;

  // Badge
  // ---
  '$badge-height': any;
  '$badge-dot-size': any;
  '$badge-font-size': any;
  '$badge-font-weight': any;
  '$badge-status-size': any;
  '$badge-text-color': any;

  // Rate
  // ---
  '$rate-star-color': any;
  '$rate-star-bg': any;

  // Card
  // ---
  '$card-head-color': any;
  '$card-head-background': any;
  '$card-head-padding': any;
  '$card-inner-head-padding': any;
  '$card-padding-base': any;
  '$card-actions-background': any;
  '$card-skeleton-bg': any;
  '$card-background': any;
  '$card-shadow': any;
  '$card-radius': any;

  // Comment
  // ---
  '$comment-padding-base': any;
  '$comment-nest-indent': any;
  '$comment-font-size-base': any;
  '$comment-font-size-sm': any;
  '$comment-author-name-color': any;
  '$comment-author-time-color': any;
  '$comment-action-color': any;
  '$comment-action-hover-color': any;

  // Tabs
  // ---
  '$tabs-card-head-background': any;
  '$tabs-card-height': any;
  '$tabs-card-active-color': any;
  '$tabs-title-font-size': any;
  '$tabs-title-font-size-lg': any;
  '$tabs-title-font-size-sm': any;
  '$tabs-ink-bar-color': any;
  '$tabs-bar-margin': any;
  '$tabs-horizontal-margin': any;
  '$tabs-horizontal-padding': any;
  '$tabs-horizontal-padding-lg': any;
  '$tabs-horizontal-padding-sm': any;
  '$tabs-vertical-padding': any;
  '$tabs-vertical-margin': any;
  '$tabs-scrolling-size': any;
  '$tabs-highlight-color': any;
  '$tabs-hover-color': any;
  '$tabs-active-color': any;
  '$tabs-card-gutter': any;
  '$tabs-card-tab-active-border-top': any;

  // BackTop
  // ---
  '$back-top-color': any;
  '$back-top-bg': any;
  '$back-top-hover-bg': any;

  // Avatar
  // ---
  '$avatar-size-base': any;
  '$avatar-size-lg': any;
  '$avatar-size-sm': any;
  '$avatar-font-size-base': any;
  '$avatar-font-size-lg': any;
  '$avatar-font-size-sm': any;
  '$avatar-bg': any;
  '$avatar-color': any;
  '$avatar-border-radius': any;

  // Switch
  // ---
  '$switch-height': any;
  '$switch-sm-height': any;
  '$switch-sm-checked-margin-left': any;
  '$switch-disabled-opacity': any;
  '$switch-color': any;
  '$switch-shadow-color': any;

  // Pagination
  // ---
  '$pagination-item-size': any;
  '$pagination-item-size-sm': any;
  '$pagination-font-family': any;
  '$pagination-font-weight-active': any;
  '$pagination-item-bg-active': any;

  // PageHeader
  // ---
  '$page-header-padding': any;
  '$page-header-padding-vertical': any;
  '$page-header-padding-breadcrumb': any;
  '$page-header-back-color': any;

  // Breadcrumb
  // ---
  '$breadcrumb-base-color': any;
  '$breadcrumb-last-item-color': any;
  '$breadcrumb-font-size': any;
  '$breadcrumb-icon-font-size': any;
  '$breadcrumb-link-color': any;
  '$breadcrumb-link-color-hover': any;
  '$breadcrumb-separator-color': any;
  '$breadcrumb-separator-margin': any;

  // Slider
  // ---
  '$slider-margin': any;
  '$slider-rail-background-color': any;
  '$slider-rail-background-color-hover': any;
  '$slider-track-background-color': any;
  '$slider-track-background-color-hover': any;
  '$slider-handle-border-width': any;
  '$slider-handle-background-color': any;
  '$slider-handle-color': any;
  '$slider-handle-color-hover': any;
  '$slider-handle-color-focus': any;
  '$slider-handle-color-focus-shadow': any;
  '$slider-handle-color-tooltip-open': any;
  '$slider-handle-shadow': any;
  '$slider-dot-border-color': any;
  '$slider-dot-border-color-active': any;
  '$slider-disabled-color': any;
  '$slider-disabled-background-color': any;

  // Tree
  // ---
  '$tree-title-height': any;
  '$tree-child-padding': any;
  '$tree-directory-selected-color': any;
  '$tree-directory-selected-bg': any;
  '$tree-node-hover-bg': any;
  '$tree-node-selected-bg': any;

  // Collapse
  // ---
  '$collapse-header-padding': any;
  '$collapse-header-padding-extra': any;
  '$collapse-header-bg': any;
  '$collapse-content-padding': any;
  '$collapse-content-bg': any;

  // Skeleton
  // ---
  '$skeleton-color': any;

  // Transfer
  // ---
  '$transfer-header-height': any;
  '$transfer-disabled-bg': any;
  '$transfer-list-height': any;

  // Message
  // ---
  '$message-notice-content-padding': any;

  // Motion
  // ---
  '$wave-animation-width': any;

  // Alert
  // ---
  '$alert-success-border-color': any;
  '$alert-success-bg-color': any;
  '$alert-success-icon-color': any;
  '$alert-info-border-color': any;
  '$alert-info-bg-color': any;
  '$alert-info-icon-color': any;
  '$alert-warning-border-color': any;
  '$alert-warning-bg-color': any;
  '$alert-warning-icon-color': any;
  '$alert-error-border-color': any;
  '$alert-error-bg-color': any;
  '$alert-error-icon-color': any;

  // List
  // ---
  '$list-header-background': any;
  '$list-footer-background': any;
  '$list-empty-text-padding': any;
  '$list-item-padding': any;
  '$list-item-meta-margin-bottom': any;
  '$list-item-meta-avatar-margin-right': any;
  '$list-item-meta-title-margin-bottom': any;

  // Statistic
  // ---
  '$statistic-title-font-size': any;
  '$statistic-content-font-size': any;
  '$statistic-unit-font-size': any;
  '$statistic-font-family': any;

  // Drawer
  // ---
  '$drawer-header-padding': any;
  '$drawer-body-padding': any;

  // Timeline
  // ---
  '$timeline-width': any;
  '$timeline-color': any;
  '$timeline-dot-border-width': any;
  '$timeline-dot-color': any;
  '$timeline-dot-bg': any;

  // Typography
  // ---
  '$typography-title-font-weight': any;
}
