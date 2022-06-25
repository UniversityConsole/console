import {buttonTheme} from "./button";
import {containerTheme} from "./container";
import {drawerTheme} from "./drawer";
import {iconTheme} from "./icon";
import {paperTheme} from "./paper";
import {tableTheme} from "./table";
import {typographyTheme} from "./typography";
import {deepmerge} from "@mui/utils";
import {createTheme} from "@mui/material/styles";
import {dialogTheme} from "./dialog";
import {formTheme} from "./TextField";

const PARTS = [
  buttonTheme,
  containerTheme,
  drawerTheme,
  iconTheme,
  paperTheme,
  tableTheme,
  typographyTheme,
  dialogTheme,
  formTheme
];

export const theme = createTheme(PARTS.reduce((p, c) => deepmerge(p, c), PARTS.shift()!!));

