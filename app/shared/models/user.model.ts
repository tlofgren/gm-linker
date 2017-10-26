import { Group } from './group.model';
import { Role } from './role.model';

export class User {
    givenName: string;
    gimd: string;
    isEnabled: boolean;
    lastName: string;
    adDomainName: string;
    groupMemberships: Group[];
    roleMemberships: Role[];
}
