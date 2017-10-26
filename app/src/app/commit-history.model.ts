export class CommitHistory {
  gmId: string;
  projects: Project[];
}

export class Project {
  asmsNum: number;
  projectFriendlyName: string;
  ppmNum: number;
  commitHistory: Commit[];
  users: string[]; // gmids
}

export class Commit {
  latestCommitTimeStamp: number;
  filesCommitted: string[];
  scm: string;
}
