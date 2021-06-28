import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";

export class Application {
  id?: any;
  name?: string;
  description?: string;
  contact?: string;
  admins?: string[];
  environments?: Environment[];
}
