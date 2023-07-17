import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 220;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "calc(100vh - 82px)",
  },
  textModerationIcon: {
    color: "#00e676",
  },
  icon: {
    color: "#fff",
  },
  drawer: {
    backgroundColor: "#4985DF",
    color: "#fff",

    [theme.breakpoints.up("xs")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItemRoot: {
    minWidth: "40px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
