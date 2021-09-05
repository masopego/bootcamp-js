import { getAccount } from "../account/account.api";
import { getMovements } from "./movements.api";
import { addMovementRows } from "./movements.helpers";
import { mapMovementsListApiToVm } from "./movements.mapper";
import { history } from "../../core/router";
import { onSetValues } from "../../common/helpers";
import { mapAccountApiToVm } from "../account/account.mappers";
import { getAccountList } from "../account-list/account-list.api";

const params = history.getParams();

const isAccountId = Boolean(params.id);

if (isAccountId) {
  getAccount(params.id)
    .then((apiAccount) => {
      const account = mapAccountApiToVm(apiAccount);
      onSetValues(account);

      return getMovements(account.id);
    })
    .then((data) => renderMovements(data));
} else {
  getAccountList()
    .then((accountList) => {
      const account = mapAccountApiToVm(accountList[0]);
      onSetValues(account);
      return getMovements(account.id);
    })
    .then((data) => renderMovements(data));
}

const renderMovements = (data) => {
  const mappedMovements = mapMovementsListApiToVm(data);
  addMovementRows(mappedMovements);
};
