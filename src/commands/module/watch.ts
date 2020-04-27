import BaseCommand from '../../base';
import { file } from 'find';

export default class WatchCommand extends BaseCommand {
  static description = 'watches the modules directory and updates corresponding global pages directory';

  async run() {
    const self = this;

    file(/\.tsx$/, this.sourceDestinationPath('modules'), function(files) {
      files.forEach(f => self.log(`${f}`));
    });

    this.logAffectedFiles();
  }
}
