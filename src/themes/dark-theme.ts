import { colors } from "./dark-colors";

export const clr = {
  blue: {
    900: "#1A2F5C",
    800: "#1E3B73",
    700: "#234789",
    600: "#2853A0",
    500: "#3D3BF3",
    400: "#4F7BD3",
    300: "#7596DE",
    200: "#9BB5E9",
    100: "#C2D3F4",
    50: "#E8F0FF",
  },
  green: {
    900: "#1B4D00",
    800: "#246600",
    700: "#2D8000",
    600: "#369900",
    500: "#40B300",
    400: "#59CC00",
    300: "#73E600",
    200: "#8CFF00",
    100: "#B8FF4D",
    50: "#E5FF99",
  },
  red: {
    900: "#FF1A1A",
    800: "#FF3333",
    700: "#FF4D4D",
    600: "#FF6666",
    500: "#FF8080",
    400: "#FF9999",
    300: "#FFB3B3",
    200: "#FFCCCC",
    100: "#FFE6E6",
    50: "#FFF2F2",
  },
};
export default {
  mode: "dark",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  boxShadows: {
    main: "0px 2px 4px rgba(129, 122, 254, 0.2)",
    card: "0px 2px 10px rgba(28, 25, 78, 0.12)",
    elevated: "0px 1px 20px rgba(45, 42, 89, 0.1)",
    popup: "0px 2px 6px rgba(0, 0, 0, 0.25)",
    primaryHeader: "0px 8px 24px rgba(97, 91, 194, 0.2)",
    separator: "0px 2px 4px rgba(32, 32, 33, 0.12)", // Notifications header
    accordionFooter: "inset 0px 2px 4px rgba(32, 32, 33, 0.05)",
    reverseFooter: "inset 0px -2px 4px rgba(32, 32, 33, 0.05)",
  },
  typography: {
    fontFamily: "Sen, Roboto, sans-serif",
    fontWeightBold: "700",
    fontWeightMedium: "700",
    allVariants: { lineHeight: 1.4 },
    button: { lineHeight: 1.75 },
    h1: {
      fontSize: "1.5rem",
      lineHeight: 1.875,
    },
    h2: {
      fontSize: `${20 / 16}rem`,
      fontWeight: "700",
    },
    h3: {
      fontSize: "1rem",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "400",
    },
    caption: {
      fontSize: `${12 / 16}rem`,
    },
  },
  fontSizes: {
    extraLargeHeader: "2.5rem",
    largeHeader: "2rem",
    mediumHeader: "1.5rem",
    mainHeader: "1.25rem",
    bodySize: "1rem",
    smallBody: `${14 / 16}rem`,
    smallerBody: `${12 / 16}rem`,
  },
  fontWeight: {
    thin: 300,
    medium: 400,
    semi: 700,
    bold: 700,
  },
  shape: {
    borderRadius: 4,
    borderRadiusMedium: 8,
    borderRadiusLarge: 12,
    borderRadiusExtraLarge: 20,
    tableRowHeight: 64,
    tableRowHeightCompact: 56,
    tableRowHeightDense: 48,
  },
  zIndex: {
    sticky: 1400,
  },

  palette: {
    common: {
      white: "#EEEEFC", // Switch base (OFF) // Tooltips text color // Text color
      black: "#A0A0B1", // Switch track (OFF)
    },
    text: {
      primary: "#EEEEFC",
      secondary: "#A0A0B1",
      disabled: "#888799",
    },
    primary: {
      main: clr.blue[500],
      light: "#4C4992",
      // Maybe to move links color to another variable????
      dark: "#9792ED", // Color used for links and on hover for primary buttons
      contrastText: "#EEEEFC", // Color used for content when primary.main is used as a background
    },
    secondary: {
      // Used for purple badges and puple light elements
      main: "#9792ED", // used on icons on these elements
      light: "#34325E", // used as a bakground on these elements
      dark: "#EEEEFC", // used for text on these elements
      border: "#4C4992",
      contrastText: "#EEEEFC", // Color used for content when info.main is used as a background
    },
    info: {
      // main: '#5483C9',  // used on icons on these elements
      main: "#a2bbe2", // used on icons on these elements
      light: "#1A2641", // used as a bakground on these elements
      dark: "#a2bbe2", // used for text on these elements
      border: "#1B407A",
      contrastText: "#EEEEFC", // Color used for content when info.main is used as a background
    },
    profit: {
      main: clr.green[200],
    },
    loss: {
      main: clr.red[800],
    },
    success: {
      // main: '#62872F',  // used on icons on these elements
      main: "#94ae6f", // used on icons on these elements
      light: "#333D30", // used as a bakground on these elements
      dark: "#94ae6f", // used for text on these elements
      border: "#3D600C",
      contrastText: "#EEEEFC", // Color used for content when success.main is used as a background
    },
    warning: {
      // main: '#9E691C',  // used on icons on these elements
      main: "#bc7d21", // used on icons on these elements
      light: "#3B302C", // used as a bakground on these elements
      dark: "#bc7d21", // used for text on these elements
      contrastText: "#EEEEFC", // Color used for content when warning.main is used as a background
      border: "#6C4A19",
    },
    error: {
      // main: '#B93F4A',  // used on error buttons // used on icons on these elements
      main: "#ff6472", // used on error buttons // used on icons on these elements
      light: "#3F2835", // used as a bakground on these elements
      // dark: '#F15260',  // used for text on these elements
      dark: "#ff6472", // used for text on these elements
      border: "#8A3E45",
      contrastText: "#EEEEFC", // Color used for content when error.main is used as a background
    },
    web: {
      main: "#1A4049", // used on sales-related elements
      contrastText: "#EEEEFC", // Color used for inner text
    },

    /**
     *  Used for grey badges, hover elements, and grey light elements
     */
    neutral: {
      main: "#858699", // used on icons on these elements
      light: "#2B2A3C", // used as a bakground on these elements
      dark: "#EEEEFC", // used for text on these elements
      border: "#454360",
      contrastText: "#EEEEFC", // Color used for text inside badge
    },

    background: {
      paper: "#222130", // Background color for all containers
      default: "#000",
      application: "#1A1924",
      sidebar: "#4C4992",
      alternative: "#4C4992", // used on the dark theme to shwitch primary main to a darker shade
      elevation1: "#2B2A3C",
      elevation2: "#2B2A3C",
      // elevation2: '#302E42',
    },

    // action: {
    //     // Colors used for Icons and Buttons -> this comes from MUI and we overwriting it with our colors
    //     active: actionColors[0.54],
    //     hover: actionColors[0.05],
    //     hoverOpacity: 0.05,
    //     selected: actionColors[0.08],
    //     selectedOpacity: 0.08,
    //     disabled: actionColors[0.32],
    //     disabledBackground: actionColors[0.12],
    //     disabledOpacity: 0.38,
    //     focus: actionColors[0.12],
    //     focusOpacity: 0.12,
    //     activatedOpacity: 0.12,
    //     alternative: colors.purple[1000],
    // },

    /**
     * General divider
     */
    divider: "#39384C",

    /**
     * Table colors.
     */
    table: {
      headerBackground: "#2B2A3C",
      headerHover: "#313045",
      divider: "#323144",
      rowHover: "#262536",
    },

    /**
     * Text highlight effect color. Used when filtering/searching over content
     */
    highlight: "rgba(255, 234, 204, 0.7)",

    /**
     * Used for the interactive guide spotlight
     */
    spotlight: {
      border: "#8c89bf",
      outline: "#bcb9f3",
      pulse: "#bcb9f3",
    },

    /**
     * Background color used for the API command in the sidebar
     */
    codebox: "rgba(52, 50, 94, 0.3)",

    /**
     * Links color
     */
    links: "#9792ED",

    /**
     * Gradient for the login page
     */
    loginGradient: {
      from: "#4C4992",
      to: "#4944a7",
    },

    /**
     * Colors for event log output
     */
    eventLog: {
      diffAdd: "#77AB2E",
      diffSub: "#df626c",
      edited: "#EEEEFC",
    },

    /**
     * For 'Seen' column on feature flags list and other
     */
    seen: {
      unknown: "#2B2A3C",
      recent: "#4E6131",
      inactive: "#875D21",
      abandoned: "#8A3E45",
      primary: "#302E42",
    },

    /**
     * For Environment Accordion
     */
    envAccordion: {
      disabled: "#2B2A3C",
      expanded: "#1A1924",
    },

    /**
     * MUI grey colors
     */
    grey: {
      // This was to see were these colors are used from MUI
      // 50: '#A6000E',
      100: "#888799", // Disabled Switch base (OFF)
      // 200: '#A6000E',
      // 300: '#A6000E',
      // 400: '#A6000E',
      // 500: '#A6000E',
      600: "#343348", // slider tooltip background
      700: "#343348", // Dark tooltip background
      // 800: '#A6000E',
      // 900: '#A6000E',
      // A100: '#A6000E',
      // A200: '#A6000E',
      // A400: '#A6000E',
      // A700: '#A6000E',
    },
    variants: colors.variants,

    /**
     * Dashboard and charts
     */
    charts: {
      gauge: {
        gradientStart: "#4C4992",
        gradientEnd: "#9792ED",
        background: "#39384C",
        sectionLine: "#8c89bf",
        text: colors.grey[800],
      },
      health: {
        mainCircleBackground: "#34325E",
        orbit: "#4C4992",
        circles: "#2B2A3C",
        text: colors.grey[500],
        title: colors.grey[50],
        healthy: colors.purple[800],
        stale: colors.red[800],
        potentiallyStale: colors.orange[800],
        gradientStale: "#8A3E45",
        gradientPotentiallyStale: "#875D21",
      },
      series: colors.chartSeries,
    },
  },
} as const;
