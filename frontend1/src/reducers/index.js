import { combineReducers } from "redux";
import bank from "./bank";
import branch from "./branch";
import errors from "./errors";
import complaint from "./complaint";
import messages from "./messages";
import auth from "./auth";
import account from "./account";
import bill from "./bill";
import transaction from "./transaction";
import funds from "./funds";
import detail from "./detail";
import user from "./user";
import loan from "./loan";
export default combineReducers({
  bank,
  bill,
  detail,
  user,
  branch,
  errors,
  funds,
  loan,
  complaint,
  messages,
  transaction,
  auth,
  user,
  account,
});
