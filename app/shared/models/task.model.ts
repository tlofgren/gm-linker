import { Group } from './group.model';
import { User } from './user.model';

export class Task {
    attachments: string[]; // Work in progress
    comment: string;
    dateCompleted: string;
    dateDue: number;
    description: string;
    id: string;
    isDraft: boolean;
    groups: Group[];
    lastUpdatedBy: User;
    name: string;
    owners: User[];
    phase: string;
    plantName: string;
    reminderOffset: number;
    sequenceNumber: number;
    sequenceTypeName: string;
    status: string;
    type: string;
    users: User[];

    //PFMEA Task Fields
    pfmeaRequired: boolean;
    newRPN: number;
    newDetection: number;
    newOccurrence: number;
    newSeverity: number;
    oldRPN: number;
    oldDetection: number;
    oldOccurrence: number;
    oldSeverity: number;

    //Safety Task Fields
    question1: boolean;
    question2: boolean;
    question3: boolean;
    question4: boolean;
}
