import {Injectable} from "@nestjs/common";
import {UnitExpirationRole} from "src/modules/shorten/enum/unit_expiration.enum";

import {add, isAfter} from "date-fns";

@Injectable()
export class DateActionsService {
  async isAfterDate(
    date,
    dateCompare,
    unit_expiration: UnitExpirationRole,
    expiration: number,
  ) {
    const actionsDate = {
      segundos(date, dateToCompare, expiration) {
        return isAfter(add(dateToCompare, {seconds: expiration}), date);
      },
      minutos(date, dateToCompare, expiration) {
        return isAfter(add(dateToCompare, {minutes: expiration}), date);
      },
      horas(date, dateToCompare, expiration) {
        return isAfter(add(dateToCompare, {hours: expiration}), date);
      },
      dias(date, dateToCompare, expiration) {
        return isAfter(add(dateToCompare, {days: expiration}), date);
      },
    };

    const actions = await actionsDate[unit_expiration];

    return await actions(date, dateCompare, expiration);
  }
}
