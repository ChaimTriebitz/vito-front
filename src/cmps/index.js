import { Header } from './Header.jsx'
import { Main } from './Main.jsx'
import { Footer } from './Footer.jsx'
import { Msg } from './Msg.jsx'

// INPUTS
import { Inputs } from './inputs/Inputs.jsx'
import { Input } from './inputs/Input.jsx'
import { Select } from './inputs/Select.jsx'
import { Textarea } from './inputs/Textarea.jsx'
import { MultiSelect } from './inputs/MultiSelect.jsx'

// AUTH
import { Register } from './auth/Register.jsx'
import { Login } from './auth/Login.jsx'

// TABLE
import { Table } from './table/Table.jsx'
import { Cells } from './table/Cells.jsx'
import { Actions } from './table/Actions.jsx'
import { Text } from './table/Text.jsx'
import { Phone } from './table/Phone.jsx'
import { Email } from './table/Email.jsx'
import { Date } from './table/Date.jsx'
import { Remove } from './table/Remove.jsx'
import { SelectRow } from './table/SelectRow.jsx'
import { Details } from './table/Details.jsx'
import { Notes } from './table/Notes.jsx'
import { SortHeader } from './table/SortHeader.jsx'

// DIALOG
import { Dialogs } from './dialogs/Dialogs.jsx'
import { DetailsDialog } from './dialogs/DetailsDialog.jsx'
import { AddRowDialog } from './dialogs/AddRowDialog.jsx'
import { ConfirmDialog } from './dialogs/ConfirmDialog.jsx'

// ACTIONS-BAR
import { ActionsBar } from './actions-bar/ActionsBar.jsx'
import { AddRow } from './actions-bar/AddRow.jsx'
import { Search } from './actions-bar/Search.jsx'

export {
   Msg,
   Header,
   Main,
   Footer,
   // ACTIONS-BAR
   ActionsBar,
   AddRow,
   Search,
   // INPUTS
   Inputs,
   Textarea,
   MultiSelect,
   Select,
   Input,
   // AUTH
   Register,
   Login,
   // TABLE
   SortHeader,
   Table,
   Cells,
   Text,
   SelectRow,
   Date,
   Phone,
   Email,
   Remove,
   Details,
   Actions,
   Notes,
   // DIALOGS
   Dialogs,
   ConfirmDialog,
   DetailsDialog,
   AddRowDialog,
}